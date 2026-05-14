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

          <Reveal as="article" className="bg-paper p-12 md:p-20 relative" delay={0.2}>
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner br text-ink" />
            <p className="eyebrow">Сумма контрактов</p>
            <p className="display text-[clamp(5rem,14vw,11rem)] mt-8 leading-[0.9]">
              100+
            </p>
            <p className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed max-w-md">
              миллионов рублей — общая сумма по&nbsp;10&nbsp;успешно завершённым
              контрактам.
            </p>
          </Reveal>

          <Reveal as="article" className="bg-paper p-12 md:p-20 relative" delay={0.3}>
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner br text-ink" />
            <p className="eyebrow">Совокупный объём</p>
            <p className="display text-[clamp(5rem,14vw,11rem)] mt-8 leading-[0.9]">
              250
            </p>
            <p className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed max-w-md">
              миллионов рублей — суммарный объём выполненных контрактов.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-32 md:mt-48">
        <Reveal>
          <p className="eyebrow">С кем работали</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display text-4xl md:text-5xl mt-6 max-w-[26ch] leading-[1.05]">
            Опыт поставок для&nbsp;крупных строительных и&nbsp;инфраструктурных
            организаций
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-ink/80 leading-relaxed max-w-3xl">
            ООО «ТСК ЕВА» имеет опыт поставок для организаций, работающих
            в сфере строительства, метрополитена и инфраструктурных объектов.
          </p>
          <p className="mt-6 text-base text-ash uppercase tracking-widest">
            В числе организаций, по которым у компании имеется опыт исполнения
            поставок:
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line">
          {[
            { name: "АО «Метрострой Северной столицы»", logo: "/metrostroy.png" },
            { name: "ГУП «Петербургский метрополитен»", logo: "/metropiter.png" },
            { name: "АО «Мосметрострой»", logo: "/mos.png" },
            { name: "ООО «Тоннельстройкомплект»", logo: "/tonel.png" },
          ].map((client, i) => (
            <Reveal
              key={client.name}
              delay={i * 0.06}
              className="bg-paper p-10 md:p-12"
            >
              <span className="text-[11px] uppercase tracking-widest text-ash">
                0{i + 1}
              </span>
              <div className="mt-6 flex items-center gap-6 md:gap-8">
                <p className="display text-2xl md:text-3xl leading-[1.2] flex-1">
                  {client.name}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt=""
                  className="block shrink-0 h-16 w-28 md:h-24 md:w-44 object-contain [filter:grayscale(100%)] opacity-80"
                />
              </div>
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
              <Link href="/services" className="btn-ink">Услуги</Link>
              <Link href="/about" className="btn-ghost">О компании</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
