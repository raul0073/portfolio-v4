"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	return (
		<Fragment>
			{theme === "light" ? (
				<Button
					variant="outline"
					size="icon"
					className="theme-toggle group relative rounded-full outline-none border-none text-zinc-900"
					onClick={() => setTheme("dark")}>
					<Moon className="group-hover:-rotate-[20deg]" width={30} />
				</Button>
			) : (
				<Button
					variant="outline"
					size="icon"
					className="theme-toggle rounded-full outline-none border-none text-appYellow"
					onClick={() => setTheme("light")}>
					<Sun className="" />
				</Button>
			)}
		</Fragment>
	);
}
