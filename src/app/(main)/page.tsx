import { TrackingAlertDialog } from "@/components/TrackingAlert/TrackingAlertDialog";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Hero from "../sections/Hero";

const DynamicAboutSection = dynamic(import("../sections/About"), {
	loading: () => <div>Loading...</div>,
});
const DynamicParallaxSection = dynamic(
	import("@/components/ParallaxImage/ParallaxText"),
	{
		loading: () => <div>Loading...</div>,
	}
);
const DynamicProjectsSection = dynamic(import("../sections/Projects"), {
	loading: () => <div>Loading...</div>,
});
const DynamicExperienceSection = dynamic(import("../sections/Experience"), {
	loading: () => <div>Loading...</div>,
});
export default function Home() {
	return (
		<Fragment>
			<TrackingAlertDialog />
			<Hero />
			<DynamicAboutSection />
			<DynamicParallaxSection />
			<DynamicProjectsSection />
			<DynamicExperienceSection />
		</Fragment>
	);
}
