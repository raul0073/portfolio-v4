"use client";

import { images } from "@/app/assets/images/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function ParallaxText() {
	const [isTopVisible, setIsTopVisible] = useState(false);
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect();
				const viewportHeight = window.innerHeight; // Full screen height
				const divHeight = 160; // Fixed height of the div
				const scrolledPercentage =
					((viewportHeight - rect.top) / (viewportHeight + divHeight)) * 100;
				setIsTopVisible(scrolledPercentage >= 60 && scrolledPercentage <= 100);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="parallax-noah bg-gray-300 dark:bg-zinc-800">
			<div
				ref={imageRef}
				className="relative bg-cover bg-fixed h-[20vh] bg-no-repeat bg-center"
				style={{
					backgroundImage: `url(${images.PARALLAX.bg})`,
				}}>
				<div className="overlay w-full h-full absolute left-0 top-0 bg-black/40 z-10 border"></div>
				<div className="flex justify-start items-center px-4 h-full py-2 absolute left-2 md:left-12 top-1/2 z-10">
					<div className="text-xl md:text-4xl max-w-xl h-full items-start flex font-normal text-left text-slate-200 ">
						<AnimatePresence mode="wait">
							{!isTopVisible ? (
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
									<span className="relative inline-flex justify-end w-full lg:left-[100px] xl:left-[200%]">
										<span className="text-slate-200  text-xl md:text-4xl">
											This is Noah
											<Image
												src={images.PARALLAX.arrowImg}
												alt="arrow_to_Noah"
												loading="lazy"
												width={500}
												height={500}
												className=" xl:inline absolute -top-[200%] -right-[100%] rotate-12 lg:rotate-[8deg] "
											/>
										</span>
									</span>
								</motion.span>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
