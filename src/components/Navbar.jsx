import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-primary text-primary-text px-4 py-3 shadow-lg">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<a href="#" className="text-2xl font-heading hover:text-accent-blue">
					AppName
				</a>

				{/* Menu Items (Desktop) */}
				<div className="hidden md:flex space-x-6">
					<a href="#" className="font-sans hover:text-accent-blue">
						Home
					</a>
					<a href="#" className="font-sans hover:text-accent-blue">
						About
					</a>
					<a href="#" className="font-sans hover:text-accent-blue">
						Services
					</a>
					<a href="#" className="font-sans hover:text-accent-blue">
						Contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-secondary-text focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-secondary border-t border-gray-700">
					<a
						href="#"
						className="block px-4 py-2 text-primary-text hover:bg-[#2a2a2a] hover:text-accent-blue"
					>
						Home
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-primary-text hover:bg-[#2a2a2a] hover:text-accent-blue"
					>
						About
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-primary-text hover:bg-[#2a2a2a] hover:text-accent-blue"
					>
						Services
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-primary-text hover:bg-[#2a2a2a] hover:text-accent-blue"
					>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
