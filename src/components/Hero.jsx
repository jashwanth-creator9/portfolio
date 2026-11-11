import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { photographer } from '@/data/photography';
import { ChevronDown } from 'lucide-react';
import ExploreButton from '@/components/ExploreButton';

export default function Hero({ ready }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!ready) return undefined;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(
          '[data-hero-frame]',
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power4.inOut' },
        )
        .fromTo(imageRef.current, { scale: 1.2 }, { scale: 1.05, duration: 2.4, ease: 'power2.out' }, 0)
        .fromTo('[data-hero-line]', { yPercent: 110 }, { yPercent: 0, duration: 1.2, stagger: 0.12 }, '-=1.1')
        .fromTo('[data-hero-fade]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, '-=0.8');

      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(contentRef.current, {
        yPercent: -25,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '70% top', scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-neutral-950"
    >
      <div data-hero-frame className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={photographer.heroImage.src}
          alt={photographer.heroImage.alt}
          fetchPriority="high"
          className="absolute -top-[15%] left-0 h-[130%] w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/20"
        aria-hidden="true"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 pt-40 sm:px-10 lg:px-12 lg:pb-36"
      >
        <p data-hero-fade className="text-xs uppercase tracking-[0.3em] text-neutral-200 sm:text-sm">
          {photographer.roles}
        </p>
        <h1 className="mt-6 font-display text-[clamp(4.5rem,15vw,12rem)] font-light leading-[0.88] tracking-tight text-white">
          <span className="block overflow-hidden pb-2">
            <span data-hero-line className="block">
              Julian
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span data-hero-line className="block pl-[12%]">
              Vale
            </span>
          </span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p data-hero-fade className="font-display text-2xl italic text-neutral-100 sm:text-3xl">
            {photographer.tagline}
          </p>
          <div data-hero-fade>
            <ExploreButton href="#work">Explore My Work</ExploreButton>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the about section"
        className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-neutral-200 transition-colors hover:text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/25">
          <span className="absolute inset-x-0 top-0 block h-1/2 animate-scroll-line bg-white" />
        </span>
        <ChevronDown className="h-4 w-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      </a>
    </section>
  );
}
