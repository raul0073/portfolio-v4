"use client";
import HeroContent from "@/components/Hero/HeroContent";

function Hero() {
	return (
		<section className="hero w-full pb-24" id="home">
			<div className="wrapper grid md:grid-cols-12 md:h-[93vh] pt-44 md:pt-0 items-strech sticky top-0">
				<div className="content md:col-span-7 flex flex-col justify-center">
					<div className="container">
						<HeroContent />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
