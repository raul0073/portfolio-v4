"use client";
import { motion } from "framer-motion";
import AboutMeTab from "./AboutMeTab";
import { AboutMyWork } from "./AboutMyWork";
import StackTab from "./StackTab";
import { Tabs } from "../ui/tabs";

export function AboutTabs() {
	const tabs = [
		{
			title: "About Me",
			value: "about me",
			content: (
				<div className=" scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold dark:text-white text-zinc-900 dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
					<span className="absolute w-96 h-96 -right-12 -top-12 bg-gradient-to-t from-transparent to-appYellow/30 blur-3xl rounded-full opacity-20"></span>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="z-30 mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4">
						I&apos;m Raz Massami
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
				<div className=" scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold dark:text-white text-zinc-900 dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
					<span className="absolute w-96 h-96 -right-12 -top-12 bg-gradient-to-t from-transparent to-appYellow/30 blur-3xl rounded-full opacity-20"></span>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="z-30 mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4">
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
				<div className=" scrollbar-thin scrollbar-track-appGray/10 dark:scrollbar-thumb-appYellow/60 scrollbar-thumb-appBlue/60 w-full overflow-y-auto overflow-x-hidden scroll- relative h-full  p-4 md:p-10 text-xl md:text-2xl font-bold dark:text-white text-zinc-900 dark:bg-bg-dark bg-bg-light border dark:border-white/10 border-stone-300 hover:rounded-2xl transition-transform duration-200 ease-in">
					<span className="absolute w-96 h-96 -right-12 -top-12 bg-gradient-to-t from-transparent to-appYellow/30 blur-3xl rounded-full opacity-20"></span>
					<motion.p
						initial={{ opacity: 0, y: -50 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="z-30 mb-6 text-zinc-900/90 dark:text-white/70 p-2 md:p-4">
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
		<div className="min-h-[40rem] h-[40rem] [perspective:1000px] z-30 relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
			<Tabs tabs={tabs} />
		</div>
	);
}
