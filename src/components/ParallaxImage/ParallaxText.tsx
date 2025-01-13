"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ParallaxText() {
	const [isTopVisible, setIsTopVisible] = useState(false);
	const imageRef = useRef<HTMLDivElement>(null);

	// Track visibility of the parallax image
	useEffect(() => {
		const handleScroll = () => {
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect();
				// Check if the top of the image is visible in the viewport
				setIsTopVisible(rect.top >= 0 && rect.top <= window.innerHeight);
			}
		};

		window.addEventListener("scroll", handleScroll);
		// Cleanup listener on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="parallax-text">
			<div
				ref={imageRef} 
				className="relative bg-cover bg-fixed h-[20vh] bg-no-repeat bg-center"
				style={{
			backgroundImage: `url("https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/noah_cut.png")`,
				}}>
			</div>

			<div className="flex justify-start items-center px-4 h-full py-2">
				<div className="text-xl md:text-4xl max-w-xl h-full items-start flex font-normal text-left text-white md:text-appYellow2">
					<AnimatePresence mode="wait">
						{isTopVisible ? (
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
									<span className="text-white md:text-appYellow2 text-xl md:text-4xl">
										This is Noah
										<Image
											src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/Hand-drawn-arrow-blue.png"
											alt="arrow_to_Noah"
											loading="eager"
											width={500}
											height={500}
											className=" xl:inline absolute -top-[200%] -right-[100%] rotate-12 "
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
