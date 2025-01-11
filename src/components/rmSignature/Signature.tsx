"use client";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import { Suspense, useEffect } from "react";
import SplitType from "split-type";

function Signature({ isOpen }: { isOpen: boolean }) {
	const [nameScope, nameAnimation] = useAnimate();

	useEffect(() => {
		if (nameScope.current && isOpen) {
			// Split text in the heading
			new SplitType(nameScope.current, {
				types: "lines,words",
				tagName: "span",
			});

			// Select the split words and animate them
			const nameElement = [...nameScope.current.querySelectorAll(".word")];
			nameAnimation(
				nameElement,
				{ transform: "translateY(0)", opacity: 1 },
				{ duration: 0.5, delay: stagger(0.2) }
			);
		}
	}, [nameAnimation, nameScope, isOpen]);
	return (
		<Suspense fallback={<span>Loading</span>}>
			<AnimatePresence>
				<motion.div
					key={isOpen ? "full-name" : "initials"}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ x: -80, opacity: 0 }}
					className="logo font-axure mix-blend-difference w-fit flex justify-start"
					aria-label="Raz Massami logo"
					ref={nameScope}>
					{isOpen ? (
						<motion.span
							initial={{ opacity: 0, x: -200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5 }}
							className="dark:text-appGray/60 text-appGray/40 text-2xl uppercase">
							<span className="dark:text-appYellow text-appBlue">R</span>
							<span>az</span>{" "}
							<span className="dark:text-appYellow text-appBlue">M</span>
							assami
						</motion.span>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<span className="dark:text-appGray/60  text-appGray/40 text-4xl md:text-6xl ">
								r
							</span>
							<span className="dark:text-appYellow text-appBlue text-4xl md:text-6xl">
								m
							</span>
						</motion.div>
					)}
				</motion.div>
			</AnimatePresence>
		</Suspense>
	);
}

export default Signature;
