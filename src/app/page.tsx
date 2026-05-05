"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="container-x pt-24 md:pt-32 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              ООО «ТСК ЕВА» · Est. 2025
            </motion.p>

            <h1 className="display text-[clamp(2.8rem,9vw,8rem)] mt-8">
              {[
                "Тендерные",
                "закупки",
                <span key="ital" className="italic font-light">в торговле</span>,
                "и строительстве",
              ].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15 + i * 0.1,
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="lg:col-span-4 lg:pb-6"
          >
            <p className="text-lg text-ink/80 leading-relaxed max-w-md">
              Ваш надёжный бизнес-партнёр для поставок любой сложности.
              Успешно участвуем в тендерах по 44-ФЗ и 223-ФЗ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-ink">
                Услуги
                <span aria-hidden>→</span>
              </Link>
              <Link href="/partnership" className="btn-ghost">
                Сотрудничество
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="container-x"
        >
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
              alt="Строительная инфраструктура"
              fill
              priority
              sizes="100vw"
              className="img-mono object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 hidden md:block">
              <div className="border border-paper/40 bg-ink/60 backdrop-blur-sm text-paper p-6 max-w-xs">
                <p className="text-[11px] uppercase tracking-widest text-paper/70">
                  Поставки и тендеры
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Полный цикл сопровождения закупок — от подачи заявки до
                  исполнения контракта.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <Reveal>
          <p className="eyebrow">Цифры</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {[
            { num: "44", sub: "Федеральный закон", note: "о госзакупках" },
            { num: "223", sub: "Федеральный закон", note: "о закупках госкомпаний" },
            { num: "100%", sub: "Документооборот", note: "сопровождение под ключ" },
            { num: "24/7", sub: "Поддержка", note: "по действующим тендерам" },
          ].map((item, i) => (
            <Reveal key={item.num} delay={i * 0.08} className="border-l border-line pl-6">
              <p className="display text-5xl md:text-6xl">{item.num}</p>
              <p className="mt-4 text-[11px] uppercase tracking-widest text-ash">
                {item.sub}
              </p>
              <p className="mt-1 text-sm text-ink/70">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">О компании</p>
            <h2 className="display text-5xl md:text-6xl mt-6">
              Поставки, на&nbsp;которые можно положиться
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/80">
              EVA Company — компания, специализирующаяся на тендерных закупках
              в сферах торговли и строительства. Мы выстраиваем процессы так,
              чтобы клиент получал результат: вовремя, по контракту, без рисков.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 text-[12px] uppercase tracking-widest link-underline"
            >
              Подробнее о компании
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
              alt="Стройматериалы на складе"
              fill
              sizes="100vw"
              className="img-mono object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <p className="eyebrow">Направления</p>
            <h2 className="display text-5xl md:text-6xl mt-6 max-w-[18ch]">
              Что&nbsp;мы делаем для&nbsp;клиентов
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="btn-ghost">
              Все услуги
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-line">
          {[
            {
              num: "01",
              title: "Тендеры по 44-ФЗ",
              text: "Подготовка заявок, обеспечение, сопровождение исполнения контрактов государственных заказчиков.",
            },
            {
              num: "02",
              title: "Тендеры по 223-ФЗ",
              text: "Работа с закупками госкомпаний и корпораций — стратегия, документация, сопровождение.",
            },
            {
              num: "03",
              title: "Поставки стройматериалов",
              text: "Прямые контракты с производителями. Подбор номенклатуры, логистика, сроки.",
            },
            {
              num: "04",
              title: "Поставки в торговле",
              text: "Снабжение коммерческих и государственных заказчиков товарами широкой номенклатуры.",
            },
          ].map((card, i) => (
            <Reveal
              key={card.num}
              delay={i * 0.06}
              as="article"
              className="bg-paper p-10 md:p-14 group cursor-default"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-widest text-ash">
                  {card.num}
                </span>
                <motion.span
                  className="text-ink"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.4 }}
                >
                  →
                </motion.span>
              </div>
              <h3 className="display text-3xl md:text-4xl mt-10">{card.title}</h3>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
                {card.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <div className="border border-line p-10 md:p-20 relative">
          <span className="frame-corner tl text-ink" />
          <span className="frame-corner tr text-ink" />
          <span className="frame-corner bl text-ink" />
          <span className="frame-corner br text-ink" />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Сотрудничество</p>
              <h2 className="display text-4xl md:text-6xl mt-6">
                Готовы обсудить ваш проект?
              </h2>
              <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
                Открыты к работе с производителями, импортёрами и опытными
                специалистами по тендерам.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end" delay={0.1}>
              <Link href="/contact" className="btn-ink">
                Связаться
                <span aria-hidden>→</span>
              </Link>
              <Link href="/partnership" className="btn-ghost">
                Подробнее
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
