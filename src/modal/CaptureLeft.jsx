import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptureLeft = () => {
	const videoRef = useRef(null);
	const captureRef = useRef(null);
	const [capturedImage, setCapturedImage] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const startCamera = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				videoRef.current.srcObject = stream;
			} catch (err) {
				console.error("Error accessing camera: ", err);
			}
		};

		startCamera();

		return () => {
			if (videoRef.current && videoRef.current.srcObject) {
				videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
			}
		};
	}, []);

	const captureImage = () => {
		const context = captureRef.current.getContext("2d");
		context.drawImage(
			videoRef.current,
			0,
			0,
			captureRef.current.width,
			captureRef.current.height
		);
		const imageData = captureRef.current.toDataURL("image/png");
		setCapturedImage(imageData);
	};

	const stopCamera = () => {
		if (videoRef.current && videoRef.current.srcObject) {
			videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
		}
	};

	return (
		<div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
			<h2 className="text-center text-xl mb-4">Capture Left</h2>

			{capturedImage ? (
				<>
					<img
						src={capturedImage}
						alt="Captured"
						className="w-full rounded-lg mb-4"
					/>
					<div className="flex justify-between mt-4">
						<button
							onClick={() => setCapturedImage(null)} // Capture again
							className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
						>
							Capture Again
						</button>
						<button
							onClick={() => {
								stopCamera();
								navigate("/scan/front"); // Navigate back to scan page
							}}
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						>
							Continue
						</button>
					</div>
				</>
			) : (
				<>
					<video
						ref={videoRef}
						autoPlay
						className="w-full rounded-lg mb-4"
						muted
					/>
					<canvas
						ref={captureRef}
						className="hidden"
						width="640"
						height="480"
					></canvas>
					<div className="flex justify-between mt-4">
						<button
							onClick={captureImage}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Capture
						</button>
						<button
							onClick={() => {
								stopCamera();
								navigate("/scan");
							}}
							className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
						>
							Cancel
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default CaptureLeft;
