"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const NAV = [
  { href: "/about", label: "О нас" },
  { href: "/services", label: "Услуги" },
  { href: "/partnership", label: "Сотрудничество" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onDarkHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-soft ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <Logo size="sm" inverted={onDarkHero} />

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[12px] uppercase tracking-widest transition-colors duration-500 ${
                  onDarkHero ? "text-paper" : "text-ink"
                }`}
              >
                <span className={active ? "opacity-100" : "opacity-70 hover:opacity-100 transition-opacity"}>
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute -bottom-2 left-0 right-0 h-px ${
                      onDarkHero ? "bg-paper" : "bg-ink"
                    }`}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:office@eva-tsk.ru"
            className={`text-[12px] uppercase tracking-widest link-underline transition-colors duration-500 ${
              onDarkHero ? "text-paper" : "text-ink"
            }`}
          >
            office@eva-tsk.ru
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-px origin-center transition-colors duration-500 ${
              onDarkHero ? "bg-paper" : "bg-ink"
            }`}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-px transition-colors duration-500 ${
              onDarkHero ? "bg-paper" : "bg-ink"
            }`}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-px origin-center transition-colors duration-500 ${
              onDarkHero ? "bg-paper" : "bg-ink"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-line bg-paper"
          >
            <div className="container-x py-6 flex flex-col gap-5">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="display text-3xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="rule mt-2" />
              <a href="mailto:office@eva-tsk.ru" className="text-[12px] uppercase tracking-widest text-ash">
                office@eva-tsk.ru
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
