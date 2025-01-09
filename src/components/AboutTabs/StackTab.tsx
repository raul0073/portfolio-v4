import { programingIcons } from "@/app/assets/icons/programingIcons/IconsSource";
import { motion } from "framer-motion";
function StackTab() {
	return (
		<div className="stack w-full h-full ">
			<div className="">
				<ul className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-8 py-8">
					{programingIcons.map((icon, i) => {
						return (
							<li
								key={`${icon.name}-${i}`}
								className="group relative rounded-md  flex justify-center  dark:hover:bg-appYellow hover:bg-appBlue  border-bg-light/10 p-2 transition-transform duration-300 ease-in-out ">
								<i
									className={`${icon.class} text-5xl group-hover:text-white dark:group-hover:text-bg-dark transition-colors duration-300 ease-in-out `}></i>

								<motion.span
									initial={{ y: 10, opacity: 0 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, ease: "easeInOut" }}
									className="absolute text-xs uppercase -bottom-4 text-zinc-900 dark:text-bg-light  hidden group-hover:flex">
									{icon.name}
								</motion.span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default StackTab;
