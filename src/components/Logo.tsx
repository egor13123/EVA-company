import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
};

export default function Logo({ size = "md", inverted = false }: Props) {
  // Соотношение логотипа ≈ 400×117 (≈ 3.42:1)
  const width = size === "sm" ? 200 : size === "lg" ? 360 : 280;
  const height = Math.round((width * 117) / 400);

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
        width={width}
        height={height}
        className={`block select-none ${
          inverted
            ? "[filter:brightness(0)_invert(1)]"
            : "[filter:brightness(0)]"
        }`}
        draggable={false}
      />
    </Link>
  );
}
