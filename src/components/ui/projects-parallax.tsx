"use client";
import { programingIcons } from "@/app/assets/icons/programingIcons/IconsSource";
import {
	motion,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "../Projects/ProjectParallax";

export const ProjectsParallax = ({ products }: { products: ProductType[] }) => {
	const firstRow = products.slice(0, 3);
	const secondRow = products.slice(3, 6);
	const thirdRow = products.slice(6, 9);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 100, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className="">
				<motion.div className="flex  justify-center space-x-10 mb-20">
					{firstRow.map((project) => (
						<ProjectCard
							project={project}
							translate={translateX}
							key={project.name}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  justify-center mb-20 space-x-10 ">
					{secondRow.map((project) => (
						<ProjectCard
							project={project}
							translate={translateXReverse}
							key={project.name}
						/>
					))}
				</motion.div>
				<motion.div className="flex space-x-10 justify-center">
					{thirdRow.map((project) => (
						<ProjectCard
							project={project}
							translate={translateX}
							key={project.name}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
			<motion.h1
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, ease: "easeIn" }}
				viewport={{ once: true, amount: 0.9 }}
				className="text-7xl capitalize font-abadiBold font-bold dark:text-appYellow text-appBlue">
				Projects <br />
			</motion.h1>
			<motion.p
				initial={{ filter: "blur(10px)", opacity: 0 }}
				whileInView={{ filter: "blur(0px)", opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeIn" }}
				viewport={{ once: true }}
				className="max-w-2xl text-base md:text-2xl mt-6 dark:text-gray-400 text-slate-400 px-2">
				Some of my recent work.
			</motion.p>
		</div>
	);
};

export const ProjectCard = ({
	project,
}: {
	project: {
		name: string;
		description: string;
		url: string;
		thumbnail: string;
		tech: string[];
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			whileHover={{
				y: -20,
			}}
			key={project.name}
			className="group/project h-96 w-[30rem] relative flex-shrink-0">
			<Link
				href={project.url}
				target="_blank"
				className="block group-hover/project:shadow-2xl ">
				<Image
					src={project.thumbnail}
					height={600}
					width={600}
					loading="lazy"
					className="object-cover object-left-top absolute h-full w-full inset-0 rounded-md"
					alt={project.name}
				/>
			</Link>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none px-2"></div>
			<h2 className="absolute top-10 left-4 opacity-0 group-hover/project:opacity-100 text-white mb-4 font-abadiBold text-2xl capitalize">
				{project.name} <br />
			</h2>
			<div className=" opacity-0 group-hover/project:opacity-100 left-1 px-2 absolute bottom-4 ">
				<ul className="flex space-x-2 justify-end px-2 font-extrabold  text-xl ">
					{project.tech.map((techName) => {
						const icon = programingIcons.find(
							(ico) => ico.name.toLowerCase() === techName.toLowerCase()
						);
						return icon ? (
							<li key={icon.name} title={icon.name} className="mb-2">
								<i className={`${icon.class} text-appYellow2 text-2xl`} />
							</li>
						) : null;
					})}
				</ul>
				<p className="bg-gradient-to-r font-base from-slate-400 to-gray-500 bg-clip-text text-transparent">
					{project.description}
				</p>
			</div>
		</motion.div>
	);
};
