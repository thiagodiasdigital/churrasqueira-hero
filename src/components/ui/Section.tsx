interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  mesh?: boolean;
  sda?: string;
}

export function Section({
  children,
  id,
  className = "",
  mesh = false,
  sda = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 ${mesh ? "bg-mesh" : ""} ${className}`}
    >
      <div className={`max-w-6xl mx-auto ${sda}`}>
        {children}
      </div>
    </section>
  );
}
