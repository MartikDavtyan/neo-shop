import ProductCard, { type Product } from '@/common/components/product-card';

interface CatalogGridProps {
  products: Product[];
}

export function CatalogGrid({ products }: CatalogGridProps) {
  return (
    <div className="min-w-0 flex-1">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 min-[1440px]:grid-cols-3 min-[1440px]:gap-y-6">
        {products.map((product, i) => (
          <ProductCard key={`${product.name}-${i}`} product={product} />
        ))}
      </div>

      <p className="mt-[27px] text-center text-[11px] leading-[1.5] text-secondary">
        Showing 6 of 24 pieces
      </p>
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          className="h-12 w-[220px] border border-primary text-[12px] font-medium text-primary transition-colors hover:bg-primary hover:text-inverse"
        >
          Load more pieces
        </button>
      </div>
    </div>
  );
}
