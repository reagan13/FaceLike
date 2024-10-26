import homeIcon from "../assets/home.svg";
import scanIcon from "../assets/scan.png";

const FloatingButtons = () => {
	return (
		<div className="fixed left-1/2 bottom-4 transform -translate-x-1/2 rounded-full border border-white">
			<div className="flex justify-center items-center p-2 rounded-full border border-white bg-black bg-opacity-5">
				<nav className="flex space-x-4">
					<a
						href="#"
						className="flex items-center justify-center p-2 hover:bg-gray-700 rounded-full transition"
					>
						<img
							src={homeIcon}
							alt="home"
							className="h-6 w-6 text-white filter invert "
						/>
					</a>
					<a
						href="#"
						className="flex items-center justify-center p-2 hover:bg-gray-700 rounded-full transition"
					>
						<img
							src={scanIcon}
							alt="scan"
							className="h-6 w-6 text-white filter invert "
						/>
					</a>
				</nav>
			</div>
		</div>
	);
};

export default FloatingButtons;
