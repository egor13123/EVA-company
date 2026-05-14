import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper mt-20 md:mt-32">
      <div className="container-x py-12 md:py-20 grid gap-10 md:gap-12 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-5 md:gap-6">
          <Logo size="sm" inverted />
          <p className="text-sm md:text-base text-paper/60 max-w-sm leading-relaxed">
            Комплексные поставщики в&nbsp;сфере строительства и&nbsp;торговли.
            Тендерные закупки в&nbsp;торговле и&nbsp;строительстве. Поставки
            любой сложности с&nbsp;участием в&nbsp;44-ФЗ и&nbsp;223-ФЗ.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-widest text-paper/50 mb-5">
            Навигация
          </p>
          <ul className="space-y-2.5 md:space-y-3 text-sm md:text-base text-paper/85">
            <li><Link href="/" className="link-underline">Главная</Link></li>
            <li><Link href="/about" className="link-underline">О нас</Link></li>
            <li><Link href="/experience" className="link-underline">Наш опыт</Link></li>
            <li><Link href="/services" className="link-underline">Услуги</Link></li>
            <li><Link href="/partnership" className="link-underline">Сотрудничество</Link></li>
            <li><Link href="/contact" className="link-underline">Контакты</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest text-paper/50 mb-5">
            Контакты
          </p>
          <address className="not-italic text-sm md:text-base text-paper/85 space-y-2.5 md:space-y-3 leading-relaxed">
            <p>ООО «ТСК ЕВА»</p>
            <p className="text-paper/60 text-sm">
              109380, Россия, г. Москва, вн.тер.г. муниципальный округ Люблино,
              ул. Чагинская, д. 4, стр. 13, помещ. 9/3
            </p>
            <p>
              <a href="mailto:office@eva-tsk.ru" className="link-underline">
                office@eva-tsk.ru
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-x py-5 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3 text-[10px] md:text-[11px] uppercase tracking-widest text-paper/50">
          <p>© {year} ООО «ТСК ЕВА». Все права защищены.</p>
          <p>ИНН 9723248923 · КПП 772301001 · ОГРН 1257700087040</p>
        </div>
      </div>
    </footer>
  );
}
