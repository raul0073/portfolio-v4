import React, { Dispatch, HTMLAttributes, SetStateAction } from "react";

interface HamburgerMenuBtnProps extends HTMLAttributes<HTMLButtonElement> {
	isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function HamburgerMenuBtn({
	isOpen,
	setIsOpen,
	...props
}: HamburgerMenuBtnProps) {
	const toggleMenu = () => {
			setIsOpen(!isOpen);
	};
	return (
		<button
		{...props}
			className={`hamburger-btn md:hidden text-gray-500 size-11 relative outline-none transition-colors duration-300 ease-linear  bg-transparent hover:bg-transparent border dark:border-white/10 border-stone-800/40 rounded-full hover:text-white ${isOpen && 'border-red-600/30'}`}
			onClick={toggleMenu}>
			<div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<span
					aria-hidden="true"
					className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
						isOpen ? "rotate-45" : "-translate-y-1.5"
					}`}></span>
				<span
					aria-hidden="true"
					className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
						isOpen ? "opacity-0" : ""
					}`}></span>
				<span
					aria-hidden="true"
					className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
						isOpen ? "-rotate-45" : "translate-y-1.5"
					}`}></span>
			</div>
		</button>
	);
}

export default HamburgerMenuBtn;
