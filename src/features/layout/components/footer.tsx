import Link from 'next/link';
import { NewsletterForm } from './newsletter-form';

const CLIENT_SERVICES = [
  'Contact us',
  'Shipping & returns',
  'Size & fit guide',
  'Care advice',
];
const BRAND = ['Our philosophy', 'Materials & makers', 'Journal', 'Instagram'];

export function SiteFooter() {
  return (
    <footer className="w-full bg-footer px-5 pt-[35px] pb-[29px] md:px-8 min-[1440px]:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-[440px]">
            <h2 className="font-serif text-[30px] leading-[1.08] text-primary md:text-[34px]">
              A considered wardrobe.
              <br />A quieter kind of luxury.
            </h2>
            <p className="mt-[23px] text-[12px] leading-[1.5] text-secondary">
              Join the inner circle for new collections and thoughtful stories.
            </p>

            <NewsletterForm />
          </div>

          <div className="flex gap-12 md:gap-[50px] md:pr-[26px]">
            <div className="w-[190px]">
              <h3 className="text-[10px] leading-[1.5] font-medium tracking-[0.06em] text-primary">
                CLIENT SERVICES
              </h3>
              <ul className="mt-[19px] space-y-0 text-[12px] leading-[1.5] text-secondary">
                {CLIENT_SERVICES.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[190px]">
              <h3 className="text-[10px] leading-[1.5] font-medium tracking-[0.06em] text-primary">
                NEO-THREADS
              </h3>
              <ul className="mt-[19px] space-y-0 text-[12px] leading-[1.5] text-secondary">
                {BRAND.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-primary"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[34px] h-px w-full bg-border" />

        <div className="mt-[19px] flex flex-col gap-3 text-[10px] leading-[1.5] text-secondary md:flex-row md:justify-between">
          <span>© 2026 NEO-THREADS</span>
          <span className="flex gap-6 whitespace-nowrap">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <span>United States · USD $</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
