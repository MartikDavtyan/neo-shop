import Hero from '@/features/home/components/hero';
import Categories from '@/features/home/components/categories';
import Products from '@/features/home/components/products';
import Brand from '@/features/home/components/brand-promise';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Categories />
      <Products />
      <Brand />
    </main>
  );
}
