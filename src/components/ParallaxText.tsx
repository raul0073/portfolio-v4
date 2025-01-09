"use client";
import arrowRightBlue from "@/app/assets/icons/Hand-drawn-arrow-blue.png";
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
				<div className="text-4xl max-w-xl h-full items-start flex font-normal text-left bg-gradient-to-r font-base from-appYellow to-appYellow2 bg-clip-text text-transparent">
					<AnimatePresence mode="wait">
						{scrollY < 2050 ? (
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
								<span className="relative inline-flex justify-end lg:-right-[45rem] w-full">
									<span className="  bg-clip-text text-transparent bg-gradient-to-r  from-appYellow to-appYellow2 text-4xl">
										This is Noah
										<Image
											src={arrowRightBlue}
											alt="arrow_to_Noah"
											width={300}
											height={300}
											className="hidden md:inline absolute -top-[200%] -right-[100%] rotate-12  md:scale-100"
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
