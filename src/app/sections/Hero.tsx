import HeroContent from "@/components/Hero/HeroContent";
import Image from "next/image";


const img =
	"https://images.pexels.com/photos/3524537/pexels-photo-3524537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
function Hero() {

	return (
		<section className="hero w-full pb-24">
			<div className="grid md:grid-cols-12 md:h-[93vh] pt-24 md:pt-0 items-strech">
				<div className="md:col-span-7 flex flex-col justify-center">
					<div className="container">
						<HeroContent />
					</div>
				</div>
				<div className="md:col-span-5">
					<div className="mt-20 md:mt-0 h-full">
						<Image
							src={img}
							loading="eager"
							alt="hero"
							className="size-full object-cover"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
