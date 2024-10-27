import homeIcon from "../assets/home.svg";
import scanIcon from "../assets/scan.png";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
	return (
		<div className="fixed left-1/2 bottom-4 transform -translate-x-1/2 z-10  ">
			<div className="flex justify-center items-center p-2 rounded-full border-2 border-white bg-black bg-opacity-50 shadow-lg">
				<nav className="flex space-x-4 ">
					<Link
						to="/"
						className="flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group"
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={homeIcon}
							alt="home"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
					</Link>

					<Link
						to="/scan"
						className="flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group"
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={scanIcon}
							alt="scan"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
					</Link>
					<Link
						to="/scan"
						className="flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group"
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={scanIcon}
							alt="scan"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
					</Link>
					<Link
						to="/scan"
						className="flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group"
					>
						<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
						<img
							src={scanIcon}
							alt="scan"
							className="h-6 w-6 text-white filter invert relative z-10"
						/>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default FloatingButtons;
