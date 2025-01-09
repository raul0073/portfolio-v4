"use client";
import underline from "@/app/assets/icons/pppointed.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxText() {
	const [scrollY, setScrollY] = useState<number>(0);

	// Track scroll position
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="parallax-text py-24 bg-gradient-to-br from-transparent to-bg-light/40">
			<div className="flex justify-center items-center px-4 h-full">
				<div className="text-4xl mx-auto max-w-xl h-full items-start flex font-normal text-left bg-gradient-to-r font-base from-appYellow to-appYellow2 bg-clip-text text-transparent">
					<AnimatePresence mode="wait">
						{scrollY < 2150 ? (
							<motion.span
								key="text1"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3 }}
								className="">
								The Parallax you didn&apos;t ask for.
							</motion.span>
						) : (
							<motion.span
								key="text2"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.3 }}>
								<span className="relative inline-block">
									<span className="  bg-clip-text text-transparent bg-gradient-to-r  from-appYellow to-appYellow2 -ml-8 md:ml-24 lg:ml-[400px] text-base md:text-4xl">
										Meet Noah
										<motion.span
											className="absolute w-64 h-64 -right-52 -bottom-[9rem] bg-gradient-to-r from-appBlue to-sky-600"
											style={{
												maskImage: `url(${underline.src})`,
												WebkitMaskImage: `url(${underline.src})`,
												maskSize: "contain",
												maskPosition: "left", 
												maskRepeat: "no-repeat",
												transformOrigin: "left", 
												rotate: "-6deg",
											}}></motion.span>
									</span>
								</span>
							</motion.span>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
