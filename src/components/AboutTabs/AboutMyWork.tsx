"use client";
import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
import { Check } from "lucide-react";
export function AboutMyWork() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
				className="">
				<div className="max-w-xs">
					<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Building apps that make sense
					</h2>
					<p className="mt-4 text-left  text-base/6 text-neutral-200 max-w-36 md:max-w-xs">
						Creating things that people actually use, and as intuitive as finding the snooze button.
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
			<WobbleCard containerClassName="col-span-1 min-h-[300px]">
				<div className="grid grid-cols-1">
					<h2 className="col-span-2 max-w-80  text-left -mt-8 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Custom reports
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						I provide your data with tailored reports so you don&apos;t have to
					</p>
				</div>
				<Image
					src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/saas/experimental/report2.png"
					width={350}
					height={350}
					loading="lazy"
					alt="dashboard_report_eleven"
					className="absolute md:-left-1/2 -left-40 md:-bottom-30 -bottom-40 object-contain rounded-2xl"
				/>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
				<div className="max-w-sm">
					<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Converting data into visuals
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
					<Check className="inline text-lime-400 font-bold"/> Analytics you will never use. <br />
					<Check className="inline text-lime-400 font-bold"/> Charts that will make you bang your head against the wall. <br />
					<Check className="inline text-lime-400 font-bold"/> A Dashboard you grow to hate.
					</p>
				</div>
				<Image
					src="https://razportfolio.s3.eu-central-1.amazonaws.com/v4/assets/rms-cut.png"
					width={500}
					height={500}
					loading="lazy"
					alt="visualize_your_data_dashboard"
					className="absolute -right-5  lg:-right-[20%] -bottom-10 md:-bottom-20 object-contain rounded-2xl"
				/>
			</WobbleCard>
		</div>
	);
}
