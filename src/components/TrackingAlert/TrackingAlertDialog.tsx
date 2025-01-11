"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function TrackingAlertDialog() {
	const [isOn, setIsOn] = useState<boolean>(true);

	const handleClose = () => {
		setIsOn(false);
	};

	return (
		<AnimatePresence>
			{isOn && (
				<motion.section
					initial={{ opacity: 0, height: "3%" }}
					animate={{ height: "20%", opacity: 1 }}
					transition={{ duration: 0.9, ease: "easeInOut", delay: 3 }}
					exit={{ height: 0, opacity: 0, transition: { delay: 0 } }}
					className="cookies h-fit w-full fixed bottom-0 z-40 left-0 dark:bg-gradient-to-tr dark:from-zinc-900 dark:to-stone-900 bg-gradient-to-tr from-zinc-300 to-stone-200 border-t dark:border-appYellow border-appBlue">
					<div className="container relative grid grid-cols-1 md:grid-cols-3 gap-2 py-2">
						<div className="content col-span-2 py-1 max-w-xl">
							<h2 className="uppercase text-3xl md:text-5xl font-bold text-left">
								I use cookies.
							</h2>
							<p className="text-zinc-900/60 dark:text-stone-300/60 text-sm md:text-lg text-left md:mt-2">
								By using this website you agree to be tracked. <br />I track
								clicks and interactions for analytical purposes.
							</p>
							<div className="flex justify-start items-start mt-2 md:mt-1">
							<button
								onClick={() => handleClose()}
								className="group text-white inline-flex items-center justify-center dark:bg-gradient-to-b dark:from-[#464d55] dark:to-[#25292e] bg-gradient-to-b from-stone-600 to-stone-800 text-lg px-12 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-xl uppercase pb-2">
								Fine
							</button>
						</div>
						</div>
						<Image
							src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/minimalist-pile-delicious-cookies-copy-space-removebg-preview.png"
							alt="cookie_picture"
							width={100}
							height={100}
							loading="lazy"
							className="hidden absolute right-0 -top-16 md:block"
						/>
						
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
