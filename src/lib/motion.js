import { gsap } from '@/lib/gsap';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function smoothScrollTo(element) {
  gsap.to(window, {
    duration: prefersReducedMotion() ? 0 : 1.4,
    ease: 'power3.inOut',
    scrollTo: element ? { y: element, offsetY: 80 } : 0,
    overwrite: true,
  });
}

export function maskReveal(target, trigger, start = 'top 85%') {
  return gsap.fromTo(
    target,
    { clipPath: 'inset(0% 0% 100% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.4,
      ease: 'power4.inOut',
      scrollTrigger: { trigger, start },
    },
  );
}

export function parallax(target, trigger, distance = 6) {
  if (prefersReducedMotion()) return null;
  return gsap.fromTo(
    target,
    { yPercent: -distance },
    {
      yPercent: distance,
      ease: 'none',
      scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
    },
  );
}

export function runCurtain(curtain, swap) {
  const speed = prefersReducedMotion() ? 0.01 : 1;
  return new Promise((resolve) => {
    gsap
      .timeline({ onComplete: resolve })
      .fromTo(
        curtain,
        { transformOrigin: '50% 100%', scaleY: 0 },
        { scaleY: 1, duration: 0.7 * speed, ease: 'power4.inOut' },
      )
      .call(swap)
      .fromTo(
        curtain,
        { transformOrigin: '50% 0%' },
        { scaleY: 0, duration: 0.9 * speed, ease: 'power4.inOut' },
        '+=0.05',
      );
  });
}
