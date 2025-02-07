"use client";
import HeroContent from "@/components/Hero/HeroContent";
import Image from "next/image";
import art from '@/app/assets/images/hero_art.png'
function Hero() {
	return (
		<section className="hero w-full pb-24" id="home">
			<div className="wrapper grid md:grid-cols-12 md:h-[93vh] pt-24 md:pt-0 items-strech sticky top-0">
				<div className="content md:col-span-7 flex flex-col justify-center">
					<div className="container">
						<HeroContent />
					</div>
				</div>
				<div className="hidden art md:col-span-5  flex-col justify-center">
					<Image
					src={art}
					alt="hero_art"
					width={800}
					height={800}
					className=""
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
