"use client";
import { AnimatedExperienceLocationImageModal } from "@/components/Experience/AnimatedPopoverPicture";
import { motion } from "framer-motion";

const BUCKET = process.env.NEXT_PUBLIC_BUCKET
export const EXPERIENCE_DATA = [
	{
		title: "2021 - Present",
		content: (
			<div>
					<span className="hidden xl:flex absolute right-0 bottom-0">
						<AnimatedExperienceLocationImageModal
							img={{
								src: `${BUCKET}/v4/assets/locations/desert.jpg`,
								name: "Somewhere in Israel",
								text: "going north is still an issue",
							}}
						/>
					</span>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="dark:text-stone-200 text-zinc-900 text-lg md:text-xl  mb-8">
					Selfemployed Web Developer, Israel. <br />
				
					<span className="dark:text-stone-200/60 text-zinc-900/60 text-base">
						I started coding after COVID and didn&apos;t stop, notable projects:
					</span>
				</motion.p>
				<motion.ul
					initial={{ opacity: 0, y: "30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: "easeIn" }}
					viewport={{ once: true }}
					className=" pl-5 text-neutral-800 dark:text-neutral-200/90 font-sans font-normal text-sm mb-8 space-y-2">
					<li>
						<strong>🖥️ Lereava (לראווה):</strong> Developed a landing page for a
						professional window cleaning service using React & Material-UI.
					</li>
					<li>
						<strong>🖥️ Management System for a Local Synagogue:</strong> Created
						a management system utilizing Angular for client & Fastify server
						with MongoDB, implemented user based roles and authentication.
					</li>
					<li>
						<strong>🖥️ Talshir IBC:</strong> Built a robust web application for
						an international patent company using Angular
					</li>
				</motion.ul>
			</div>
		),
	},
	{
		title: "2018 - 2020",
		content: (
			<div>
					<span className="hidden xl:flex absolute right-0 bottom-0">
						<AnimatedExperienceLocationImageModal
							img={{
								src: `${BUCKET}/v4/assets/locations/zambia.JPG`,
								name: "Chililabombwe, Zambia",
								text: "they are about to climb this mountain",
							}}
						/>
					</span>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="dark:text-stone-200 text-zinc-900 text-lg md:text-xl  mb-8">
					Operations Manager{" "}
					<span className="text-appBlue dark:text-appYellow">@ ZipBCC</span>,
					Zambia. <br />
				
					<span className="dark:text-stone-200/60 text-zinc-900/60 text-base">
						Managed operations at a busy border crossing between Zambia and the
						DRC;
					</span>
				</motion.p>
				<ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200/90 font-sans font-normal text-sm mb-8 space-y-2">
					<li>
						Oversaw a team of 263 employees, ensuring efficient and effective
						operations.
					</li>
					<li>
						Implemented smart traffic flow systems using data analysis, handling
						1.5k vehicles per day and reducing congestion.
					</li>
					<li>
						Maintained daily communication with shareholders, providing detailed
						reports and insights.
					</li>
				</ul>
			</div>
		),
	},
	{
		title: "2015 - 2018",
		content: (
			<div>
				<span className="hidden xl:flex absolute right-0 bottom-0">
						<AnimatedExperienceLocationImageModal
							img={{
								src: `${BUCKET}/v4/assets/locations/bacalar2.JPG`,
								name: "Quintana Roo, Bacalar", text: "no saturation needed."
							}}
						/>
					</span>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="dark:text-stone-200 text-zinc-900 text-lg md:text-xl  mb-8">
					Owner{" "}
					<span className="text-appBlue dark:text-appYellow">
						@ The Gaia Experience
					</span>
					
					, Mexico. <br />
					<span className="dark:text-stone-200/60 text-zinc-900/60 text-base">
						Founded and managed a tourism company in Bacalar. Some relevant
						responsibilities included:
					</span>
				</motion.p>
				<ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200/90 font-sans font-normal text-sm mb-8 space-y-2">
					<li>
						Developed the company website using Wix, driving increased bookings
						and customer inquiries.
					</li>
					<li>
						Led advertising and marketing efforts, resulting in an increased
						customer engagement.
					</li>
					<li>
						Handled social media management, growing the company&apos;s online
						presence and following.
					</li>
				</ul>
			</div>
		),
	},
	{
		title: "2012 - 2015",
		content: (
			<div>
					<span className="hidden xl:flex absolute right-0 bottom-0">
						<AnimatedExperienceLocationImageModal
							img={{
								src: `${BUCKET}/v4/assets/locations/southafrica.JPG`,
								name: "Coffee Bay, South Africa",
								text: "she is looking right at me!",
							}}
						/>
					</span>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="dark:text-stone-200 text-zinc-900 text-lg md:text-xl  mb-8">
					Logistics Manager{" "}
					<span className="text-appBlue dark:text-appYellow">@ Virgo</span>,
					South Africa. <br />
				
					<span className="dark:text-stone-200/60 text-zinc-900/60 text-base">
						Managed logistics for a products company, I did the following:
					</span>
				</motion.p>
				<ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200/90 font-sans font-normal text-sm mb-8 space-y-2">
					<li>
						Coordinated logistics for apartments, vehicles, and POS systems,
						ensuring seamless operations.
					</li>
					<li>
						Administered POS systems, improving transaction accuracy and speed.
					</li>
					<li>
						Oversaw company IT operations, maintaining high system uptime and
						security.
					</li>
				</ul>
			</div>
		),
	},
	{
		title: "2010 - 2012",

		content: (
			<div className="relative">
				<span className="hidden xl:flex absolute -top-[300%] right-0">
						<AnimatedExperienceLocationImageModal
							img={{
								src: `${BUCKET}/v4/assets/locations/malabo.jpg`,
								name: "Malabo, Equatorial Guinea",
								text: "no, I'm not in it.",
							}}
						/>
					</span>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn" }}
					viewport={{ once: true }}
					className="relative dark:text-stone-200 text-zinc-900 text-lg md:text-xl  mb-8">
					Security Project, Equatorial Guinea. <br />
					
					<span className="dark:text-stone-200/60 text-zinc-900/60 text-base">
						Provided guidance and training to locals in Spanish.
					</span>
				</motion.p>
			</div>
		),
	},
];
