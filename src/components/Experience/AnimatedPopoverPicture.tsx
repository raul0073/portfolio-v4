"use client";
import { motion } from "framer-motion";
import { LucideImageUpscale } from "lucide-react";
import Image from "next/image";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from "../ui/animated-modal";

export function AnimatedExperienceLocationImageModal({
	img,
}: {
	img: { src: string; name: string; text: string };
}) {
	return (
		<div className="animated-picture py-40  flex items-center justify-center">
			<Modal>
				<ModalTrigger className="animated-picture-trigger flex justify-center group/modal-btn">
					<LucideImageUpscale className="text-bg-dark/60 dark:text-bg-light/60" />
				</ModalTrigger>
				<ModalBody>
					<ModalContent>
						<h4 className="img-title text-lg capitalize md:text-2xl text-neutral-300 dark:text-neutral-100 font-bold text-center mb-2">
							{img?.name}
						</h4>
						<motion.p
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="mb-8 text-sm capitalize text-center text-neutral-300/60 dark:text-neutral-100/60">
							{img?.text}
						</motion.p>
						<div className="flex justify-center items-center">
							<motion.div
								key={"image"}
								style={{
									rotate: Math.random() * 20 - 10,
								}}
								whileHover={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100,
								}}
								whileTap={{
									scale: 1.1,
									rotate: 0,
									zIndex: 100,
								}}
								className="image-wrapper rounded-xl -mr-4 mt-4 p-1 bg-transparent  flex-shrink-0 overflow-hidden">
								<Image
									src={img?.src}
									alt={`${img?.name}`}
									width={500}
									height={500}
									loading="lazy"
									className="rounded-lg object-cover flex-shrink-0"
								/>
							</motion.div>
						</div>
					</ModalContent>
				</ModalBody>
			</Modal>
		</div>
	);
}
