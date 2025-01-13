"use client";
import Link from "next/link";
import { useState } from "react";
import Signature from "../rmSignature/Signature";
import ButtonComp from "../ui/ButtonComp";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import MobileNavigation from "./MobileNavigation";

function NavigationComp() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header className="navbar-header fixed top-0 left-0 w-full z-50 h-fit border-b shadow-md shadow-appGray/10 border-appYellow/10  backdrop-blur-lg ">
			<div className="wrapper flex justify-between items-center py-3 px-4 md:px-12 ">
				<Signature isOpen={isOpen} />
				{/* <NavigationLinks /> */}
				<HamburgerMenuBtn
					data-umami-event="hamburger open"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				/>

				<MobileNavigation setIsOpen={setIsOpen} isOpen={isOpen} />
				<Link href={"mailto:razm.work@gmail.com"} className="hidden md:flex ">
					<ButtonComp
						data-umami-event="let's talk"
						title="let's talk"
						className="py-2 dark:hover:bg-appYellow/80 dark:hover:border-appYellow hover:bg-appBlue/80 hover:border-appBlue "
					/>
				</Link>
			</div>
		</header>
	);
}

export default NavigationComp;
