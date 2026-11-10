import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden md:h-[560px] min-[1440px]:h-[650px]">
      <div className="relative z-10 px-5 pt-[98px] pb-16 md:max-w-[52%] md:px-8 md:pb-0 min-[1440px]:px-16">
        <p className="text-[10px] leading-[1.5] text-secondary">
          THE NEW SEASON / VOL. 01
        </p>

        <h1 className="mt-[34px] font-serif text-[52px] leading-[1.08] text-primary md:text-[66px] min-[1440px]:text-[104px]">
          Less, but
          <br />
          better.
        </h1>

        <p className="mt-[34px] text-[13px] leading-[1.5] text-secondary">
          A considered collection for the everyday.
          <br />
          Designed to stay, season after season.
        </p>

        <a
          href="#"
          className="mt-[52px] flex h-12 w-full max-w-[280px] items-center justify-center bg-primary text-[12px] leading-[1.5] font-medium text-inverse transition-opacity hover:opacity-85"
        >
          Explore the collection &nbsp;→
        </a>

        <p className="mt-[61px] text-[9px] leading-[1.5] whitespace-pre text-secondary max-md:hidden">
          {`01 / 03     —————     THE ART OF EVERYDAY`}
        </p>
      </div>

      <div
        role="img"
        aria-label="Campaign photograph"
        className="relative mt-12 aspect-[4/5] w-full bg-[#dcd7cd] md:absolute md:top-0 md:right-0 md:mt-0 md:h-full md:w-[46.875%] md:aspect-auto min-[1440px]:w-[52.5%]"
      />
    </section>
  );
}
