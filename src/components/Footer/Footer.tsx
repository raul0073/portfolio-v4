"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ButtonComp from "../ui/ButtonComp";
import { useEffect } from "react";
import SplitType from "split-type";
import { menuOptions } from "@/app/Data/Navigation/data";
import Link from "next/link";

function FooterComp() {
	const [scope, animate] = useAnimate();
	const inView = useInView(scope, {
		once: true,
	})

	useEffect(() => {
        new SplitType(scope.current.querySelector("h2"), {
			types: "lines,words",
			tagName: "span"
		})
    }, [scope]);
	useEffect(()=>{
		if(inView){
			animate(scope.current.querySelectorAll(".word"), {
				transform: "translateY(0)",
               
			},
			{
				duration: 0.6,
                delay: stagger(0.2),
             
			})
		}
	},[inView, scope])
	return (
		<footer
		
			className="w-full bg-gradient-to-b from-transparent dark:to-zinc-900 to-stone-300"
			id="contact">
			<div className="container">
				<div className="flex gap-4 items-center my-12">
					<div className="size-3 rounded-full dark:bg-appYellow bg-appBlue"></div>
					<motion.span
					initial={{opacity: 0, filter: "blur(10px)"}}
					whileInView={{filter: "blur(0px)", opacity: 1}}
					transition={{duration: .8, ease: "easeInOut"}}
					viewport={{once: true}}

					className="text-sm md:text-xl uppercase tracking-wider dark:text-stone-200/70 text-zinc-900/70">
						my salary expectations will surprise you.
					</motion.span>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="col-span-2" ref={scope}>
						<h2
							
							className="text-5xl md:text-7xl capitalize mb-8">
							after everything you&apos;ve seen, let&apos;s talks business
						</h2>
						<motion.div
						initial={{opacity:0, y: "100%"}}
						whileInView={{opacity: 1, y:0}}
						transition={{duration: .8, ease: "easeInOut", delay: .8}}
						viewport={{once: true}}
						>
							<Link href={'mailto:razm.work@gmail.com'}>
							<ButtonComp
							data-umami-event="footer email"
							icon={<ArrowUpRight />}
							title="razm.work@gmail.com"
							className="lowercase border-dashed border-appBlue dark:border-appYellow2"
						/>
						</Link>
						</motion.div>
					</div>
					<nav className=" ">
						<ul className="flex flex-col  gap-2 mt-16">
							{menuOptions.map((item) => {
								return (
									<li
										key={item.href}
										className="relative group/nav-item transition-all duration-300 ease-in-out py-2 lg:text-right">
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
