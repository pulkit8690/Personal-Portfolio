export default function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12px] font-700 tracking-[0.25em] uppercase text-azure">
      <span className="h-px w-7 bg-gradient-to-r from-azure to-transparent" />
      {children}
    </span>
  );
}
