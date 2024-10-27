import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import scanIcon from "../assets/scan.png";
import analysis from "../assets/data-analysis.png";
import results from "../assets/results.png";
import more from "../assets/more.png";
import messenger from "../assets/messenger.png";

const FloatingButtons = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const [activeLabel, setActiveLabel] = useState("");
	const [clickedLabel, setClickedLabel] = useState("");

	const getButtonClass = (path) => {
		return currentPath === path
			? "flex items-center justify-center p-2 bg-blue-600 rounded-full transition relative group"
			: "flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group";
	};

	const handleMouseEnter = (label) => {
		setActiveLabel(label);
	};

	const handleMouseLeave = () => {
		setActiveLabel("");
	};

	const handleClick = (label) => {
		setClickedLabel(label);
	};

	return (
		<div className="fixed left-1/2 bottom-4 transform -translate-x-1/2 z-10">
			<div className="flex justify-center items-center p-2 rounded-full border-2 border-white bg-black bg-opacity-50 shadow-lg">
				<nav className="flex space-x-4">
					<Link
						to="/"
						className={getButtonClass("/")}
						onMouseEnter={() => handleMouseEnter("Home")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("Home")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={homeIcon}
							alt="home"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "Home" || clickedLabel === "Home") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								Home
							</div>
						)}
					</Link>

					<Link
						to="/scan"
						className={getButtonClass("/scan")}
						onMouseEnter={() => handleMouseEnter("Scan")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("Scan")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={scanIcon}
							alt="scan"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "Scan" || clickedLabel === "Scan") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								Scan
							</div>
						)}
					</Link>

					<Link
						to="/reveal-results-demo"
						className={getButtonClass("/reveal-results-demo")}
						onMouseEnter={() => handleMouseEnter("Results")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("Results")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={results}
							alt="results"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "Results" || clickedLabel === "Results") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								Results
							</div>
						)}
					</Link>

					<Link
						to="/analysis"
						className={getButtonClass("/analysis")}
						onMouseEnter={() => handleMouseEnter("Analysis")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("Analysis")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={analysis}
							alt="analysis"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "Analysis" || clickedLabel === "Analysis") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								Analysis
							</div>
						)}
					</Link>

					<Link
						to="/more"
						className={getButtonClass("/more")}
						onMouseEnter={() => handleMouseEnter("More")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("More")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={more}
							alt="more"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "More" || clickedLabel === "More") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								More
							</div>
						)}
					</Link>

					<Link
						to="/messenger"
						className={getButtonClass("/messenger")}
						onMouseEnter={() => handleMouseEnter("Messenger")}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick("Messenger")}
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={messenger}
							alt="messenger"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
						{(activeLabel === "Messenger" || clickedLabel === "Messenger") && (
							<div className="absolute bottom-full mb-2 text-center text-white text-sm">
								Messenger
							</div>
						)}
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default FloatingButtons;
