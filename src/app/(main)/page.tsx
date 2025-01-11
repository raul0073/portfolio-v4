import { TrackingAlertDialog } from "@/components/TrackingAlert/TrackingAlertDialog";
import { Fragment } from "react";
import Hero from "../sections/Hero";
import About from "../sections/About"
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import ImageParallax from "@/components/ParallaxImage/ParallaxText"


export default function Home() {
	return (
		<Fragment>
			<TrackingAlertDialog />
			<Hero />
			<About />
			<ImageParallax />
			<Projects />
			<Experience />
		</Fragment>
	);
}
