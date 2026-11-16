export function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-[13px] text-[12px] leading-[1.5] text-primary">
      <span className="size-[14px] shrink-0 border border-primary" />
      {label}
    </label>
  );
}
