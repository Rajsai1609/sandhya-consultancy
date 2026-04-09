interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  const alignment = centered ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span
        className="block h-1 w-10 rounded-full"
        style={{ backgroundColor: "var(--brand-blue)" }}
      />
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
        style={{ color: "var(--brand-navy)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--brand-muted)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
