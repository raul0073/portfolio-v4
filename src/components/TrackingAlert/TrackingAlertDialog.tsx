"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TrackingAlertDialog() {
	const [isOn, setIsOn] = useState<boolean>(true);

	useEffect(() => {}, [isOn]);

	if (isOn) {
		return (
			<motion.section
            initial={{opacity: 0, height: "3%"}}
            whileInView={{opacity: 1,height: "20%"}}
            transition={{duration: .8, delay:4, ease: "easeInOut"}}
            viewport={{once: true}}
            className="cookies w-full fixed bottom-0 z-40 left-0 dark:bg-gradient-to-tr dark:from-zinc-900 dark:to-stone-900 bg-gradient-to-tr from-zinc-300 to-stone-200 h-1/4 border-t dark:border-appYellow border-appBlue">
				<div className="container absolute left-0 top-0 flex flex-col justify-center items-center h-full w-full p-8">
					<h2 className="uppercase text-5xl font-bold">i track you.</h2>
					<p className="dark:text-appYellow text-appBlue mt-4 capitalize text-xl">
						i track what you click
					</p>

					<button
						onClick={() => setIsOn(false)}
						className="group text-white  inline-flex items-center justify-center dark:bg-gradient-to-b dark:from-[#464d55] dark:to-[#25292e] bg-gradient-to-b from-stone-600 to-stone-800  text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-xl w-44 h-12 mt-8 uppercase">
						fine
					</button>
				</div>
			</motion.section>
		);
	} else {
		return null;
	}
}
