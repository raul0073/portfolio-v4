"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
		<section className="parallax-text pt-24 bg-gradient-to-br from-transparent to-bg-light/40">
			<div className="flex justify-start items-center px-4 h-full py-2">
				<div className="text-xl md:text-4xl max-w-xl h-full items-start flex font-normal text-left  text-white md:text-appYellow2">
					<AnimatePresence mode="wait">
						{scrollY < 3350 ? (
							<motion.span
								key="text1"
								initial={{ opacity: 0, y: "-60%" }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3 }}
								className="">
								The Parallax you didn&apos;t ask for.
							</motion.span>
						) : (
							<motion.span
								key="text2"
								initial={{ opacity: 0, y: "-60%" }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.3 }}>
								<span className="relative inline-flex justify-end w-full xl:-right-[600px]">
									<span className="  bg-clip-text text-transparent bg-gradient-to-r  from-appYellow to-appYellow2 text-4xl">
										This is Noah
										<Image
											src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/Hand-drawn-arrow-blue.png"
											alt="arrow_to_Noah"
											loading="eager"
											width={900}
											height={900}
											className="hidden xl:inline absolute -top-[200%] -right-[100%] rotate-12 "
										/>
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
