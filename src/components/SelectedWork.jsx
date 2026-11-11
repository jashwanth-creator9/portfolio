import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { maskReveal, parallax } from '@/lib/motion';
import { series } from '@/data/photography';
import SeriesCard from '@/components/SeriesCard';
import RevealText from '@/components/RevealText';

const layouts = [
  { span: 'md:col-span-7', aspect: 'aspect-[4/5]' },
  { span: 'md:col-span-4 md:col-start-9 md:mt-56', aspect: 'aspect-[3/4]' },
  { span: 'md:col-span-5 md:col-start-2 md:mt-12', aspect: 'aspect-[4/5]' },
  { span: 'md:col-span-5 md:col-start-8 md:mt-40', aspect: 'aspect-square' },
  { span: 'md:col-span-10 md:col-start-2', aspect: 'aspect-[16/8]' },
];

export default function SelectedWork() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-work-reveal]', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.utils.toArray('[data-series-card]').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' },
        });
        maskReveal(card.querySelector('[data-card-media]'), card, 'top 90%');
        parallax(card.querySelector('[data-card-parallax]'), card);
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="scroll-mt-20 bg-neutral-950 px-6 py-32 sm:px-10 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-work-reveal className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Selected Work
            </p>
            <RevealText
              text="Five collections, each told in its own light."
              className="mt-6 font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl"
            />
          </div>
          <p data-work-reveal className="leading-[1.5] text-neutral-300 lg:col-span-4 lg:col-start-9">
            Personal series made over the years, from city nights to quiet mornings. Choose a collection to step inside.
          </p>
        </header>

        <div className="mt-24 grid gap-x-8 gap-y-24 md:grid-cols-12 md:gap-y-32">
          {series.map((item, index) => {
            const layout = layouts[index % layouts.length];
            return (
              <SeriesCard
                key={item.id}
                series={item}
                className={layout.span}
                aspectClass={layout.aspect}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
