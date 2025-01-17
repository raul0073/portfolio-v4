"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

import { ProductType } from "../Projects/ProjectParallax";
import { AnimatedProjectModal } from "../Projects/MobileProjectModal";

export const LayoutGrid = ({ cards }: { cards: ProductType[] }) => {
	const [selected, setSelected] = useState<ProductType | null>(null);

	return (
		<div className="w-full h-full px-4  grid grid-cols-1 max-w-7xl mx-auto gap-4 relative cursor-pointer pb-24 dark:bg-bg-dark bg-gray-300">
			{cards.map((card, i) => (
				<div key={i} className={cn(` `)} onClick={() => setSelected(card)}>
					<AnimatedProjectModal selected={selected}>
						<ImageComponent card={card} selected={selected} />
					</AnimatedProjectModal>
				</div>
			))}
		</div>
	);
};

const ImageComponent = ({
	card,
	selected,
}: {
	card: ProductType;
	selected: ProductType | null;
}) => {
	return (
		<motion.img
			layoutId={`image-${card.url}-image`}
			src={card.thumbnail as string}
			height="1200"
			width="1200"
			className={cn(
				`${
					selected?.url === card.url ? "object-cover" : "object-cover"
				} object-top absolute inset-0 h-full w-full transition duration-200`
			)}
			alt={`thumbnail-${card.name}`}
		/>
	);
};
