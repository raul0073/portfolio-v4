
import { ProjectsParallax } from "../ui/projects-parallax";
import projectData from "./../../app/Data/ProjectsPage/projects.json";

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
	return <ProjectsParallax products={projectData.projects} />;
}
