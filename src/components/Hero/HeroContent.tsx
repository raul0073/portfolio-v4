"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { MouseEvent, useEffect, useRef } from "react";
import SplitType from "split-type";
import ButtonComp from "../ui/ButtonComp";
import Link from "next/link";
function HeroContent() {
	const titleRef = useRef<HTMLHeadingElement>(null); 
	const highlightRef = useRef<HTMLSpanElement>(null);
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
	}, [titleAnimate]);

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
		<div className="content ">
			<div className="tex flex flex-col items-start">
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
					Fueled by caffeine, sarcasm and the occasional Wi-Fi, I build
					stuff.
				</motion.p>
			</div>
			<motion.div
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 2.1 }}
				className="action w-full my-6">
				<Link
				href={'#projects'}
				onClick={handleNavigationMove}
				>
					<ButtonComp
					title="my work"
					data-umami-event="my work"
					className="group  hover:border-appBlue/40 dark:hover:border-appYellow/40 dark:hover:text-white hover:bg-transparent"
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
