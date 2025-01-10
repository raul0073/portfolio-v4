import ParallexText from "@/components/ParallaxText";
import { Fragment } from "react";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import { TrackingAlertDialog } from "@/components/TrackingAlert/TrackingAlertDialog";

export default function Home() {
	return (
		<Fragment>
			<TrackingAlertDialog />
			<Hero />
			<About />
			<ParallexText />
			<Projects />
			<Experience />
		</Fragment>
	);
}
