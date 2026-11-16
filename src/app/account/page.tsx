import { type Product } from '@/common/components/product-card';
import { AccountSidebar } from '@/features/account/components/account-sidebar';
import { OrderCard } from '@/features/account/components/order-card';
import { WishlistSection } from '@/features/account/components/wishlist-section';

const WISHLIST: Product[] = [
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
];

export default function AccountPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <section className="px-5 pt-8 pb-[60px] md:px-8 min-[1440px]:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] leading-[1.5] tracking-[0.06em] text-secondary">
            YOUR PERSONAL EDIT
          </p>
          <h1 className="mt-4 font-serif text-[44px] leading-[1.08] text-primary md:text-[52px] min-[1440px]:text-[66px]">
            Welcome back, Maya.
          </h1>
          <p className="mt-3 text-[13px] leading-[1.5] text-secondary">
            A wardrobe that feels like you.
          </p>

          <div className="mt-[52px] flex flex-col gap-12 min-[1440px]:grid min-[1440px]:grid-cols-[215px_1fr] min-[1440px]:gap-[77px]">
            <AccountSidebar />
            <div className="min-w-0">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="font-serif text-[36px] leading-[1.08] text-primary md:text-[40px] min-[1440px]:text-[40px]">
                    Your orders
                  </h2>
                  <p className="mt-2 text-[12px] leading-[1.5] text-secondary">
                    2 orders
                  </p>
                </div>
              </div>
              <OrderCard
                orderId="ORDER #NT10248"
                meta="Placed Nov 5, 2026 · 2 pieces · $583.20"
                status="IN TRANSIT"
                arriving="Arriving November 10–12"
                activeIndex={2}
                items={[
                  {
                    label: 'The double-face coat',
                    className: 'h-[74px] w-[57px]',
                  },
                  {
                    label: 'Essential cashmere knit',
                    className: 'h-[74px] w-[57px]',
                  },
                ]}
              />
              <OrderCard
                orderId="ORDER #NT09921"
                meta="Delivered Oct 18, 2026 · $172.80"
                isDelivered={true}
                items={[
                  {
                    label: 'Essential cashmere knit',
                    className: 'h-24 w-[75px] shrink-0',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <WishlistSection products={WISHLIST} />
    </main>
  );
}
