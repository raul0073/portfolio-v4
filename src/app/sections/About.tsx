import { AboutTabs } from "@/components/AboutTabs/TabsComp";

function About() {
	return (
		<section className="about md:py-24 py-44" id="about">
			<div className="container">
				<AboutTabs />
			</div>
		</section>
	);
}

export default About;
