import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Наш опыт — ЕВА ТСК",
  description:
    "Более 200 контрактов в портфолио, 25+ успешно исполненных. Реальный опыт ЕВА ТСК в тендерных закупках.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Наш опыт"
        title={"Цифры,\nкоторые говорят\nза нас"}
        lead="Опыт компании измеряется не годами, а количеством закупок, доведённых до результата."
      />

      <section className="container-x">
        <div className="grid lg:grid-cols-2 gap-px bg-line border border-line">
          <Reveal as="article" className="bg-paper p-12 md:p-20 relative">
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner br text-ink" />
            <p className="eyebrow">Участие</p>
            <p className="display text-[clamp(5rem,14vw,11rem)] mt-8 leading-[0.9]">
              200+
            </p>
            <p className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed max-w-md">
              контрактов, в которых мы приняли участие как поставщик в&nbsp;сферах
              торговли и&nbsp;строительства.
            </p>
          </Reveal>

          <Reveal as="article" className="bg-paper p-12 md:p-20 relative" delay={0.1}>
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner br text-ink" />
            <p className="eyebrow">Исполнение</p>
            <p className="display text-[clamp(5rem,14vw,11rem)] mt-8 leading-[0.9]">
              25+
            </p>
            <p className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed max-w-md">
              контрактов выиграны и&nbsp;доведены до&nbsp;полного исполнения —
              с&nbsp;подписанными актами.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <Reveal>
          <div className="border-t border-b border-line py-16 md:py-24 text-center">
            <p className="display text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
              «Каждый контракт — это&nbsp;обязательство, которое мы исполняем
              до&nbsp;буквы.»
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-widest text-ash">
              ООО «ТСК ЕВА»
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-32 md:mt-40">
        <Reveal>
          <div className="border-t border-line pt-10 flex flex-wrap items-center justify-between gap-6">
            <h3 className="display text-3xl md:text-4xl max-w-2xl">
              Перейти к&nbsp;другим разделам
            </h3>
            <div className="flex gap-3">
              <Link href="/services" className="btn-ink">Услуги</Link>
              <Link href="/about" className="btn-ghost">О компании</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
