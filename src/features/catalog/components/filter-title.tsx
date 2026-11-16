export function FilterTitle({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-between text-[11px] leading-[1.5] font-medium tracking-[0.06em] text-primary">
      <span>{children}</span>
      <span aria-hidden>−</span>
    </div>
  );
}
