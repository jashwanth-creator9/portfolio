import { useLayoutEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import RevealText from '@/components/RevealText';

export default function SeriesCaption({ series }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-caption-item]', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);

    return () => ctx.revert();
  }, [series.id]);

  return (
    <section ref={ref} className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12 lg:px-12 lg:py-32">
      {(series.date || series.location) && (
        <div data-caption-item className="space-y-5 text-sm text-neutral-300 lg:col-span-4">
          {series.date && (
            <p className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-neutral-400" aria-hidden="true" />
              {series.date}
            </p>
          )}
          {series.location && (
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-neutral-400" aria-hidden="true" />
              {series.location}
            </p>
          )}
        </div>
      )}

      <div data-caption-item className="lg:col-span-7 lg:col-start-6">
        <RevealText
          as="p"
          text={series.shortDescription}
          className="font-display text-3xl font-light italic leading-snug text-white sm:text-4xl"
        />
        <p className="mt-8 text-lg leading-[1.5] text-neutral-300">{series.description}</p>
      </div>
    </section>
  );
}
