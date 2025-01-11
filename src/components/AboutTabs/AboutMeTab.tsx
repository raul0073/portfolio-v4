import { SOCIAL_ICONS } from "@/app/assets/icons/socialIcons/socialIcons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import aboutData from "./../../app/Data/AboutPage/about.json";

function AboutMeTab() {
	return (
		<div className="about-me w-full h-full flex flex-col justify-center">
			{/* About Text */}
			<div className="">
				<div className="text space-y-2 font-abadi font-normal text-base md:text-lg dark:text-bg-light/70 text-zinc-900/80 ">
					<p>{aboutData.about.digging1}</p>
					<p>{aboutData.about.digging2}</p>
					<p>{aboutData.about.digging3}</p>
					<p className="pt-4">{aboutData.about.digging4}</p>
				</div>
				<div className="actions flex justify-center gap-4 mt-[10%]">
					{
						SOCIAL_ICONS.map((icon)=> {
							const iconName = icon.name;
							return (
								<button key={icon.name} data-umami-iconname={iconName} className="group text-white  inline-flex items-center justify-center dark:bg-gradient-to-b dark:from-[#464d55] dark:to-[#25292e] bg-gradient-to-b from-stone-600 to-stone-800  text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-full w-12 h-12 mt-8">
								<i className={cn(`${icon.class} group-hover:text-appYellow2`)}></i>
							</button>
					
							)
						})
					}
				</div>
			</div>

			{/* Profile Image */}
			<Image
				src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
				alt="profile_avatar"
				width={150}
				height={150}
				loading="lazy"
				className="hidden lg:flex profile-avatar dark:bg-appGray bg-appGray/40 absolute top-5 right-5 hover:-translate-y-2 transition-transform duration-200 ease-in-out"
			/>
		
		</div>
	);
}

export default AboutMeTab;
