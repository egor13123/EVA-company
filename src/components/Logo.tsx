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
  const dim = size === "sm" ? 48 : size === "lg" ? 96 : 64;
  const stroke = inverted ? "#fafaf7" : "#0a0a0a";

  return (
    <Link
      href="/"
      aria-label="EVA Company — главная"
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

        {/* EST. + vertical line */}
        <text
          x="100"
          y="50"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill={stroke}
          letterSpacing="1.2"
        >
          EST.
        </text>
        <line x1="100" y1="56" x2="100" y2="84" stroke={stroke} strokeWidth="0.6" />
        <circle cx="100" cy="84" r="0.9" fill={stroke} />

        {/* EVA wordmark */}
        <text
          x="100"
          y="125"
          textAnchor="middle"
          fontFamily="var(--font-serif), 'Cormorant Garamond', Georgia, serif"
          fontSize="42"
          fontWeight="500"
          fill={stroke}
          letterSpacing="6"
        >
          EVA
        </text>

        {/* Divider with center diamond and side accents */}
        <line x1="68" y1="143" x2="92" y2="143" stroke={stroke} strokeWidth="0.6" />
        <line x1="108" y1="143" x2="132" y2="143" stroke={stroke} strokeWidth="0.6" />
        <g transform="translate(100 143) rotate(45)">
          <rect x="-2" y="-2" width="4" height="4" fill={stroke} />
        </g>
        <g transform="translate(70 143) rotate(45)">
          <rect x="-1" y="-1" width="2" height="2" fill={stroke} />
        </g>
        <g transform="translate(130 143) rotate(45)">
          <rect x="-1" y="-1" width="2" height="2" fill={stroke} />
        </g>

        {/* COMPANY */}
        <text
          x="100"
          y="160"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="10"
          fontWeight="400"
          fill={stroke}
          letterSpacing="3.5"
        >
          COMPANY
        </text>

        {/* Bottom dots */}
        <circle cx="94" cy="172" r="1" fill={stroke} />
        <circle cx="100" cy="172" r="1" fill={stroke} />
        <circle cx="106" cy="172" r="1" fill={stroke} />
      </svg>

      {withWordmark && (
        <span className="hidden sm:flex flex-col leading-none">
          <span
            className={`display text-2xl ${inverted ? "text-paper" : "text-ink"}`}
            style={{ letterSpacing: "0.18em" }}
          >
            EVA
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.3em] mt-1 ${
              inverted ? "text-paper/70" : "text-ash"
            }`}
          >
            Company
          </span>
        </span>
      )}
    </Link>
  );
}
