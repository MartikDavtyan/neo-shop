const PILLARS = [
  {
    n: '01',
    title: 'Made to last',
    body: 'Exceptional materials. Mindful craft.',
  },
  {
    n: '02',
    title: 'Delivered with care',
    body: 'Free shipping on orders $150+.',
  },
  { n: '03', title: 'Space to decide', body: 'Easy returns within 30 days.' },
];

export default function BrandPromise() {
  return (
    <section className="w-full px-5 md:px-8 min-[1440px]:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="h-px w-full bg-border" />
        <div className="grid grid-cols-1 gap-y-10 pt-[44px] pb-[52px] md:grid-cols-3 md:gap-x-0 md:pb-[52px]">
          {PILLARS.map((p) => (
            <div key={p.n} className="flex items-start gap-2 pr-4 md:pr-8">
              <span className="w-[35px] shrink-0 text-[11px] leading-[1.5] text-secondary">
                {p.n}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-[18px] leading-[1.08] text-primary">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[11px] leading-[1.5] text-secondary">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
