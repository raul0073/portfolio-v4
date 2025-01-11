import { SOCIAL_ICONS } from "@/app/assets/icons/socialIcons/socialIcons";
import { aboutData } from "@/app/Data/About/about";
import { cn } from "@/lib/utils";

function AboutMeTab() {
	return (
		<div className="about-me w-full h-full flex flex-col justify-center">
			{/* About Text */}
			<div className="">
				<div className="text space-y-2 font-abadi font-normal text-base md:text-lg dark:text-bg-light/70 text-zinc-900/80 ">
					<p>{aboutData.digging1}</p>
					<p>{aboutData.digging2}</p>
					<p>{aboutData.digging3}</p>
					<p className="pt-4">{aboutData.digging4}</p>
				</div>
				<div className="actions flex justify-center gap-4 mt-[10%]">
					{SOCIAL_ICONS.map((icon) => {
						const iconName = icon.name;
						return (
							<button
								key={icon.name}
								data-umami-iconname={iconName}
								className="group text-white  inline-flex items-center justify-center dark:bg-gradient-to-b dark:from-[#464d55] dark:to-[#25292e] bg-gradient-to-b from-stone-600 to-stone-800  text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-full w-12 h-12 mt-8">
								<i
									className={cn(
										`${icon.class} group-hover:text-appYellow2`
									)}></i>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AboutMeTab;
