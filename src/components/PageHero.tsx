"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function PageHero({ eyebrow, title, lead }: Props) {
  const lines = title.split("\n");
  return (
    <section className="container-x pt-28 md:pt-40 pb-16 md:pb-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.p>
      <h1 className="display text-[clamp(2.6rem,7vw,6.5rem)] mt-6 max-w-[15ch]">
        {lines.map((line, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15 + i * 0.08,
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h1>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ash"
        >
          {lead}
        </motion.p>
      )}
    </section>
  );
}
