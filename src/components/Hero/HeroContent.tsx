"use client";
import { images } from "@/app/assets/images/images";
import {
	AnimatePresence,
	motion,
	stagger,
	useAnimate,
	useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useRef } from "react";
import SplitType from "split-type";
import ButtonComp from "../ui/ButtonComp";
function HeroContent() {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const highlightRef = useRef<HTMLSpanElement>(null);
	const { scrollY } = useScroll();
	//eslint-disable-next-line
	const [titleScope, titleAnimate] = useAnimate();
	//eslint-disable-next-line
	const [highlightScope, highlightAnimate] = useAnimate();
	function handleNavigationMove(e: MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		const url = new URL(e.currentTarget.href);
		const hash = url.hash;
		const target = document.querySelector(hash);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth" });
	}
	useEffect(() => {
		if (titleRef.current) {
			// Split text in the heading
			new SplitType(titleRef.current, {
				types: "lines,words",
				tagName: "span",
			});

			// Select the split words and animate them
			const titleToAnimate = [...titleRef.current.querySelectorAll(".word")];
			titleAnimate(
				titleToAnimate,
				{ transform: "translateY(0)", opacity: 1 },
				{ duration: 0.5, delay: stagger(0.2) }
			);
		}
	}, [titleAnimate, scrollY]);

	useEffect(() => {
		if (highlightRef.current) {
			new SplitType(highlightRef.current, {
				types: "lines,words",
				tagName: "span",
			});

			const highlightToAnimate = [
				...highlightRef.current.querySelectorAll(".word"),
			];
			highlightAnimate(
				highlightToAnimate,
				{ transform: "translateY(0)", opacity: 1 },
				{ duration: 0.5, delay: stagger(0.2) }
			);
		}
	}, [highlightAnimate]);

	return (
		<div className="hero-content -mt-6 md:mt-0">
			<div className="flex flex-col items-start">
				<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: "-10%" }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "-10%", opacity: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							className="rolledImg md:hidden group absolute right-12 top-8">
							<div className="relative overflow-hidden rotate-[40deg]">
								<Image
									src={images.HERO.heroMobileImg}
									loading="lazy"
									alt="hero_art"
									className="heroImg pt-2 object-top scale-100  outline-none h-36 w-36 size-full -rotate-[12deg] border-slate-500/40 dark:border-stone-200/40 border object-cover rounded-full relative ease-in-out bg-white/5"
									width={250}
									height={250}
								/>
								<div className="absolute inset-0 rounded-full bg-white/5 -z-10 "></div>
							</div>
						</motion.div>
					
				</AnimatePresence>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					ref={titleRef}
					className="text-6xl md:text-7xl capitalize font-abadiBold font-bold">
					I&apos;m a full-stack developer
					<br />
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						ref={highlightRef}
						className="dark:text-appYellow text-appBlue">
						that rarely gets paid.
					</motion.span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: "-60%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.8 }}
					className="mt-4 text-2xl dark:text-white/60 text-zinc-900/60">
					Fueled by caffeine, sarcasm and the occasional Wi-Fi, I build stuff.
				</motion.p>
			</div>
			<motion.div
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 2.1 }}
				className="action w-full my-6">
				<Link href={"#projects"} onClick={handleNavigationMove}>
					<ButtonComp
						title="my work"
						data-umami-event="my work"
						className="group  "
						iconAnimationDirection="down"
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
				</Link>
			</motion.div>
		</div>
	);
}

export default HeroContent;
