"use client";
import { useState } from "react";
import Signature from "../Signature";
import ButtonComp from "../ui/ButtonComp";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import MobileNavigation from "./MobileNavigation";

function NavigationComp() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header className="navbar-header fixed top-0 left-0 w-full z-50 h-fit border-b shadow-md shadow-appGray/10 border-appYellow/10  backdrop-blur-lg " id="home">
			<div className="flex justify-between items-center py-3 px-4 md:px-12 ">
			
					
					<Signature />
					{/* <NavigationLinks /> */}
					<HamburgerMenuBtn
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						aria-label={isOpen ? "Close menu" : "Open menu"}
					/>
					{isOpen && <MobileNavigation setIsOpen={setIsOpen} isOpen={isOpen} />}
					<ButtonComp title="let's talk" className="hidden md:flex py-2 dark:hover:bg-appYellow/80 dark:hover:border-appYellow hover:bg-appBlue/80 hover:border-appBlue " />
				
			</div>
		</header>
	);
}

export default NavigationComp;
