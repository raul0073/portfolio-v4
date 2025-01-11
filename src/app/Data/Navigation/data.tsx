import {
	IconBorderTop,
	IconContacts,
	IconInfo16,
	IconLayers,
	IconTimelineTextOutline,
} from "@/app/assets/icons/navigationIcons/navIcons";
import { ElementType } from "react";
interface MenuOption {
	label: string;
	href: string;
	Icon: ElementType;
  }
export const menuOptions: MenuOption[] = [
	{ label: "Home", href: "#home", Icon: IconBorderTop },
	{ label: "About", href: "#about", Icon: IconInfo16 },
	{ label: "Projects", href: "#projects", Icon: IconLayers },
	{
		label: "Experience",
		href: "#experience",
		Icon: IconTimelineTextOutline,
	},
	{ label: "Contact", href: "#contact", Icon: IconContacts },
];
