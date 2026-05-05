import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = {
  title: "Контакты — ЕВА ТСК",
  description: "ООО «ТСК ЕВА» — реквизиты и контактная информация.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title={"Свяжитесь\nс нами"}
        lead="Готовы обсудить ваш проект, предложить решение и взять процесс на сопровождение."
      />

      <section className="container-x grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-7">
          <div className="border border-line p-10 md:p-14 relative">
            <span className="frame-corner tl text-ink" />
            <span className="frame-corner tr text-ink" />
            <span className="frame-corner bl text-ink" />
            <span className="frame-corner br text-ink" />

            <p className="eyebrow">Юридические данные</p>
            <h2 className="display text-4xl md:text-5xl mt-6">ООО «ТСК ЕВА»</h2>

            <div className="mt-12 grid sm:grid-cols-2 gap-y-10 gap-x-8">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">Адрес</p>
                <p className="mt-3 leading-relaxed text-ink/85">
                  109380, Россия, г. Москва,<br />
                  вн.тер.г. муниципальный округ Люблино,<br />
                  ул. Чагинская, д. 4, стр. 13, помещ. 9/3
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">Email</p>
                <p className="mt-3">
                  <a
                    href="mailto:office@eva-tsk.ru"
                    className="display text-2xl link-underline"
                  >
                    office@eva-tsk.ru
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">ИНН</p>
                <p className="mt-3 font-mono text-lg">9723248923</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">КПП</p>
                <p className="mt-3 font-mono text-lg">772301001</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">ОГРН</p>
                <p className="mt-3 font-mono text-lg">1257700087040</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-ash">Регион</p>
                <p className="mt-3 text-ink/85">Москва и Московская область</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Москва, бизнес-центр"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="img-mono object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-paper">
              <p className="text-[11px] uppercase tracking-widest text-paper/70">
                Офис
              </p>
              <p className="display text-2xl mt-2">Москва, Чагинская 4</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-32 md:mt-40">
        <Reveal>
          <div className="border-t border-line pt-10 grid lg:grid-cols-12 gap-8 items-center">
            <h3 className="display text-3xl md:text-4xl lg:col-span-7">
              Опишите задачу — ответим в&nbsp;течение рабочего&nbsp;дня
            </h3>
            <div className="lg:col-span-5 lg:text-right">
              <a href="mailto:office@eva-tsk.ru?subject=Запрос%20с%20сайта%20EVA%20Company" className="btn-ink">
                Написать письмо
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
