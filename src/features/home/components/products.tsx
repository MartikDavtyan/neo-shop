import Link from 'next/link';
import ProductCard, { type Product } from '@/common/components/product-card';

const PRODUCTS: Product[] = [
  {
    name: 'The double-face coat',
    price: '$380',
    colors: 'Oatmeal · 3 colors',
    exclusive: true,
  },
  {
    name: 'Essential cashmere knit',
    price: '$160',
    colors: 'Ivory · 4 colors',
  },
  {
    name: 'The tailored trouser',
    price: '$190',
    colors: 'Charcoal · 2 colors',
  },
  {
    name: 'Sculpted leather tote',
    price: '$240',
    colors: 'Espresso · 2 colors',
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full px-5 pt-[39px] pb-12 md:px-8 min-[1440px]:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-[36px] leading-[1.08] text-primary md:text-[40px] min-[1440px]:text-[43px]">
              New &amp; noteworthy
            </h2>
            <p className="mt-2.5 text-[12px] leading-[1.5] text-secondary">
              Made for the way you live.
            </p>
          </div>
          <Link
            href="#"
            className="mt-[20px] text-[11px] leading-[1.5] whitespace-nowrap text-primary transition-opacity hover:opacity-60"
          >
            View all arrivals &nbsp;→
          </Link>
        </div>

        <div className="mt-[25px] grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-6 min-[1440px]:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              className={i === 3 ? 'hidden min-[1440px]:block' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
