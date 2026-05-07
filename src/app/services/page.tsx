import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Услуги — ЕВА ТСК",
  description:
    "Ваш надёжный бизнес-партнёр для поставок любой сложности. Успешно участвуем в тендерах по 44-ФЗ и 223-ФЗ.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title={"Поставки\nлюбой сложности"}
      />

      <section className="container-x">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <p className="display text-3xl md:text-5xl leading-tight lg:col-span-8 max-w-4xl">
              Ваш надёжный бизнес-партнёр для&nbsp;поставок любой&nbsp;сложности.
              Успешно участвуем в&nbsp;тендерах по&nbsp;44-ФЗ и&nbsp;223-ФЗ.
            </p>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link href="/contact" className="btn-ink">
                Контакты
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2400&q=80"
              alt="Складские стеллажи со стройматериалами"
              fill
              sizes="100vw"
              className="img-mono object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-32 md:mt-48 grid lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Направления</p>
          <h2 className="display text-5xl md:text-6xl mt-6 leading-[1.05]">
            Наши направления
          </h2>
        </Reveal>
        <div className="lg:col-span-7 space-y-px bg-line">
          {[
            {
              t: "Строительные материалы",
              d: "Поставка материалов для строительных, ремонтных и инфраструктурных объектов.",
            },
            {
              t: "Оборудование и механизмы",
              d: "Подбор и поставка оборудования, подъёмных механизмов, технических изделий и комплектующих.",
            },
            {
              t: "Строительная техника",
              d: "Поставка техники и специализированного оборудования под задачи объекта.",
            },
            {
              t: "Тендерные поставки по 44-ФЗ и 223-ФЗ",
              d: "Участие в государственных и корпоративных закупках, подбор продукции под техническое задание, работа с поставщиками и производителями.",
            },
            {
              t: "Комплексное снабжение объектов",
              d: "Закрытие потребности заказчика по нескольким товарным группам в рамках одной поставки или контракта.",
            },
          ].map((row, i) => (
            <Reveal
              key={row.t}
              delay={i * 0.06}
              className="bg-paper py-9 md:py-10 grid grid-cols-12 gap-6 items-baseline"
            >
              <span className="col-span-1 text-[11px] uppercase tracking-widest text-ash">
                0{i + 1}
              </span>
              <h3 className="display text-2xl md:text-3xl col-span-11 md:col-span-5 leading-[1.15]">
                {row.t}
              </h3>
              <p className="col-span-12 md:col-span-6 text-ink/75 leading-relaxed text-base md:text-lg">
                {row.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <Reveal>
          <p className="eyebrow">Процесс</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display text-5xl md:text-6xl mt-6 max-w-[20ch]">
            Как&nbsp;мы&nbsp;работаем
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
          {[
            {
              n: "01",
              t: "Получаем заявку или техническое задание",
              d: "Изучаем потребность заказчика, спецификацию, требования к товару, срокам и документам.",
            },
            {
              n: "02",
              t: "Подбираем продукцию и поставщиков",
              d: "Ищем оптимальные варианты у производителей, дилеров и проверенных поставщиков.",
            },
            {
              n: "03",
              t: "Проверяем соответствие требованиям",
              d: "Сопоставляем характеристики товара с техническим заданием, условиями закупки или договора.",
            },
            {
              n: "04",
              t: "Формируем предложение",
              d: "Готовим коммерческое предложение с учётом цены, сроков, логистики и документов.",
            },
            {
              n: "05",
              t: "Организуем поставку",
              d: "Контролируем отгрузку, документы и исполнение обязательств перед заказчиком.",
            },
          ].map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="bg-paper p-8 md:p-10"
            >
              <span className="display text-5xl md:text-6xl text-ink/15 block">{step.n}</span>
              <h3 className="display text-2xl md:text-[26px] mt-10 leading-[1.2]">{step.t}</h3>
              <p className="mt-5 text-sm md:text-base text-ink/75 leading-relaxed">{step.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32 md:mt-40">
        <Reveal>
          <div className="border-t border-line pt-10 flex flex-wrap items-center justify-between gap-6">
            <h3 className="display text-3xl md:text-4xl max-w-2xl">
              Перейти к&nbsp;другим разделам
            </h3>
            <div className="flex gap-3">
              <Link href="/experience" className="btn-ink">Наш опыт</Link>
              <Link href="/partnership" className="btn-ghost">Сотрудничество</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
