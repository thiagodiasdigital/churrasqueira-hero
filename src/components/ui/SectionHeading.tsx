interface SectionHeadingProps {
  tag?: "h2" | "h3";
  children: React.ReactNode;
  sub?: string | null;
  className?: string;
}

export function SectionHeading({
  tag = "h2",
  children,
  sub = null,
  className = "",
}: SectionHeadingProps) {
  const Tag = tag;
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <Tag className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-texto leading-tight">
        {children}
      </Tag>
      {sub && (
        <p className="mt-3 text-texto-secundario font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
