import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PresentationViewer from "@/components/PresentationViewer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "О нас — ЕВА ТСК",
  description:
    "ЕВА ТСК — тендерные закупки в сфере торговли и строительства. Принципы, подход, ценности.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title={"Делаем\nтендерные закупки\nпредсказуемыми"}
        lead="ООО «ТСК ЕВА» — компания, специализирующаяся на комплексных поставках строительных материалов, оборудования, механизмов и строительной техники для объектов различной сложности."
      />

      <section className="container-x">
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=2400&q=80"
              alt="Строительство и развитие инфраструктуры"
              fill
              sizes="100vw"
              className="img-mono object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-20 md:mt-48 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Принципы</p>
          <h2 className="display text-[1.875rem] md:text-5xl mt-5 md:mt-6 leading-[1.15] md:leading-[1.05] hyphens-manual">
            Прозрачность,<br />ответственность,<br />результат
          </h2>
        </Reveal>
        <div className="lg:col-span-7 space-y-px bg-line">
          {[
            {
              t: "Прозрачность процессов",
              d: "Чёткая документация на каждом этапе. Заказчик видит ход работы и может проверить любое решение.",
            },
            {
              t: "Глубокая экспертиза",
              d: "Мы погружаемся в специфику отрасли заказчика — от стройматериалов до торгового оборудования.",
            },
            {
              t: "Гарантия исполнения",
              d: "Контролируем каждый этап контракта до его закрытия.",
            },
            {
              t: "Долгосрочные отношения",
              d: "Большая часть наших заказчиков работает с нами повторно — именно это для нас главный показатель.",
            },
          ].map((row, i) => (
            <Reveal
              key={row.t}
              delay={i * 0.06}
              className="bg-paper py-7 md:py-8 grid grid-cols-12 gap-4 md:gap-6 items-baseline"
            >
              <span className="col-span-1 text-[11px] uppercase tracking-widest text-ash">
                0{i + 1}
              </span>
              <h3 className="display text-xl md:text-3xl col-span-11 md:col-span-4 leading-[1.2]">
                {row.t}
              </h3>
              <p className="col-span-12 md:col-span-7 text-sm md:text-base text-ink/70 leading-relaxed">
                {row.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-20 md:mt-48 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[16/10] md:aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
              alt="Документы и расчёты"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="img-mono object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="eyebrow">Подход</p>
            <h2 className="display text-[1.875rem] md:text-5xl mt-5 md:mt-6 leading-[1.15] md:leading-[0.95]">
              Каждый контракт — индивидуальная работа
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-ink/80 leading-relaxed">
              Мы не работаем по шаблонам. Любая закупка — это уникальное
              сочетание сроков, требований заказчика, особенностей рынка и
              номенклатуры. Наша задача — выстроить процесс под конкретный
              проект и довести его до результата.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
              {[
                "Анализ конкурсной документации и условий контракта",
                "Подбор поставщиков и расчёт оптимальной цены",
                "Подготовка пакета документов и подача заявки",
                "Сопровождение исполнения контракта до закрытия",
              ].map((item) => (
                <li key={item} className="flex gap-3 md:gap-4 items-start">
                  <span className="display text-2xl leading-none mt-1">·</span>
                  <span className="text-sm md:text-base text-ink/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-20 md:mt-48">
        <Reveal>
          <p className="eyebrow">Преимущество</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="display text-[1.875rem] md:text-5xl lg:text-[56px] mt-6 md:mt-8 leading-[1.15] md:leading-[1.1] max-w-4xl">
            Ключевое преимущество ТСК&nbsp;ЕВА
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 md:mt-8 text-base md:text-xl lg:text-2xl text-ink/80 leading-[1.6] max-w-4xl">
            Практический подход к&nbsp;поставке. Мы понимаем, что для заказчика
            важна не&nbsp;только цена, но&nbsp;и&nbsp;соответствие товара
            техническому заданию, надёжность поставщика, соблюдение сроков,
            корректность документов и&nbsp;исполнение обязательств
            по&nbsp;договору.
          </p>
        </Reveal>
      </section>

      <section className="container-x mt-20 md:mt-40">
        <PresentationViewer
          title="Презентация компании"
          description="Краткое представление ТСК ЕВА в одном файле — опыт, направления работы, подход к поставкам."
          pdfHref="/eva-tsk-presentation.pdf"
          downloadHref="/eva-tsk-presentation.pptx"
        />
      </section>

      <section className="container-x mt-20 md:mt-40">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8 md:pt-10">
            <h3 className="display text-2xl md:text-4xl leading-[1.2] md:leading-[0.95]">
              Перейти к&nbsp;другим разделам
            </h3>
            <div className="flex gap-3">
              <Link href="/experience" className="btn-ink">Наш опыт</Link>
              <Link href="/services" className="btn-ghost">Услуги</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
