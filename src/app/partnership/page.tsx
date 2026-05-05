import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Сотрудничество — EVA Company",
  description:
    "Совместные проекты с производителями и импортёрами. Вакансии для специалистов по тендерам 44-ФЗ и 223-ФЗ.",
};

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Сотрудничество"
        title={"Приглашаем\nк работе"}
        lead="Мы открыты к долгосрочным партнёрствам и формируем команду профессионалов в области тендерных закупок."
      />

      <section className="container-x">
        <div className="grid lg:grid-cols-12 gap-px bg-line border border-line">
          <Reveal as="article" className="lg:col-span-6 bg-paper p-10 md:p-16 relative">
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner tr text-ink" />
            <p className="eyebrow">01 · Совместные проекты</p>
            <h2 className="display text-3xl md:text-5xl mt-8 leading-tight">
              Производителям и&nbsp;импортёрам
            </h2>
            <p className="mt-8 text-ink/80 leading-relaxed">
              Мы открыты к сотрудничеству с производителями и импортёрами,
              заинтересованными в расширении рынка сбыта через тендерные
              площадки. Объединяем вашу продукцию с нашим опытом для победы
              в госзакупках.
            </p>
            <ul className="mt-10 space-y-4 text-ink/85">
              {[
                "Анализ потенциала вашей номенклатуры на тендерных площадках",
                "Подбор подходящих закупок и стратегия участия",
                "Сопровождение поставок и документооборота",
                "Прозрачные коммерческие условия и долгосрочные отношения",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="text-ash">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href="mailto:office@eva-tsk.ru?subject=Совместный%20проект"
                className="btn-ink"
              >
                Предложить продукт
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal
            as="article"
            className="lg:col-span-6 bg-ink text-paper p-10 md:p-16 relative"
            delay={0.1}
          >
            <span className="frame-corner tl text-paper" />
            <span className="frame-corner tr text-paper" />
            <p className="eyebrow text-paper/70">02 · Карьера</p>
            <h2 className="display text-3xl md:text-5xl mt-8 leading-tight">
              Присоединяйтесь к&nbsp;команде
            </h2>
            <p className="mt-8 text-paper/85 leading-relaxed">
              Ищем опытных специалистов по тендерам с собственной клиентской
              базой и глубоким знанием 44-ФЗ и 223-ФЗ. Предлагаем достойные
              условия в динамично развивающейся компании.
            </p>
            <ul className="mt-10 space-y-4 text-paper/85">
              {[
                "Опыт работы с государственными и корпоративными закупками",
                "Знание 44-ФЗ, 223-ФЗ и сопутствующего законодательства",
                "Собственная клиентская база — преимущество",
                "Достойные условия и прозрачная мотивация",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="text-paper/50">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href="mailto:office@eva-tsk.ru?subject=Вакансия%20—%20специалист%20по%20тендерам"
                className="inline-flex items-center gap-3 border border-paper text-paper px-6 py-3 text-[12px] uppercase tracking-widest transition-colors duration-500 hover:bg-paper hover:text-ink"
              >
                Откликнуться
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <Reveal>
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
              alt="Команда за рабочим столом"
              fill
              sizes="100vw"
              className="img-mono object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-32 md:mt-40">
        <Reveal>
          <div className="border-t border-line pt-10 grid lg:grid-cols-12 gap-8 items-center">
            <h3 className="display text-3xl md:text-4xl lg:col-span-7">
              Любой формат партнёрства начинается с&nbsp;разговора
            </h3>
            <div className="lg:col-span-5 lg:text-right flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact" className="btn-ink">
                Связаться
                <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn-ghost">Услуги</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
