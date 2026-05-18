"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  pdfHref: string;
  downloadHref: string;
};

export default function PresentationViewer({
  eyebrow = "Презентация",
  title,
  description,
  pdfHref,
  downloadHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border border-line p-7 md:p-14 relative">
      <span className="frame-corner tl text-ink" />
      <span className="frame-corner tr text-ink" />
      <span className="frame-corner bl text-ink" />
      <span className="frame-corner br text-ink" />
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="display text-[1.875rem] md:text-5xl mt-5 md:mt-6 leading-[1.15] md:leading-[1.05]">
            {title}
          </h3>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-ink/75 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="btn-ink"
          >
            {open ? "Скрыть" : "Посмотреть"}
            <span aria-hidden>{open ? "↑" : "→"}</span>
          </button>
          <a href={downloadHref} download className="btn-ghost">
            Скачать
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 md:mt-12 w-full h-[65vh] md:h-[640px] border border-line bg-paper">
              <iframe
                src={`${pdfHref}#view=FitH`}
                title={title}
                className="block w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
