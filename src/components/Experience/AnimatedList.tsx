"use client";
import { motion } from "framer-motion";

interface AnimatedListProps {
  items: { key: string; content: React.ReactNode }[];
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ items, className }) => {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, 
          },
        },
      }}
      viewport={{ once: true }}
      className={`list-disc pl-5 space-y-2 ${className}`}
    >
      {items.map(({ key, content }) => (
        <motion.li
          key={key}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {content}
        </motion.li>
      ))}
    </motion.ul>
  );
};
