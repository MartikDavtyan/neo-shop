import Link from 'next/link';
import ProductCard, { type Product } from '@/common/components/product-card';
import { ArrowRightIcon } from '@/common/components/icons';

interface WishlistSectionProps {
  products: Product[];
}

export function WishlistSection({ products }: WishlistSectionProps) {
  return (
    <section className="px-5 pb-12 md:px-8 min-[1440px]:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-border pt-[39px]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-[36px] leading-[1.08] text-primary md:text-[40px] min-[1440px]:text-[43px]">
              Wishlist
            </h2>
            <p className="mt-2.5 text-[12px] leading-[1.5] text-secondary">
              Made for the way you live.
            </p>
          </div>
          <Link
            href="/catalog"
            className="mt-[20px] flex items-center gap-2 text-[11px] leading-[1.5] whitespace-nowrap text-primary"
          >
            View all arrivals <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="mt-[25px] grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={`${p.name}-${i}`} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
