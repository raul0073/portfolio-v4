import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

export const menuOptions = [
	{ label: "Home", href: "#navbar" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

interface MobileNavigationProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const menuAnimation = {
	initial: { height: 0 },
	animate: { height: "100vh" },
	exit: { height: 0 },
};

function MobileNavigation({ isOpen, setIsOpen }: MobileNavigationProps) {
	function handleNavigationMove(e: MouseEvent<HTMLAnchorElement>){
		e.preventDefault();
        setIsOpen(false);
		const url = new URL(e.currentTarget.href);
		const hash = url.hash;
		const target= document.querySelector(hash)
		if(!target) return;
		target.scrollIntoView({ behavior: "smooth" });
	}	
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="mobile-navigation"
					variants={menuAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="w-full fixed top-16 left-0 bg-bg-light dark:bg-zinc-900 z-50 flex justify-start overflow-hidden">
					<nav className="text-left uppercase w-full">
						<ul className="pt-12 z-30 px-4 w-full">
							{menuOptions.map((item) => {
								return (
									<li
										key={item.href}
										className="relative group/nav-item transition-all duration-300 ease-in-out axureFont border-t last:border-b py-8"
										>
										<a
											href={item.href}
											onClick={handleNavigationMove}
											className=" group/nav-item flex h-full justify-between items-center  dark:text-white/40 text-zinc-900/60 text-4xl group-hover/nav-item:pl-4 group-hover/nav-item:dark:text-appYellow group-hover/nav-item:text-appBlue transition-all duration-500 ease-in-out isolate">
											<div className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-b from-transparent via-white to-transparent dark:bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 -z-10"></div>
											{item.label}
											<ArrowUpRight
												className="inline-flex mx-2"
												width={30}
												height={30}
											/>
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default MobileNavigation;
