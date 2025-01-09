import ParallexText from "@/components/ParallaxText";
import { Fragment } from "react";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function Home() {
	return (
		<Fragment>
			<Hero />
			<About />
			<ParallexText />
			<Projects />
			<Experience />
		</Fragment>
	);
}
