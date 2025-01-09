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
				"group flex items-center gap-4 px-6 py-3 border border-stone-300 dark:border-white/10 uppercase shrink-0 rounded-md transition-all duration-300 ease-in-out hover:rounded-full",
				props.className
			)}>
			<span className="text-normal md:text-lg text-zinc-900/80 dark:text-stone-100/80 group-hover:text-zinc-900 dark:group-hover:text-stone-100">
				{title}
			</span>
			{icon && (
				<span className="group-hover:inline group-hover:animate-bounce transition-all duration-150 ease-in-out">
					{icon}
				</span>
			)}
		</button>
	);
}

export default ButtonComp;
