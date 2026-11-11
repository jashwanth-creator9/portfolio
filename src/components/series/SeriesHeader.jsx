import { useLayoutEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { gsap } from '@/lib/gsap';

export default function SeriesHeader({ series }) {
  const ref = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(imageRef.current, { scale: 1.2 }, { scale: 1.05, duration: 2.4, ease: 'power2.out' })
        .fromTo('[data-series-title]', { yPercent: 110 }, { yPercent: 0, duration: 1.2 }, 0.2)
        .fromTo('[data-series-fade]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, '-=0.9');

      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [series.id]);

  return (
    <header ref={ref} className="relative flex min-h-[85svh] items-end overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={series.cover.src}
          alt={series.cover.alt}
          fetchPriority="high"
          className="absolute -top-[15%] left-0 h-[130%] w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-10 lg:px-12 lg:pb-24">
        <a
          href="#work"
          data-series-fade
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-100 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" aria-hidden="true" />
          All collections
        </a>
        <p data-series-fade className="mt-12 font-display text-xl italic text-neutral-200">
          Collection {series.number}
        </p>
        <h1 className="mt-3 overflow-hidden break-words font-display text-[clamp(3rem,11vw,10rem)] font-light leading-[0.9] text-white">
          <span data-series-title className="block pb-2">
            {series.title}
          </span>
        </h1>
      </div>
    </header>
  );
}
