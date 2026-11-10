import Link from 'next/link';
import { BagIcon, SearchIcon, UserIcon } from '@/common/components/icons';
import ThemeToggle from '@/common/components/theme-toggle';

const NAV = [
  { label: 'New arrivals', href: '/catalog' },
  { label: 'Women', href: '/catalog' },
  { label: 'Men', href: '/catalog' },
  { label: 'The edit', href: '/' },
  { label: 'Our story', href: '/' },
];

export function Header() {
  return (
    <header className="relative h-[154px] w-full bg-background">
      <div className="absolute inset-x-0 top-0 flex h-[30px] items-center justify-center bg-announcement text-[10px] leading-[1.5] text-primary">
        Considered essentials. Complimentary shipping over $150.
      </div>

      <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-[1440px]">
        <Link
          href="/"
          className="absolute top-[49px] left-5 text-[29px] leading-[1.5] font-medium text-primary md:left-8 min-[1440px]:left-16"
        >
          NEO-THREADS
        </Link>

        <div className="absolute top-[54px] right-5 flex items-center md:right-8 min-[1440px]:right-16">
          <div className="mr-6 hidden items-center gap-2 text-[12px] text-secondary lg:flex">
            <SearchIcon className="size-6 text-primary" />
            <span className="w-[220px] leading-[1.5]">
              Search timeless essentials
            </span>
          </div>
          <ThemeToggle />
          <Link
            href="/account"
            aria-label="Account"
            className="ml-5 flex size-6 items-center justify-center text-primary transition-opacity hover:opacity-60"
          >
            <UserIcon className="size-6" />
          </Link>
          <Link
            href="/checkout"
            aria-label="Bag"
            className="ml-10 flex size-6 items-center justify-center text-primary transition-opacity hover:opacity-60"
          >
            <BagIcon className="size-6" />
          </Link>
        </div>

        <nav className="absolute inset-x-0 top-[113px] flex flex-wrap justify-center gap-x-[23px] text-[12px] leading-[1.5] text-primary max-md:gap-x-4">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute inset-x-0 top-[153px] h-px bg-border" />
    </header>
  );
}
