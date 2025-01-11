
import { projectsData } from "@/app/Data/Projects/projects";
import { ProjectsParallax } from "../ui/projects-parallax";

export type ProductType = {
	name: string;
	subTitle: string;
	description: string;
	url: string;
	git: string;
	tech: string[];
	thumbnail: string;
};
export function ProjectsParallaxComp() {
	return <ProjectsParallax products={projectsData} />;
}
