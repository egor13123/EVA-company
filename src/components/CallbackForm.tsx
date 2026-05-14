"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "sent";

export default function CallbackForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Заявка на звонок — ${name || "сайт ЕВА ТСК"}`;
    const body = [
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      email ? `Email: ${email}` : null,
      message ? `\nСообщение:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:office@eva-tsk.ru?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;

    setTimeout(() => setStatus("sent"), 400);
  };

  return (
    <div className="border border-line p-6 md:p-12 relative bg-paper">
      <span className="frame-corner tl text-ink" />
      <span className="frame-corner tr text-ink" />
      <span className="frame-corner bl text-ink" />
      <span className="frame-corner br text-ink" />

      <p className="eyebrow">Заказать звонок</p>
      <h3 className="display text-2xl md:text-4xl mt-4 leading-[1.2] md:leading-[1.05]">
        Перезвоним в&nbsp;течение рабочего&nbsp;дня
      </h3>

      <AnimatePresence mode="wait">
        {status !== "sent" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10 space-y-6 md:space-y-7"
          >
            <Field label="Ваше имя" name="name" type="text" required />
            <Field label="Телефон" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" />
            <Field label="Email" name="email" type="email" />
            <Field label="Сообщение" name="message" type="textarea" />

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-ink disabled:opacity-50"
              >
                {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
                <span aria-hidden>→</span>
              </button>
              <p className="text-xs text-ash max-w-xs leading-relaxed">
                Нажимая «Отправить», вы соглашаетесь с обработкой персональных
                данных.
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <p className="display text-3xl md:text-4xl">Спасибо!</p>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
              Сейчас откроется ваше почтовое приложение с подготовленным
              письмом. Если оно не открылось автоматически — напишите напрямую
              на{" "}
              <a href="mailto:office@eva-tsk.ru" className="link-underline">
                office@eva-tsk.ru
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-ghost mt-8"
            >
              Отправить ещё одну
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea";
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type, required, placeholder }: FieldProps) {
  const baseClass =
    "w-full bg-transparent border-b border-ink/25 py-3 px-0 text-base text-ink placeholder:text-ash/60 focus:outline-none focus:border-ink transition-colors duration-300";

  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-widest text-ash mb-3">
        {label}
        {required && <span className="ml-1 text-ink">*</span>}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
