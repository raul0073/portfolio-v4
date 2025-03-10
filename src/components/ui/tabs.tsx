"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type Tab = {
	title: string;
	value: string;
	content?: React.ReactNode;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<>
			<div
				className={cn(
					" flex flex-row items-center justify-start [perspective:1000px] py-3 sticky overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
					containerClassName
				)}>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.title}
						onClick={() => {
							moveSelectedTabToTop(idx);
						}}
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
						className={cn(
							"group relative px-3 py-3 rounded-full",
							tabClassName
						)}
						style={{
							transformStyle: "preserve-3d",
						}}>
						{active.value === tab.value && (
							<motion.div
								layoutId="clickedbutton"
								transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
								className={cn(
									"absolute inset-0 bg-gray-300 dark:bg-zinc-800 border dark:border-appYellow/10 border-appBlue/10 rounded-full ",
									activeTabClassName
								)}
							/>
						)}

						<span
							className={cn(
								"transition-all duration-300 ease-in-out  block text-sm font-normal md:text-2xl sticky md:font-bold md:font-abadiBold capitalize",
								active.value === tab.value
									? "text-zinc-900 dark:text-white/90"
									: "text-gray-500 dark:text-white/40"
							)}>
							{tab.title}
						</span>
					</button>
				))}
			</div>
			<FadeInDiv
				tabs={tabs}
				active={active}
				key={active.value}
				hovering={hovering}
				className={cn("mt-20", contentClassName)}
			/>
		</>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering,
}: {
	className?: string;
	key?: string;
	tabs: Tab[];
	active: Tab;
	hovering?: boolean;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div className="relative w-full h-full">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn("w-full h-full absolute top-0 left-0", className)}>
					{tab.content}
				</motion.div>
			))}
		</div>
	);
};
