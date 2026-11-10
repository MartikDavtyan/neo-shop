'use client';

import { ArrowRightIcon } from '@/common/components/icons';

export function NewsletterForm() {
  return (
    <form
      className="mt-8 flex w-full max-w-[380px] items-center justify-between border-b border-border pb-[17px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email address"
        className="w-full bg-transparent text-[12px] leading-[1.5] text-primary placeholder:text-secondary focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="ml-3 flex size-5 shrink-0 items-center justify-center text-primary transition-opacity hover:opacity-60"
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </form>
  );
}
