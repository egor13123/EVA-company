"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PresentationViewer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-line p-7 md:p-14 relative">
      <span className="frame-corner tl text-ink" />
      <span className="frame-corner tr text-ink" />
      <span className="frame-corner bl text-ink" />
      <span className="frame-corner br text-ink" />
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow">Презентация</p>
          <h3 className="display text-[1.875rem] md:text-5xl mt-5 md:mt-6 leading-[1.15] md:leading-[1.05]">
            Презентация компании
          </h3>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-ink/75 leading-relaxed max-w-2xl">
            Краткое представление ТСК&nbsp;ЕВА в&nbsp;одном файле&nbsp;—
            опыт, направления работы, подход к&nbsp;поставкам.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="presentation-viewer"
            className="btn-ink"
          >
            {open ? "Скрыть" : "Посмотреть"}
            <span aria-hidden>{open ? "↑" : "→"}</span>
          </button>
          <a
            href="/eva-tsk-presentation.pptx"
            download
            className="btn-ghost"
          >
            Скачать
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="presentation-viewer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 md:mt-12 w-full h-[65vh] md:h-[640px] border border-line bg-paper">
              <iframe
                src="/eva-tsk-presentation.pdf#view=FitH"
                title="Презентация ТСК ЕВА"
                className="block w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
