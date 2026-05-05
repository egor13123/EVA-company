import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  withWordmark?: boolean;
};

export default function Logo({
  size = "md",
  inverted = false,
  withWordmark = false,
}: Props) {
  const dim = size === "sm" ? 72 : size === "lg" ? 144 : 96;
  const stroke = inverted ? "#fafaf7" : "#0a0a0a";

  return (
    <Link
      href="/"
      aria-label="ЕВА ТСК — главная"
      className="inline-flex items-center gap-3 group"
    >
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer + inner frames */}
        <rect x="6" y="6" width="188" height="188" stroke={stroke} strokeWidth="1.2" />
        <rect x="14" y="14" width="172" height="172" stroke={stroke} strokeWidth="0.6" />

        {/* Corner diamonds */}
        {[
          [22, 22],
          [178, 22],
          [22, 178],
          [178, 178],
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx} ${cy}) rotate(45)`}>
            <rect x="-2.4" y="-2.4" width="4.8" height="4.8" fill={stroke} />
          </g>
        ))}

        {/* Top decorative element: dot · line · dot */}
        <circle cx="100" cy="46" r="1" fill={stroke} />
        <line x1="100" y1="46" x2="100" y2="84" stroke={stroke} strokeWidth="0.7" />
        <circle cx="100" cy="84" r="1" fill={stroke} />

        {/* ЕВА wordmark */}
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fontFamily="var(--font-serif), 'Cormorant Garamond', Georgia, serif"
          fontSize="44"
          fontWeight="600"
          fill={stroke}
          letterSpacing="6"
        >
          ЕВА
        </text>

        {/* Divider with center diamond and side accents */}
        <line x1="68" y1="146" x2="92" y2="146" stroke={stroke} strokeWidth="0.6" />
        <line x1="108" y1="146" x2="132" y2="146" stroke={stroke} strokeWidth="0.6" />
        <g transform="translate(100 146) rotate(45)">
          <rect x="-2" y="-2" width="4" height="4" fill={stroke} />
        </g>
        <g transform="translate(70 146) rotate(45)">
          <rect x="-1" y="-1" width="2" height="2" fill={stroke} />
        </g>
        <g transform="translate(130 146) rotate(45)">
          <rect x="-1" y="-1" width="2" height="2" fill={stroke} />
        </g>

        {/* ТСК */}
        <text
          x="100"
          y="164"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="11"
          fontWeight="400"
          fill={stroke}
          letterSpacing="6"
        >
          ТСК
        </text>

        {/* Bottom dots */}
        <circle cx="94" cy="176" r="1" fill={stroke} />
        <circle cx="100" cy="176" r="1" fill={stroke} />
        <circle cx="106" cy="176" r="1" fill={stroke} />
      </svg>

      {withWordmark && (
        <span className="hidden sm:flex flex-col leading-none">
          <span
            className={`display text-2xl ${inverted ? "text-paper" : "text-ink"}`}
            style={{ letterSpacing: "0.18em" }}
          >
            ЕВА
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.3em] mt-1 ${
              inverted ? "text-paper/70" : "text-ash"
            }`}
          >
            ТСК
          </span>
        </span>
      )}
    </Link>
  );
}
