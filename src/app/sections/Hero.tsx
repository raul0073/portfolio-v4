"use client";
import HeroContent from "@/components/Hero/HeroContent";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { images } from "../assets/images/images";

function Hero() {
	const scrolledDiv = useRef<HTMLDivElement>(null);
	const overlayDiv = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: scrolledDiv,
		offset: ["start end", "end end"],
	});

	const imgWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
	const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.3]);
	return (
		<section className="hero w-full pb-24" id="home">
			<div className="wrapper grid md:grid-cols-12 md:h-[93vh] pt-44 md:pt-0 items-strech sticky top-0">
				<div className="content md:col-span-7 flex flex-col justify-center">
					<div className="container">
						<HeroContent />
					</div>
				</div>
				<div className="hero-art hidden md:flex md:col-span-5 relative ">
					<motion.div
						className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 h-full max-md:!w-full "
						style={{
							width: imgWidth,
						}}>
						<Image
							src={images.HERO.heroImg}
							loading="lazy"
							alt="hero_art"
							className="heroImg size-full object-cover  relative"
							width={2400}
							height={1200}
						/>
						<motion.div
							style={{
								opacity: overlayOpacity,
							}}
							className="absolute inset-0 bg-black/80"
							ref={overlayDiv}></motion.div>
					</motion.div>
				</div>
			</div>
			<div className="scrollref md:h-[200vh]" ref={scrolledDiv}></div>
		</section>
	);
}

export default Hero;
