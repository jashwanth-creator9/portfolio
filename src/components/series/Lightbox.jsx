import { useEffect, useLayoutEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const SWIPE_THRESHOLD = 50;

export default function Lightbox({ images, index, seriesTitle, onClose, onPrev, onNext }) {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const image = images[index];
  const total = images.length;

  useLayoutEffect(() => {
    const tween = gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    return () => tween.kill();
  }, []);

  useLayoutEffect(() => {
    const tween = gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
    );
    return () => tween.kill();
  }, [index]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    [index - 1, index + 1].forEach((neighbour) => {
      const src = images[(neighbour + total) % total].src;
      new Image().src = src;
    });
  }, [index, images, total]);

  const handleTouchEnd = (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) onNext();
    else onPrev();
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${seriesTitle}, photograph ${index + 1} of ${total}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-[100] flex flex-col bg-neutral-950/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-10">
        <p className="flex min-w-0 items-baseline gap-4 text-xs uppercase tracking-[0.3em] text-neutral-300">
          <span className="truncate">{seriesTitle}</span>
          <span className="shrink-0 font-display text-lg tracking-normal text-white">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="rounded-full border border-white/25 p-3 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-6 sm:px-24 sm:pb-8">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous photograph"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 p-3 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        <img
          key={image.src}
          ref={imageRef}
          src={image.src}
          alt={image.alt}
          className="max-h-[72svh] max-w-full object-contain shadow-2xl sm:max-h-[78vh]"
        />

        <button
          type="button"
          onClick={onNext}
          aria-label="Next photograph"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 p-3 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
