import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Men from "../assets/face.png";
import { useNavigate } from "react-router-dom";
import Discord from "../assets/discord.jpg";
const Scan = () => {
	const navigate = useNavigate();

	const openCaptureRight = () => {
		navigate("/scan/capture");
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			{/* Title Section */}
			<section className="flex flex-col items-center justify-center text-center pt-16 pb-5">
				<h1 className="text-4xl md:text-6xl font-heading mb-4">
					Facial Feature Analysis
				</h1>
				<p className="text-lg md:text-xl mb-8">
					Unlock the secrets of your facial features with our AI-powered
					analysis tool.
				</p>
			</section>

			{/* Image Section */}
			<div className="flex justify-center items-center flex-grow">
				<Carousel responsive={responsive} className="w-full max-w-2xl">
					<div className="flex flex-col items-center mb-20">
						<img
							src={Men}
							alt="Facial Analysis"
							className="rounded-lg shadow-lg mb-4 size-96"
						/>
						<button
							onClick={openCaptureRight}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
						>
							Begin Scan
						</button>
					</div>
					<div className="flex items-center justify-center h-full">
						<p className="text-lg font-semibold text-white">
							Your scanned image will be uploaded here.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center mt-4 p-6  rounded-lg shadow-lg ">
						<img
							src={Discord} // Replace with your Discord image URL
							alt="Discord"
							className="size-80 mb-4" // Adjusted to your specified size
							style={{ border: "2px solid #5865F2", borderRadius: "12px" }} // Adding a border with rounded corners
						/>
						<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition transform duration-200 hover:scale-105 mt-2">
							Join Now
						</button>
					</div>
				</Carousel>
			</div>

			{/* Description Section */}
			<section className="px-4 py-20">
				<h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
					How It Works
				</h2>
				<p className="text-center mb-4">
					Our advanced AI technology analyzes various aspects of your facial
					features to provide you with insights and recommendations tailored to
					you.
				</p>
				<p className="text-center">
					Whether it&apos;s improving your skincare routine or enhancing your
					features, our tool is here to help you discover your true potential.
				</p>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-400 py-6 text-center">
				<p>© 2024 FaceLike. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Scan;
