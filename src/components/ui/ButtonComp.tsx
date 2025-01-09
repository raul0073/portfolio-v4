import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	icon?: ReactNode;
}

function ButtonComp({ title, icon, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={cn(
				"group transition-all duration-300 ease-in-out uppercase items-center flex gap-4 border dark:border-white/10 border-stone-300 py-3 px-6  shrink-0   hover:rounded-full ",
				props.className
			)}>
			<span className="text-normal md:text-lg text-zinc-900/80 dark:text-stone-100/80 dark:group-hover:text-stone-100 group-hover:text-zinc-900">
				{title}
			</span>
			{icon && (
				<span className="group-hover:inline group-hover:animate-bounce duration-150 transition-all ease-in-out">
					{icon}
				</span>
			)}
		</button>
	);
}

export default ButtonComp;
