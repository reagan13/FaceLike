import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Capture = () => {
	const videoRef = useRef(null);
	const captureRef = useRef(null);
	const [capturedImage, setCapturedImage] = useState(null);
	const [isCameraActive, setIsCameraActive] = useState(true);
	const navigate = useNavigate();

	const handleContinue = () => {
		navigate("/reveal-results-demo", { state: { image: capturedImage } });
		window.location.reload();
	};

	const handleBack = () => {
		navigate("/scan");
		window.location.reload();
	};
	const startCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				videoRef.current.play();
			}
		} catch (err) {
			console.error("Error accessing camera:", err);
		}
	};

	const stopCamera = () => {
		if (videoRef.current && videoRef.current.srcObject) {
			const stream = videoRef.current.srcObject;
			const tracks = stream.getTracks();
			tracks.forEach((track) => track.stop());
			videoRef.current.srcObject = null; // Stop the video stream
		}
	};

	const captureImage = () => {
		const context = captureRef.current.getContext("2d");
		context.drawImage(
			videoRef.current,
			0,
			0,
			captureRef.current.width,
			captureRef.current.height
		);
		setCapturedImage(captureRef.current.toDataURL("image/png"));
		setIsCameraActive(false); // Hide the camera feed
	};

	useEffect(() => {
		startCamera();

		return () => {
			stopCamera(); // Stop the camera on unmount
		};
	}, []);

	return (
		<div className="bg-black text-white min-h-screen flex flex-col items-center">
			{/* Back Button */}
			<button
				onClick={handleBack} // Navigate back to the previous page
				className="absolute top-4 left-4 bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
			>
				Back
			</button>

			{/* Title Section */}
			<h1 className="text-2xl md:text-4xl font-heading mt-8 mb-8">
				Capture Your Image
			</h1>
			<p className="text-lg md:text-xl mb-12 text-center">
				Position your face in the frame and click the button below.
			</p>

			{/* Image Capture Section */}
			<section className="flex flex-col items-center mb-12 border border-gray-600 p-4 rounded-lg shadow-lg bg-gray-800">
				{capturedImage ? (
					<>
						<img
							src={capturedImage}
							alt="Captured"
							className="w-full max-w-md rounded-lg mb-4 border-4 border-white"
						/>
						<div className="flex justify-between mt-4 gap-4 w-full">
							<button
								onClick={() => {
									setCapturedImage(null); // Capture again
									setIsCameraActive(true); // Show the camera feed
									startCamera(); // Restart the camera
								}}
								className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow"
							>
								Capture Again
							</button>
							<button
								onClick={handleContinue} // Navigate to reveal results demo with the image
								className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow"
							>
								Continue
							</button>
						</div>
					</>
				) : (
					<>
						{isCameraActive && (
							<video
								ref={videoRef}
								className="w-full max-w-md rounded-lg mb-4"
								autoPlay
								muted
							/>
						)}
						<canvas
							ref={captureRef}
							className="hidden"
							width="640"
							height="480"
						></canvas>
						<button
							onClick={captureImage}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
						>
							Capture Image
						</button>
					</>
				)}
			</section>
		</div>
	);
};

export default Capture;
