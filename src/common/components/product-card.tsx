import Link from 'next/link';
import { HeartIcon } from './icons';

export type Product = {
  name: string;
  price: string;
  colors: string;
  exclusive?: boolean;
  rating?: string;
};

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <article className={`relative w-full ${className ?? ''}`}>
      <Link
        href="/product"
        aria-label={product.name}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-[#dcd7cd]"
      >
        {product.exclusive && (
          <span className="absolute top-3 left-3 flex h-[26px] w-[82px] items-center justify-center bg-[#f8f8f6] text-[9px] leading-none tracking-[0.04em] text-[#111111]">
            EXCLUSIVE
          </span>
        )}
      </Link>

      <button
        type="button"
        aria-label={`Save ${product.name} to wishlist`}
        className="absolute top-[14px] right-3 flex size-6 items-center justify-center text-primary transition-opacity hover:opacity-60"
      >
        <HeartIcon className="size-6" />
      </button>

      <div className="mt-[13px] flex items-start justify-between gap-3 text-[12px] leading-[1.5] text-primary">
        <h3 className="font-medium">{product.name}</h3>
        <span>{product.price}</span>
      </div>

      <p className="mt-[7px] text-[11px] leading-[1.5] text-secondary">
        {product.colors}
      </p>

      <div className="mt-[6px] flex items-center justify-between text-[10px] leading-[1.5] text-secondary">
        <span>{product.rating ?? '★★★★★  4.9'}</span>
        <button
          type="button"
          className="text-[11px] text-primary transition-opacity hover:opacity-60"
        >
          + Add
        </button>
      </div>
    </article>
  );
}
