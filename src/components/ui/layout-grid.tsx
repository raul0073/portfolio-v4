"use client";
import { programingIcons } from "@/app/assets/icons/programingIcons/IconsSource";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductType } from "../Projects/ProjectParallax";



export const LayoutGrid = ({ cards }: { cards: ProductType[] }) => {
  const [selected, setSelected] = useState<ProductType | null>(null);
  const [lastSelected, setLastSelected] = useState<ProductType | null>(null);

  const handleClick = (card: ProductType) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full px-4  grid grid-cols-2 max-w-7xl mx-auto gap-4 relative cursor-pointer pb-24 dark:bg-bg-dark bg-gray-300">
      {cards.map((card, i) => (
        <div key={i} className={cn(`min-h-28`)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              
              "relative overflow-hidden",
              selected?.url === card.url
                ? "cursor-pointer absolute inset-0 h-1/2 w-full m-auto z-50 flex justify-center items-center flex-wrap flex-col "
                : lastSelected?.url === card.url
                ? "z-40 bg-appBlue/80 dark:bg-appYellow/80 h-full w-full col-span-2 rounded-tr-xl rounded-bl-xl"
                : "bg-transparent  h-full w-full rounded-none"
            )}
            layoutId={`card-${card.url}`}
          >
            {selected?.url === card.url && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.url ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.url ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: ProductType }) => {
  return (
    <motion.img
      layoutId={`image-${card.url}-image`}
      src={card.thumbnail}
      height="700"
      width="700"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200 "
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: ProductType | null }) => {
  return (
    <div className="bg-black/90 h-full w-full flex flex-col justify-end  shadow-2xl relative z-[60] cursor-default">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black/40  z-10"
      />
      <h2 className="absolute top-10 left-4 text-stone-200 z-30  font-base  mb-4 font-abadiBold text-2xl capitalize ">
				{selected?.name} <br />
       
			</h2>
      <Link className="absolute right-4 top-4 items-center inline z-30 text-appBlue/60"  href={selected?.url || "#"} target="_blank"><ArrowRight width={20} /></Link>
        <Link className="absolute right-10 top-4 items-center inline z-30 text-appBlue/60"  href={selected?.git || "#"} target="_blank"><i className="devicon-github-original w-4 h-auto"  /></Link>
      <motion.div
        layoutId={`content-${selected?.url}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-30 bottom-1"
      >
           <ul className="flex space-x-2 justify-end px-2 font-extrabold  text-xl ">
					{selected?.tech.map((techName) => {
						const icon = programingIcons.find(
							(ico) => ico.name.toLowerCase() === techName.toLowerCase()
						);
						return icon ? (
							<li key={icon.name} title={icon.name} className="mb-2">
								<i className={`${icon.class} text-appYellow2 text-2xl`} />
							</li>
						) : null;
					})}
				</ul>
        <p
        className="relative text-white/80 text-sm font-normal"
        >

        {selected?.description}

        </p>
      
      </motion.div>
    </div>
  );
};
