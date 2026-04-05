import { useId } from "react";

type SjLogoProps = {
  className?: string;
};

/** SJ monogram — gold gradient; unique gradient id when multiple instances mount */
const SjLogo = ({ className }: SjLogoProps) => {
  const gradientId = `sjGold${useId().replace(/:/g, "")}`;

  return (
    <svg
      className={className}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C6A96B" />
          <stop offset="100%" stopColor="#A3874E" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill={`url(#${gradientId})`}
        fontFamily="'Playfair Display', serif"
        fontSize={80}
        letterSpacing={2}
      >
        SJ
      </text>
    </svg>
  );
};

export default SjLogo;
