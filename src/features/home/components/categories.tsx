import Link from 'next/link';

const CATEGORIES = ['Outerwear', 'Knitwear', 'Accessories'];

export default function Categories() {
  return (
    <section className="w-full px-5 pt-12 pb-[52px] md:px-8 min-[1440px]:px-16">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-serif text-[36px] leading-[1.08] text-primary md:text-[40px] min-[1440px]:text-[43px]">
          The considered edit
        </h2>
        <p className="mt-2 text-[12px] leading-[1.5] text-secondary">
          Fewer, better things. Find your everyday essentials.
        </p>

        <div className="mt-[29px] grid grid-cols-1 gap-6 md:grid-cols-3">
          {CATEGORIES.map((label) => (
            <Link
              key={label}
              href="#"
              className="group relative block h-[300px] overflow-hidden bg-[#dcd7cd] md:h-[250px] min-[1440px]:h-[350px]"
            >
              <span className="absolute inset-x-0 bottom-0 flex h-[42px] items-center bg-surface px-[14px] text-[12px] leading-[1.5] text-primary">
                {label} &nbsp;↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
