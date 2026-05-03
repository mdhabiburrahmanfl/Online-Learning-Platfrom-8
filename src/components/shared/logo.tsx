import Link from "next/link";
import { useId } from "react";

type LogoProps = {
  showTagline?: boolean;
};

export function Logo({ showTagline = true }: LogoProps) {
  const logoId = useId();
  const sPath =
    "M59.5 19.5C59.5 11.6 52.7 5.5 44.1 5.5H24.5C15.3 5.5 8.5 11.8 8.5 20.5C8.5 29.9 16 36.7 25.5 36.7H43.9C53.2 36.7 60.3 43.4 60.3 52.2C60.3 61 53.4 68.5 44.1 68.5H24C15.5 68.5 8.5 62.6 8.5 54.5";
  const topGradientId = `${logoId}-top-gradient`;
  const bottomGradientId = `${logoId}-bottom-gradient`;
  const topHighlightId = `${logoId}-top-highlight`;
  const bottomHighlightId = `${logoId}-bottom-highlight`;
  const topClipId = `${logoId}-top-clip`;
  const bottomClipId = `${logoId}-bottom-clip`;
  const shadowId = `${logoId}-shadow`;

  return (
    <Link href="/" className="group inline-flex items-center gap-3.5">
      <div className="relative h-[3.8rem] w-[3.8rem] shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        <svg
          viewBox="0 0 84 84"
          aria-hidden="true"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id={topGradientId} x1="15" y1="5" x2="54" y2="34">
              <stop offset="0%" stopColor="#ff93a8" />
              <stop offset="58%" stopColor="#ee667f" />
              <stop offset="100%" stopColor="#c24862" />
            </linearGradient>
            <linearGradient id={topHighlightId} x1="18" y1="8" x2="50" y2="24">
              <stop offset="0%" stopColor="#ffe1e7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={bottomGradientId} x1="18" y1="34" x2="62" y2="73">
              <stop offset="0%" stopColor="#5b6371" />
              <stop offset="58%" stopColor="#343b48" />
              <stop offset="100%" stopColor="#181d28" />
            </linearGradient>
            <linearGradient id={bottomHighlightId} x1="22" y1="35" x2="48" y2="54">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <clipPath id={topClipId}>
              <rect x="0" y="0" width="84" height="39" />
            </clipPath>
            <clipPath id={bottomClipId}>
              <rect x="0" y="35" width="84" height="49" />
            </clipPath>
            <filter
              id={shadowId}
              x="-30%"
              y="-30%"
              width="160%"
              height="180%"
              colorInterpolationFilters="sRGB"
            >
              <feDropShadow dx="0" dy="10" stdDeviation="7" floodColor="#020617" floodOpacity="0.34" />
            </filter>
          </defs>
          <g filter={`url(#${shadowId})`}>
            <path
              d={sPath}
              fill="none"
              stroke="rgba(15,23,42,0.58)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.5 4)"
            />
          </g>
          <path
            d={sPath}
            fill="none"
            stroke="rgba(2,6,23,0.12)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g clipPath={`url(#${topClipId})`}>
            <path
              d={sPath}
              fill="none"
              stroke={`url(#${topGradientId})`}
              strokeWidth="16.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={sPath}
              fill="none"
              stroke={`url(#${topHighlightId})`}
              strokeWidth="5.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g clipPath={`url(#${bottomClipId})`}>
            <path
              d={sPath}
              fill="none"
              stroke={`url(#${bottomGradientId})`}
              strokeWidth="16.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={sPath}
              fill="none"
              stroke={`url(#${bottomHighlightId})`}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="space-y-1">
        <p className="text-[1.2rem] font-bold tracking-[-0.055em] text-slate-950">
          SkillSphere
        </p>
        {showTagline ? (
          <p className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            Learn with momentum
          </p>
        ) : null}
      </div>
    </Link>
  );
}
