
import { projectsData } from "@/app/Data/Projects/projects";
import { ProjectsParallax } from "../ui/projects-parallax";
import { StaticImageData } from "next/image";

export type ProductType = {
	name: string;
	subTitle: string;
	description: string;
	url: string;
	git: string;
	tech: string[];
	thumbnail: string | StaticImageData;
	className: string;
	thumbnailClass: string
};
export function ProjectsParallaxComp() {
	return <ProjectsParallax products={projectsData} />;
}
