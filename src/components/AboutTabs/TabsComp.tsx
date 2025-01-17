"use client";
import { motion } from "framer-motion";
import AboutMeTab from "./AboutMeTab";
import { AboutMyWork } from "./AboutMyWork";
import StackTab from "./StackTab";
import { Tabs } from "../ui/tabs";
import Image from "next/image";
import { images } from "@/app/assets/images/images";



export function AboutTabs() {
	const tabs = [
		{
			title: "About Me",
			value: "about me",
			content: (
				<div className="aboutMe-pop scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold  dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
				
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4 tracking-wide">
						<Image
				src={images.ABOUT.me.profileAvatar}
				alt="profile_avatar"
				width={40}
				height={40}
				style={{
					width: "40px",
					height: "auto"
				}}
				loading="lazy"
				className="inline-flex mr-4 profile-avatar dark:bg-appGray bg-appGray/40 hover:-translate-y-2 transition-transform duration-200 ease-in-out saturate-150"
			/>
						
						Raz Massami
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}>
						<AboutMeTab />
					</motion.div>
				</div>
			),
		},
		{
			title: "About My Work",
			value: "About My Work",
			content: (
				<div className="aboutMywork-pop scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold  dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
					
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4 tracking-wide">
						I create stuff with my computer
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}>
						<AboutMyWork />
					</motion.div>
				</div>
			),
		},
		{
			title: "most used tools",
			value: "most used tools",
			content: (
				<div className="tools-pop scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold  dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
				
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4 tracking-wide">
						Fast websites, slower social life...
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}>
						<StackTab />
					</motion.div>
				</div>
			),
		},
	];

	return (
		<motion.div
		initial={{opacity: 0, filter: "blur(10px)"}}
		whileInView={{filter: "blur(0px)", opacity: 1}}
		transition={{duration: .4, ease: "easeInOut"}}
		viewport={{once: true}}
		className="min-h-[40rem] h-[40rem] [perspective:1000px] z-30 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
			<Tabs tabs={tabs} />
		</motion.div>
	);
}
