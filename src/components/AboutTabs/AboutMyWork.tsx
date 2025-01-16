"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
export function AboutMyWork() {
	return (
		<div className="about-mywork grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
			<WobbleCard
				containerClassName=" col-span-1 lg:col-span-2 h-full dark:bg-pink-800 bg-pink-600 min-h-[300px] lg:min-h-[300px]"
				className="card1">
				<div className="max-w-xs">
					<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Building apps that make sense
					</h2>
					<p className="mt-4 text-left  text-base/6 text-neutral-200 max-w-36 md:max-w-xs">
						Creating things that people actually use and as intuitive as finding
						the snooze button.
					</p>
				</div>
				<Image
					src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/entry.png"
					width={350}
					height={350}
					loading="lazy"
					alt="login_to_account_tahel_events"
					className="absolute -right-24 grayscale filter -bottom-48 object-contain rounded-2xl"
				/>
			</WobbleCard>
			<WobbleCard
				containerClassName="col-span-1 min-h-[300px]"
				className="card2">
				<div className=" grid grid-cols-1">
					<h2 className="col-span-2 max-w-80  text-left -mt-8 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Custom reports
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						I provide your data with tailored reports so you don&apos;t have to
					</p>
				</div>
				<Image
					src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/saas/experimental/experimental_report.png"
					width={200}
					height={200}
					loading="lazy"
					alt="dashboard_report_eleven"
					className="-bottom-28 lg:-bottom-28 absolute -left-8 object-contain rounded-2xl"
				/>
			</WobbleCard>
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[500px] xl:min-h-[300px]"
				className="card3">
				<div className="max-w-sm">
					<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Converting data into visuals
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						<Check className="inline text-lime-400 font-bold" /> Analytics you
						will never use. <br />
						<Check className="inline text-lime-400 font-bold" /> Charts that
						will make you bang your head against the wall.
					</p>
				</div>
				<Image
					src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/rms-cut.png"
					width={300}
					height={300}
					loading="lazy"
					alt="visualize_your_data_dashboard"
					className="absolute -right-5  lg:-right-[5%] -bottom-10 md:-bottom-20 lg:-bottom-8 object-contain rounded-2xl"
				/>
			</WobbleCard>
		</div>
	);
}
