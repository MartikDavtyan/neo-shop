export function Thumb({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-[#dcd7cd] ${className}`}
    />
  );
}
