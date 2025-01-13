"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "../ui/layout-grid";
import { projectsData } from "@/app/Data/Projects/projects";

export function MobileProjectsGrid() {
  return (
    <div className="mobile-projects-grid">
        		<motion.div
		
			className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<motion.h2
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, ease: "easeIn" }}
				viewport={{ once: true }}
				className="text-5xl md:text-7xl capitalize font-abadiBold font-bold dark:text-appYellow text-appBlue">
				Projects <br />
			</motion.h2>
			<motion.p
				initial={{ filter: "blur(10px)", opacity: 0 }}
				whileInView={{ filter: "blur(0px)", opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeIn" }}
				viewport={{ once: true }}
				className="max-w-2xl text-base md:text-2xl mt-6 dark:text-gray-400 text-slate-600 px-2">
				Some of my recent work && projects that fits this grid.
			</motion.p>
		</motion.div>
      <LayoutGrid cards={projectsData} />
    </div>
  );
}
