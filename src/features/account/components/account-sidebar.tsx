import Link from 'next/link';

const NAV = ['Orders', 'Wishlist (4)', 'Personal details', 'Addresses'];

export function AccountSidebar() {
  return (
    <nav aria-label="Account" className="min-[1440px]:pt-0">
      <p className="text-[10px] leading-[1.5] tracking-[0.06em] text-secondary">
        MY ACCOUNT
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-4 text-[13px] leading-[1.5] text-primary min-[1440px]:mt-6 min-[1440px]:block min-[1440px]:space-y-4 min-[1440px]:border-0 min-[1440px]:pb-0">
        {NAV.map((item, i) => (
          <li key={item}>
            <Link
              href="#"
              className={
                i === 0
                  ? 'font-medium underline underline-offset-4'
                  : 'text-secondary transition-colors hover:text-primary'
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
