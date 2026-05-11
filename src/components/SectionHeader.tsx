type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
