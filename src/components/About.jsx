import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { photographer } from '@/data/photography';
import ExploreButton from '@/components/ExploreButton';
import RevealText from '@/components/RevealText';

const interests = photographer.about.interests;

export default function About() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const trigger = { trigger: ref.current, start: 'top 70%' };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-about-image]',
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: trigger },
      );
      gsap.fromTo(
        '[data-about-image] img',
        { scale: 1.25 },
        { scale: 1, duration: 2, ease: 'power2.out', scrollTrigger: trigger },
      );
      gsap.fromTo(
        '[data-about-image] img',
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
      gsap.from('[data-about-text]', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="scroll-mt-20 bg-neutral-950 px-6 py-32 sm:px-10 lg:px-12 lg:py-44">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-12 lg:gap-20">
        <figure data-about-image className="mx-auto w-full max-w-md sm:max-w-lg lg:sticky lg:top-32 lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
            <img
              src={photographer.portrait.src}
              alt={photographer.portrait.alt}
              loading="lazy"
              decoding="async"
              className="absolute -top-[8%] h-[116%] w-full object-cover"
            />
          </div>
          <figcaption className="mt-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
            Behind the lens
          </figcaption>
        </figure>

        <div className="mx-auto w-full max-w-3xl lg:col-start-7 lg:col-span-6 lg:max-w-none">
          <p data-about-text className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            About the photographer
          </p>
          <RevealText
            text={photographer.name}
            className="mt-6 font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl"
          />
          <p data-about-text className="mt-8 text-lg leading-[1.5] text-neutral-200">
            {photographer.about.biography}
          </p>

          <div className="mt-14 space-y-12 border-t border-white/10 pt-12">
            <div data-about-text>
              <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400">The journey</h3>
              <p className="mt-4 leading-[1.5] text-neutral-300">{photographer.about.journey}</p>
            </div>

            <div data-about-text>
              <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400">Philosophy</h3>
              <blockquote className="mt-4 font-display text-2xl italic leading-snug text-white sm:text-3xl">
                &ldquo;{photographer.about.philosophy}&rdquo;
              </blockquote>
            </div>

            <div data-about-text>
              <h3 className="text-xs uppercase tracking-[0.35em] text-neutral-400">Areas of interest</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-200 transition-colors duration-300 hover:border-white/60 hover:text-white"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-[1.5] text-neutral-300">{photographer.about.style}</p>
            </div>
          </div>

          <div data-about-text className="mt-14">
            <ExploreButton href={photographer.instagram.url} external>
              Follow on Instagram
            </ExploreButton>
          </div>
        </div>
      </div>
    </section>
  );
}
