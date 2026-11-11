import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import Lightbox from '@/components/series/Lightbox';

const spanPattern = [
  'col-span-2 row-span-2',
  'row-span-1',
  'row-span-1',
  'row-span-2',
  'row-span-1',
  'row-span-1',
];

export default function SeriesGallery({ series }) {
  const { images, title } = series;
  const count = images.length;
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + count) % count), [count]);
  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % count), [count]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-gallery-item]',
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [series.id]);

  return (
    <section ref={ref} aria-label="Photographs" className="mx-auto max-w-7xl px-6 pb-32 sm:px-10 lg:px-12">
      <div className="grid auto-rows-[160px] grid-cols-2 grid-flow-dense gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-3 lg:gap-6">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            data-gallery-item
            onClick={() => setActiveIndex(index)}
            aria-label={`Open photograph ${index + 1} of ${count}: ${image.alt}`}
            className={`group relative block overflow-hidden bg-neutral-900 text-left ${spanPattern[index % spanPattern.length]}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="font-display text-2xl font-light text-white">{String(index + 1).padStart(2, '0')}</span>
              <Maximize2 className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          seriesTitle={title}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
