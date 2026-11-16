const STEPS = ['Confirmed', 'Prepared', 'In transit', 'Delivered'];

export function OrderTracker({ activeIndex }: { activeIndex: number }) {
  const pct = (activeIndex / (STEPS.length - 1)) * 100;
  return (
    <div className="relative mt-8">
      <div className="relative h-[2px] w-full bg-border">
        <div
          className="absolute inset-y-0 left-0 bg-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-[-5px] grid grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step}
            className={`flex flex-col ${i === STEPS.length - 1 ? 'items-end' : i === 0 ? 'items-start' : 'items-center'}`}
          >
            <span
              className={`size-[10px] rounded-full border ${i <= activeIndex ? 'border-primary bg-primary' : 'border-border bg-background'}`}
            />
            <span
              className={`mt-3 text-[11px] leading-[1.5] ${i <= activeIndex ? 'text-primary' : 'text-secondary'}`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
