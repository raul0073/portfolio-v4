"use client";
import { menuOptions } from "@/app/Data/Navigation/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import SplitType from "split-type";
import ButtonComp from "../ui/ButtonComp";
import { SOCIAL_ICONS } from "@/app/assets/icons/socialIcons/socialIcons";
import { cn } from "@/lib/utils";

function FooterComp() {
	const [scope, animate] = useAnimate();
	const inView = useInView(scope, {
		once: true,
	});

	useEffect(() => {
		new SplitType(scope.current.querySelector("h2"), {
			types: "lines,words",
			tagName: "span",
		});
	}, [scope]);
	useEffect(() => {
		if (inView) {
			animate(
				scope.current.querySelectorAll(".word"),
				{
					transform: "translateY(0)",
				},
				{
					duration: 0.6,
					delay: stagger(0.2),
				}
			);
		}
	}, [inView, scope, animate]);
	return (
		<footer
			className="w-full bg-gradient-to-b from-transparent dark:to-zinc-900 to-stone-300"
			id="contact">
			<div className="container">
				<div className="tag flex gap-4 items-center my-12">
					<div className="size-3 rounded-full dark:bg-appYellow bg-appBlue"></div>
					<motion.span
						initial={{ opacity: 0, filter: "blur(10px)" }}
						whileInView={{ filter: "blur(0px)", opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="text-sm md:text-xl uppercase tracking-wider dark:text-stone-200/70 text-zinc-900/70">
						my salary expectations will surprise you.
					</motion.span>
				</div>
				<div className="content grid grid-cols-1 lg:grid-cols-3">
					<div className="col-span-2" ref={scope}>
						<h2 className="text-5xl leading-tight md:text-7xl md:leading-[5.2rem]  capitalize mb-8">
							{/* after everything you&apos;ve seen, let&apos;s talks business */}
							ready to make contact? let&apos;s talk.
						</h2>
						<motion.div
							initial={{ opacity: 0, y: "100%" }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
							viewport={{ once: true }}
							className="w-fit"
							>
							<Link href={"mailto:razm.work@gmail.com"} className="group">
								<ButtonComp
									data-umami-event="footer email"
									iconAnimationDirection="upRight"
									icon={<ArrowUpRight className="group-hover:text-appBlue dark:group-hover:text-appYellow2" />}
									title="razm.work@gmail.com"
									className="lowercase border-dashed border-appBlue dark:border-appYellow2"
								/>
							</Link>
							<div className="flex gap-2 mt-8">
						{SOCIAL_ICONS.filter(ico => ico.name !== "Gmail").map((icon) => {
						const iconName = icon.name;
						return (
							<Link target="_blank" href={icon.link as string}
							key={icon.name}
							>
								<button
								
								data-umami-iconname={iconName}
								className="group text-white  inline-flex items-center justify-center dark:bg-gradient-to-b dark:transparent dark:to-neutral-700 bg-gradient-to-b from-stone-600 to-stone-800  text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-full w-12 h-12 ">
								<i
									className={cn(
										`${icon.class} group-hover:text-appYellow2`
									)}></i>
							</button>
							</Link>
						);
					})}
						</div>
						</motion.div>
				
					</div>
					<nav>
						<ul className="navigation-links flex flex-col  gap-2 mt-16">
							{menuOptions.map((item) => {
								return (
									<li
										key={item.href}
										className="nav-link relative group/nav-item transition-all duration-300 ease-in-out py-2 lg:text-right">
										<a
											href={item.href}
											className=" text-zinc-900/60  dark:text-stone-200/60 text-lg uppercase group-hover/nav-item:mix-blend-difference transition-colors duration-200 ease-in-out">
											{item.label}
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
					
				</div>
				
				<p className="py-16 dark:text-white/40 text-black/40">
					&copy; All rights reserved to everyone.
				</p>
			</div>
		</footer>
	);
}

export default FooterComp;
