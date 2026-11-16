import { Checkbox } from './checkbox';
import { FilterTitle } from './filter-title';

const CATEGORY = [
  'All essentials  (24)',
  'Outerwear  (6)',
  'Knitwear  (8)',
  'Trousers  (6)',
  'Accessories  (4)',
];
const COLOR = ['Oatmeal', 'Ivory', 'Charcoal', 'Espresso'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export function CatalogFilters() {
  return (
    <aside className="hidden w-[210px] shrink-0 min-[1440px]:block">
      <p className="text-[10px] leading-[1.5] tracking-[0.06em] text-secondary">
        FILTER BY
      </p>

      <div className="mt-[30px] space-y-4">
        <FilterTitle>Category</FilterTitle>
        {CATEGORY.map((c) => (
          <Checkbox key={c} label={c} />
        ))}
      </div>

      <div className="mt-[34px] border-t border-border pt-[31px]">
        <FilterTitle>Size</FilterTitle>
        <div className="mt-[18px] grid grid-cols-5 gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              className="flex size-10 items-center justify-center border border-border text-[12px] text-primary transition-colors hover:border-primary"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-[34px] border-t border-border pt-[31px]">
        <FilterTitle>Color</FilterTitle>
        <div className="mt-4 space-y-4">
          {COLOR.map((c) => (
            <Checkbox key={c} label={c} />
          ))}
        </div>
      </div>

      <div className="mt-[34px] border-t border-border pt-[31px]">
        <FilterTitle>Price</FilterTitle>
        <div className="mt-4">
          <Checkbox label="$0 — $500" />
        </div>
      </div>

      <div className="mt-[31px] border-t border-border pt-[31px]">
        <button
          type="button"
          className="text-[12px] text-primary underline underline-offset-4"
        >
          Clear all filters
        </button>
      </div>
    </aside>
  );
}
