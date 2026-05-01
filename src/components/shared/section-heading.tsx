type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
