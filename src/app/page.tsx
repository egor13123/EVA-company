"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] flex flex-col overflow-hidden">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
            alt="Строительная инфраструктура"
            fill
            priority
            sizes="100vw"
            className="img-mono object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/65 to-ink/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
        </motion.div>

        <div className="container-x flex-1 flex flex-col justify-center text-paper pt-24 md:pt-32 pb-10 md:pb-12">
          <h1 className="display text-[clamp(2.2rem,9vw,8rem)] mt-2 md:mt-8 leading-[1] md:leading-[0.95] max-w-[22ch]">
            {[
              "Комплексные поставщики",
              "в сфере строительства",
              "и торговли",
            ].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + i * 0.1,
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="mt-6 md:mt-14 text-base md:text-2xl lg:text-[28px] text-paper/90 leading-[1.5] md:leading-[1.45] max-w-3xl"
          >
            Ваш надёжный бизнес-партнёр для&nbsp;поставок любой сложности.
            Успешно участвуем в&nbsp;тендерах по&nbsp;44-ФЗ и&nbsp;223-ФЗ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
            className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
          >
            <Link href="/services" className="btn-paper-lg">
              Услуги
              <span aria-hidden>→</span>
            </Link>
            <Link href="/partnership" className="btn-outline-lg-light">
              Сотрудничество
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          className="container-x pb-8 md:pb-16"
        >
          <div className="md:ml-auto md:max-w-md lg:max-w-[520px] border border-paper/30 bg-ink/55 backdrop-blur-md p-5 md:p-10">
            <p className="text-sm md:text-xl text-paper leading-[1.55] md:leading-[1.5]">
              Мы не просто продаём строительные материалы и&nbsp;оборудование&nbsp;—
              мы закрываем потребность заказчика под конкретный объект,
              техническое задание и&nbsp;сроки поставки.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container-x mt-20 md:mt-40">
        <Reveal>
          <p className="eyebrow">О компании</p>
        </Reveal>
        <div className="mt-8 md:mt-14 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-[2rem] md:text-6xl leading-[1.1] md:leading-[0.95]">
              Поставки, на&nbsp;которые можно положиться
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-base md:text-lg leading-relaxed text-ink/80">
              ООО «ТСК ЕВА» обеспечивает поставку строительных материалов,
              оборудования, механизмов и&nbsp;техники для государственных,
              корпоративных и&nbsp;коммерческих объектов.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
              Мы работаем с&nbsp;закупками по&nbsp;44-ФЗ и&nbsp;223-ФЗ,
              подбираем производителей и&nbsp;поставщиков, анализируем
              технические задания и&nbsp;организуем поставку продукции
              под требования заказчика.
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

        <Reveal delay={0.2} className="mt-12 md:mt-16">
          <div className="relative aspect-[4/3] md:aspect-[16/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
              alt="Складская и логистическая инфраструктура"
              fill
              sizes="100vw"
              className="img-mono object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-24 md:mt-48">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <p className="eyebrow">Направления</p>
            <h2 className="display text-[2rem] md:text-6xl mt-5 md:mt-6 leading-[1.1] md:leading-[0.95] max-w-[18ch]">
              Сферы&nbsp;деятельности компании
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="btn-ghost">
              Все услуги
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-px bg-line">
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
              className="bg-paper p-7 md:p-14 group cursor-default"
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
              <h3 className="display text-2xl md:text-4xl mt-6 md:mt-10 leading-[1.15] md:leading-[0.95]">{card.title}</h3>
              <p className="mt-4 md:mt-6 text-sm md:text-base text-ink/70 leading-relaxed max-w-md">
                {card.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24 md:mt-48">
        <div className="border border-line p-8 md:p-20 relative">
          <span className="frame-corner tl text-ink" />
          <span className="frame-corner tr text-ink" />
          <span className="frame-corner bl text-ink" />
          <span className="frame-corner br text-ink" />
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Разделы сайта</p>
              <h2 className="display text-[2rem] md:text-6xl mt-5 md:mt-6 leading-[1.1] md:leading-[0.95]">
                Подробнее о&nbsp;компании
              </h2>
              <p className="mt-5 md:mt-6 text-base md:text-lg text-ink/70 max-w-xl leading-relaxed">
                Развёрнутая информация о подходе, опыте, направлениях работы
                и контактах ЕВА ТСК.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end" delay={0.1}>
              <Link href="/about" className="btn-ink">
                О компании
                <span aria-hidden>→</span>
              </Link>
              <Link href="/experience" className="btn-ghost">
                Наш опыт
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
