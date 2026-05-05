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

      <section className="container-x mt-32 md:mt-48 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Сферы</p>
          <h2 className="display text-5xl md:text-6xl mt-6">
            Где&nbsp;работаем
          </h2>
        </Reveal>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line">
          {[
            { t: "Торговля", d: "Снабжение коммерческих и государственных заказчиков широкой номенклатурой товаров." },
            { t: "Строительство", d: "Поставка стройматериалов и оборудования для подрядчиков и государственных объектов." },
            { t: "44-ФЗ", d: "Закупки государственных заказчиков. Полное сопровождение конкурсной процедуры." },
            { t: "223-ФЗ", d: "Закупки госкомпаний и корпораций — гибкая работа в рамках корпоративных регламентов." },
          ].map((row, i) => (
            <Reveal
              key={row.t}
              delay={i * 0.06}
              className="bg-paper p-10 md:p-12"
            >
              <p className="display text-4xl md:text-5xl">{row.t}</p>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">{row.d}</p>
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
            От&nbsp;первого контакта до&nbsp;закрытия контракта
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {[
            { n: "01", t: "Анализ задачи", d: "Изучаем потребность, бюджет, требования к поставке." },
            { n: "02", t: "Подбор тендеров", d: "Находим релевантные закупки и оцениваем перспективы участия." },
            { n: "03", t: "Подача заявки", d: "Готовим документы, обеспечения, проходим аккредитацию." },
            { n: "04", t: "Исполнение", d: "Поставляем товар, ведём документооборот, закрываем контракт." },
          ].map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className="bg-paper p-10 md:p-12 min-h-[300px] flex flex-col"
            >
              <span className="display text-6xl md:text-7xl text-ink/15">{step.n}</span>
              <h3 className="display text-3xl md:text-4xl mt-auto">{step.t}</h3>
              <p className="mt-5 text-base md:text-lg text-ink/75 leading-relaxed">{step.d}</p>
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
