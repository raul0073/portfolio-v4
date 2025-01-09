import { menuOptions } from "../Navbar/MobileNavigation";
import ButtonComp from "../ui/ButtonComp";

function FooterComp() {
	return (
		<footer
			className="w-full bg-gradient-to-b from-transparent dark:to-zinc-900 to-stone-300"
			id="contact">
			<div className="container">
				<div className="section">
					<div className="flex gap-4 items-center my-12">
						<div className="size-3 rounded-full dark:bg-appYellow bg-appBlue"></div>
						<span className="text-sm md:text-xl uppercase tracking-wider dark:text-stone-200/70 text-zinc-900/70">
							my salary expectitions will surprise you.
						</span>
					</div>
					<div className="flex flex-col md:flex-row md:justify-between">
						<div>
							<h2 className="text-xl md:text-6xl capitalize mb-8">
								you&apos;ve seen Enough, now let&apos;s connect.
							</h2>
							<ButtonComp title="razm.work@gmail.com" className="lowercase " />
						</div>
						<nav>
							<ul className="flx flex-col gap-8 mt-16">
								{menuOptions.map((item) => {
									return (
										<li
											key={item.href}
											className="relative group/nav-item transition-all duration-300 ease-in-out py-2">
											<a
												href={item.href}
												className="text-zinc-900/60 dark:text-stone-200/60 text-lg uppercase group-hover/nav-item:mix-blend-difference transition-colors duration-200 ease-in-out">
												{item.label}
											</a>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
					<p className="py-16 dark:text-white/40 text-black/40">&copy; All rights reserved RM.</p>
				</div>
			</div>
		</footer>
	);
}

export default FooterComp;
