import ButtonComp from "@/components/ui/ButtonComp";
import Image from "next/image";
const img =
	"https://images.pexels.com/photos/3524537/pexels-photo-3524537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
function Hero() {
	return (
		<section className="hero w-full pb-24">
			<div className="grid md:grid-cols-12 md:h-[93vh] pt-24 md:pt-0 items-strech">
				<div className="md:col-span-7 flex flex-col justify-center">
					<div className="container">
						
						<div className="content ">
							<div className="tex flex flex-col items-start px-1">
								<h1 className="text-7xl capitalize font-abadiBold font-bold">
									I&apos;m a full-stack developer
									<br />
									<span className="dark:text-appYellow text-appBlue">that rearly gets paid.</span>
								</h1>
								<p className="mt-4 text-2xl dark:text-white/60 text-zinc-900/60">
									Fueled by caffeine, sarcasm and the occasional Wi-Fi outage, I build stuff.
								</p>
							</div>
							<div className="action w-full my-6">
								<ButtonComp
									title="my work"
									className="group  hover:border-appBlue/40 dark:hover:border-appYellow/40 dark:hover:text-white hover:bg-transparent"
									icon={
										<svg
											height="25px"
											width="25px"
											version="1.1"
											id="Layer_1"
											className="fill-zinc-900/30 dark:fill-white/30 group-hover:fill-appBlue dark:group-hover:fill-appYellow2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512.04 512.04">
											<g>
												<g>
													<path
														d="M508.933,146.807l-42.347-42.347c-4.267-4.053-10.88-4.053-15.147,0L256.027,300.193L60.507,104.46
	c-4.267-4.053-10.88-4.053-15.147,0L3.12,146.807c-4.16,4.16-4.16,10.88,0,15.04L248.453,407.5c4.16,4.16,10.88,4.16,15.04,0
	l245.333-245.653C513.093,157.687,513.093,150.967,508.933,146.807z M256.027,384.887L25.733,154.38l27.2-27.307l195.52,195.733
	c4.267,4.053,10.88,4.053,15.147,0l195.52-195.733l27.2,27.307L256.027,384.887z"
													/>
												</g>
											</g>
										</svg>
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="md:col-span-5">
					<div className="mt-20 md:mt-0 h-full">
						<Image
							src={img}
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
