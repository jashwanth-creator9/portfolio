import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { photographer } from '@/data/photography';
import RevealText from '@/components/RevealText';

const contactLinks = [
  {
    label: 'Email',
    value: photographer.email,
    href: `mailto:${photographer.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Instagram',
    value: `@${photographer.instagram.handle}`,
    href: photographer.instagram.url,
    icon: Instagram,
    external: true,
  },
  {
    label: 'WhatsApp',
    value: 'Send a message',
    href: photographer.whatsapp.url,
    icon: MessageCircle,
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-contact-row]', {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
      gsap.from('[data-contact-closing]', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 border-t border-white/10 bg-neutral-950 px-6 py-32 sm:px-10 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Contact</p>
        <RevealText
          text="Let’s Connect"
          className="mt-6 font-display text-6xl font-light leading-none text-white sm:text-8xl lg:text-9xl"
        />

        <ul className="mt-20 border-b border-white/10">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label} data-contact-row className="border-t border-white/10">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between gap-4 py-7 transition-colors duration-500 hover:text-white sm:gap-6 sm:py-10"
              >
                <span className="flex min-w-0 shrink-0 items-center gap-4 sm:gap-5">
                  <Icon className="h-5 w-5 text-neutral-400 transition-colors duration-500 group-hover:text-white" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">{label}</span>
                </span>
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="min-w-0 break-words font-display text-xl font-light text-neutral-100 transition-transform duration-500 group-hover:-translate-x-2 sm:text-3xl lg:text-4xl">
                    {value}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-neutral-400 sm:h-6 sm:w-6 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p data-contact-closing className="mt-16 max-w-2xl font-display text-2xl italic leading-snug text-neutral-200 sm:text-3xl">

          Thank you for looking. If a frame stayed with you, I would love to hear what it stirred.
        </p>
      </div>
    </section>
  );
}
