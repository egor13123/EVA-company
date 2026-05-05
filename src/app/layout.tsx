import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVA Company — Тендерные закупки в торговле и строительстве",
  description:
    "ООО «ТСК ЕВА» — ваш надёжный бизнес-партнёр для поставок любой сложности. Сопровождение тендеров по 44-ФЗ и 223-ФЗ.",
  metadataBase: new URL("https://eva-tsk.ru"),
  openGraph: {
    title: "EVA Company",
    description:
      "Тендерные закупки в сфере торговли и строительства. Поставки любой сложности.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
