"use client";
import { programingIcons } from "@/app/assets/icons/programingIcons/IconsSource";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { ProductType } from "../Projects/ProjectParallax";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from "../ui/animated-modal";

const angles = [-3, -6, 3, 6]


export function AnimatedProjectModal({
	selected,
	children
}: {
	selected: ProductType | null;
	children: ReactNode
}) {
	const [angle, setAngle] = useState<number | null>(null)
	useEffect(()=>{
		const randomAngle = angles[Math.floor(Math.random() * angles.length)];
		setAngle(randomAngle)
	},[])
	return (
		<div className="animated-picture flex items-center justify-center ">
			<Modal>
				<ModalTrigger className={`h-full w-full min-h-48  relative`}>
					{children}
				</ModalTrigger>
				<ModalBody>
					<ModalContent>
						<h4 className="img-title text-lg capitalize md:text-2xl text-neutral-300 dark:text-neutral-100 font-bold text-center mb-2">
							{selected?.name}
						</h4>
						<div className="flex justify-center items-center">
							<motion.div
								key={"image"}
								style={{
									rotate: angle || 6,
								}}
								whileHover={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100,
								}}
								whileTap={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100,
								}}
								className="image-wrapper rounded-xl -mr-4 mt-4 p-1 bg-transparent  flex-shrink-0 overflow-hidden">
								<Image
									src={selected?.thumbnail as StaticImageData}
									alt={`${selected?.name}`}
									width={350}
									height={400}
									loading="lazy"
									className="rounded-none object-cover flex-shrink-0"
								/>
							</motion.div>
						</div>
						<Link
							className="group absolute left-12 top-1 dark:bg-appYellow2/90 bg-appBlue/80 hover:bg-appBlue dark:hover:bg-appYellow2 rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-300 ease-in-out"
							href={selected?.url || "#"}
							target="_blank">
							<ArrowRight width={15} className="text-white/80 group-hover:text-white" />
						</Link>
						<Link
							className="group absolute left-4 top-1 dark:bg-appYellow2/90 bg-appBlue/80 hover:bg-appBlue dark:hover:bg-appYellow2 rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-300 ease-in-out"
							href={selected?.git || "#"}
							target="_blank">
							<i className="devicon-github-original w-4 h-auto text-white/80 group-hover:text-white" />
						</Link>

						<ul className="flex space-x-2 justify-end px-2 font-extrabold  text-xl mt-8">
							{selected?.tech.map((techName) => {
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
						<motion.p
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="mt-4 text-sm capitalize text-left text-neutral-300/60 dark:text-neutral-100/60">
							{selected?.description}
						</motion.p>
						
					</ModalContent>
				</ModalBody>
			</Modal>
		</div>
	);
}
