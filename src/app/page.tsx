import Hero from '@/features/home/components/hero';
import Categories from '@/features/home/components/categories';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Categories />
    </main>
  );
}
