import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
};

export default function Logo({ size = "md", inverted = false }: Props) {
  const width = size === "sm" ? 168 : size === "lg" ? 320 : 224;
  const height = (width * 70) / 320;

  // Tone of colours — на тёмном hero осветляем
  const darkBlue = inverted ? "#9FC4DD" : "#1F4E79";
  const midBlue = inverted ? "#BAD5E7" : "#3B89BF";
  const lightBlue = inverted ? "#D9EAF4" : "#5BB6E0";
  const subtitleColor = inverted ? "#D5D5D5" : "#9A9A9A";

  return (
    <Link
      href="/"
      aria-label="ТСК ЕВА — главная"
      className="inline-flex items-center shrink-0"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 320 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Три угловые формы (стилизованные строения / стрелки) */}
        <polygon points="6,50 24,12 38,12 24,50" fill={darkBlue} />
        <polygon points="30,50 50,12 70,12 48,50" fill={midBlue} />
        <polygon points="58,50 82,12 108,12 78,50" fill={lightBlue} />
        {/* Тонкая дуга-«swoosh» под основанием */}
        <path
          d="M 2 56 Q 55 64 115 54"
          stroke={lightBlue}
          strokeWidth="1.3"
          fill="none"
          opacity="0.55"
        />

        {/* «ТСК» */}
        <text
          x="128"
          y="42"
          fontFamily="var(--font-sans), Inter, Arial, sans-serif"
          fontSize="30"
          fontWeight="700"
          fill={darkBlue}
          letterSpacing="2"
        >
          ТСК
        </text>
        {/* «ЕВА» */}
        <text
          x="205"
          y="42"
          fontFamily="var(--font-sans), Inter, Arial, sans-serif"
          fontSize="30"
          fontWeight="600"
          fill={lightBlue}
          letterSpacing="2"
        >
          ЕВА
        </text>
        {/* Подпись */}
        <text
          x="128"
          y="60"
          fontFamily="var(--font-sans), Inter, Arial, sans-serif"
          fontSize="7"
          fontWeight="400"
          fill={subtitleColor}
          letterSpacing="2.2"
        >
          ТОРГОВАЯ СТРОИТЕЛЬНАЯ КОМПАНИЯ
        </text>
      </svg>
    </Link>
  );
}
