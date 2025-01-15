"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
const BUCKET = process.env.NEXT_PUBLIC_BUCKET
const arrowImg = `${BUCKET}/v4/assets/Hand-drawn-arrow-blue_small.png`
export default function ParallaxText() {
	const [isTopVisible, setIsTopVisible] = useState(false);
	const imageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect();
				setIsTopVisible(rect.top >= 0 && rect.top <= window.innerHeight);
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
			backgroundImage: `url("https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/noah_cut.png")`,
				}}>
			</div>

			<div className="flex justify-start items-center px-4 h-full py-2">
				<div className="text-xl md:text-4xl max-w-xl h-full items-start flex font-normal text-left text-zinc-600 dark:text-slate-200 ">
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
									<span className="text-zinc-600 dark:text-slate-200  text-xl md:text-4xl">
										This is Noah
										<Image
											src={arrowImg}
											alt="arrow_to_Noah"
											loading="lazy"
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
