'use client'
import HeroContent from "@/components/Hero/HeroContent";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const img =
	"https://images.pexels.com/photos/3524537/pexels-photo-3524537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
function Hero() {
	const scrolledDiv = useRef<HTMLDivElement>(null);
	const {scrollYProgress}  = useScroll({
		target: scrolledDiv,
        offset: ["start end", "end end"]
	})

	const imgWidth = useTransform(scrollYProgress, [0,1], ["100%", "240%"])
	return (
		<section className="hero w-full pb-24">
			<div className="grid md:grid-cols-12 md:h-[93vh] pt-24 md:pt-0 items-strech sticky top-0">
				<div className="md:col-span-7 flex flex-col justify-center">
					<div className="container">
						<HeroContent />
					</div>
				</div>
				<div className="md:col-span-5 relative">
					<motion.div
					
					className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 h-full max-md:!w-full" style={{
						width: imgWidth
					}}>
						<Image
							src={img}
							loading="eager"
							alt="hero"
							className="size-full object-cover"
							width={500}
							height={500}
						/>
					</motion.div>
				</div>
			</div>
			<div className="md:h-[200vh]" ref={scrolledDiv}></div>
		</section>
	);
}

export default Hero;
