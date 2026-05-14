import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
};

export default function Logo({ size = "md", inverted = false }: Props) {
  // Соотношение логотипа ≈ 400×117 (≈ 3.42:1).
  // Размер задаётся через CSS, чтобы мобильный и десктоп могли отличаться.
  const widthClass =
    size === "sm"
      ? "w-[200px]"
      : size === "lg"
      ? "w-[360px]"
      : "w-[320px] md:w-[280px]";

  return (
    <Link
      href="/"
      aria-label="ТСК ЕВА — главная"
      className="inline-flex items-center shrink-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-header.png"
        alt="ТСК ЕВА — Торгово-строительная компания"
        width={400}
        height={117}
        className={`block h-auto select-none ${widthClass} ${
          inverted
            ? "[filter:brightness(0)_invert(1)]"
            : "[filter:brightness(0)]"
        }`}
        draggable={false}
      />
    </Link>
  );
}
