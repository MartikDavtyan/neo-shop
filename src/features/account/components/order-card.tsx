import Link from 'next/link';
import { ArrowRightIcon } from '@/common/components/icons';
import { Thumb } from './thumb';
import { OrderTracker } from './order-tracker';

interface OrderItem {
  label: string;
  className: string;
}

interface OrderCardProps {
  orderId: string;
  meta: string;
  status?: string;
  arriving?: string;
  activeIndex?: number;
  items: OrderItem[];
  isDelivered?: boolean;
}

export function OrderCard({
  orderId,
  meta,
  status,
  arriving,
  activeIndex,
  items,
  isDelivered = false,
}: OrderCardProps) {
  return (
    <article className="mt-6 border border-border bg-surface p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[10px] leading-[1.5] tracking-[0.06em] text-secondary">
            {orderId}
          </p>
          <p className="mt-1 text-[12px] leading-[1.5] text-primary">{meta}</p>
          {status && (
            <span className="mt-4 inline-flex h-[26px] items-center border border-primary px-3 text-[9px] tracking-[0.1em] text-primary">
              {status}
            </span>
          )}
        </div>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 border border-primary text-[12px] text-primary transition-colors hover:bg-primary hover:text-inverse md:w-[188px]"
        >
          {isDelivered ? (
            'Write a review'
          ) : (
            <>
              Track delivery <ArrowRightIcon className="size-4 -rotate-45" />
            </>
          )}
        </button>
      </div>

      {arriving && (
        <p className="mt-6 font-serif text-[24px] leading-[1.2] text-primary">
          {arriving}
        </p>
      )}

      {activeIndex !== undefined && <OrderTracker activeIndex={activeIndex} />}

      <div
        className={`mt-${isDelivered ? '6' : '8'} flex ${isDelivered ? 'gap-4' : 'gap-2'}`}
      >
        {items.map((item, idx) =>
          isDelivered ? (
            <div key={idx} className="flex gap-4">
              <Thumb label={item.label} className={item.className} />
              <div className="flex flex-col justify-center">
                <p className="text-[12px] font-medium leading-[1.5] text-primary">
                  {item.label}
                </p>
                <p className="text-[11px] leading-[1.5] text-secondary">
                  Ivory / M · Qty 1
                </p>
              </div>
            </div>
          ) : (
            <Thumb key={idx} label={item.label} className={item.className} />
          )
        )}
      </div>

      {isDelivered && (
        <Link
          href="#"
          className="mt-6 inline-block text-[12px] text-primary underline underline-offset-4"
        >
          View order details
        </Link>
      )}
    </article>
  );
}
