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
				"group relative flex items-center gap-4 px-6 py-3 border border-dashed border-appBlue/90 dark:border-appYellow2/40 uppercase shrink-0 rounded-md transition-all duration-600 ease-in-out hover:bg-appBlue/40 dark:hover:bg-white/10 hover:border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 dark:focus:ring-stone-300 overflow-hidden",
				props.className
			)}>
			<span className="text-normal md:text-lg text-zinc-800/80 dark:text-stone-100/80 transition-all duration-600 ease-in-out group-hover:text-zinc-900 dark:group-hover:text-stone-100">
				{title}
			</span>
			{icon && (
				<span className="relative w-8 h-full transition-transform duration-600 ease-in-out">
					<span className="absolute right-0 bottom-1/2 translate-y-1/2 transition-all duration-700 ease-in-out text-lg text-zinc-900/40 dark:text-stone-100/40 group-hover:translate-y-12">
						{icon}
					</span>
					<span className="hidden absolute right-0 bottom-1/2  transition-all duration-600 ease-in-out text-lg text-zinc-900/90 dark:text-stone-100/90 group-hover:scale-105  group-hover:inline-flex group-hover:translate-y-1/2">
						{icon}
					</span>
				</span>
			)}
		</button>
	);
}

export default ButtonComp;
