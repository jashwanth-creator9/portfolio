import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { photographer } from '@/data/photography';

export default function Preloader({ onComplete }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete })
        .fromTo('[data-loader-name]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
        .fromTo('[data-loader-bar]', { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, '-=0.4')
        .to('[data-loader-content]', { opacity: 0, y: -16, duration: 0.5, ease: 'power2.in' }, '+=0.2')
        .to(ref.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' });
    }, ref);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950"
    >
      <div data-loader-content className="flex flex-col items-center gap-8">
        <p data-loader-name className="font-display text-4xl font-light tracking-wide text-white sm:text-6xl">
          {photographer.name}
        </p>
        <span className="block h-px w-48 overflow-hidden bg-white/15">
          <span data-loader-bar className="block h-full w-full origin-left bg-white" />
        </span>
      </div>
    </div>
  );
}
