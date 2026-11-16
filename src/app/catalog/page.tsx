import { type Product } from '@/common/components/product-card';
import { CatalogFilters } from '@/features/catalog/components/catalog-filters';
import { CatalogGrid } from '@/features/catalog/components/catalog-grid';

const RATING = '★★★★★   4.9 (28)';

const PRODUCTS: Product[] = [
  {
    name: 'The double-face coat',
    price: '$380',
    colors: 'Oatmeal · 3 colors',
    exclusive: true,
    rating: RATING,
  },
  {
    name: 'Essential cashmere knit',
    price: '$160',
    colors: 'Ivory · 4 colors',
    rating: RATING,
  },
  {
    name: 'The tailored trouser',
    price: '$190',
    colors: 'Charcoal · 2 colors',
    rating: RATING,
  },
  {
    name: 'Sculpted leather tote',
    price: '$240',
    colors: 'Espresso · 2 colors',
    rating: RATING,
  },
  {
    name: 'The double-face coat',
    price: '$380',
    colors: 'Oatmeal · 3 colors',
    exclusive: true,
    rating: RATING,
  },
  {
    name: 'Essential cashmere knit',
    price: '$160',
    colors: 'Ivory · 4 colors',
    rating: RATING,
  },
];

export default function CatalogPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <section className="px-5 pt-6 pb-[52px] md:px-8 min-[1440px]:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] leading-[1.5] text-secondary">
            HOME / THE COLLECTION
          </p>
          <h1 className="mt-4 font-serif text-[44px] leading-[1.08] text-primary md:text-[52px] min-[1440px]:text-[66px]">
            Considered essentials
          </h1>
          <p className="mt-[18px] text-[13px] leading-[1.5] text-secondary">
            Timeless silhouettes. Exceptional materials. Nothing more than
            needed.
          </p>
          <div className="mt-[30px] flex items-center justify-between">
            <p className="text-[11px] leading-[1.5] text-primary">24 pieces</p>
            <div className="flex w-full gap-3 min-[1440px]:hidden">
              <button
                type="button"
                className="h-12 flex-1 border border-border px-3 text-left text-[12px] text-primary md:flex-none md:w-[346px]"
              >
                Filters (2) &nbsp;+
              </button>
              <button
                type="button"
                className="h-12 flex-1 border border-border px-3 text-left text-[12px] text-primary md:flex-none md:w-[346px]"
              >
                Featured &nbsp;↓
              </button>
            </div>
            <button
              type="button"
              className="hidden h-12 w-48 items-center justify-between border border-border px-3 text-[12px] text-primary min-[1440px]:flex"
            >
              <span>Sort: Featured</span>
              <span>↓</span>
            </button>
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 md:px-8 min-[1440px]:px-16">
        <div className="mx-auto flex max-w-[1440px] gap-[62px]">
          <CatalogFilters />
          <CatalogGrid products={PRODUCTS} />
        </div>
      </section>
    </main>
  );
}
