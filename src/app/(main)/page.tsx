import { TrackingAlertDialog } from "@/components/TrackingAlert/TrackingAlertDialog";
import { Fragment } from "react";
import Hero from "../sections/Hero";
import dynamic from "next/dynamic";


// dynamic import for comp under hero
const DynamicAbout = dynamic(()=>import('../sections/About'), {
	loading: ()=> <h2>Loading</h2>
})
const DynamicParallax = dynamic(()=>import('@/components/ParallaxImage/ParallaxText'), {
	loading: ()=> <h2>Loading</h2>
})
const DynamicProjects = dynamic(()=>import('../sections/Projects'), {
	loading: ()=> <h2>Loading</h2>
})
const DynamicExperience = dynamic(()=>import('../sections/Experience'), {
	loading: ()=> <h2>Loading</h2>
})


export default function Home() {
	return (
		<Fragment>
			<TrackingAlertDialog />
			<Hero />
			<DynamicAbout />
			<DynamicParallax />
			<DynamicProjects />
			<DynamicExperience />
		</Fragment>
	);
}
