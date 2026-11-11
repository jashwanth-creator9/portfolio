import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/motion';

export default function RevealText({ text, as: Tag = 'h2', className = '' }) {
  const ref = useRef(null);
  const words = text.split(' ');

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-word]', {
        yPercent: 110,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.12em] align-top" aria-hidden="true">
          <span data-word className="inline-block">
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  );
}
