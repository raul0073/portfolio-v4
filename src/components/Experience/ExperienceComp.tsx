"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;

}

export const ExperienceTimeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full experience-section  md:px-10" ref={containerRef}>
			<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					viewport={{ once: true, amount: 0.9 }}
					className="header text-5xl md:text-7xl capitalize font-abadiBold font-bold dark:text-appYellow text-appBlue">
					experience <br />
				</motion.h1>
				<motion.p
					initial={{ filter: "blur(10px)", opacity: 0 }}
					whileInView={{ filter: "blur(0px)", opacity: 1 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="max-w-2xl text-base md:text-2xl mt-6 dark:text-gray-400 text-slate-600 px-2">
					What I&apos;ve been up to until now
				</motion.p>
			</div>

			<div ref={ref} className="timeline relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:pt-40 md:gap-10">
						<div className="sticky flex flex-col md:flex-row z-30 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
							</div>
							<motion.h3
								initial={{ opacity: 0, filter: "blur(10px)" }}
								whileInView={{ opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.8, ease: "easeIn" }}
								viewport={{ once: true }}
								className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 font-axure">
								{item.title}
							</motion.h3>
						</div>

						<div className="relative pl-20 pr-4 md:pl-4 w-full ">
							<h3 className="relative md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 font-axure">
								{item.title}
							</h3>
							<div
								>
								{item.content}
							</div>{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t dark:from-appYellow2 dark:via-amber-200 from-appBlue via-sky-400 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
