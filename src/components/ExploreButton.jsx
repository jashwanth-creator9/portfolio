import { ArrowRight } from 'lucide-react';

export default function ExploreButton({ href, external = false, children, className = '' }) {
  const Tag = href ? 'a' : 'span';
  const linkProps = href
    ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : {};

  return (
    <Tag
      {...linkProps}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/40 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors duration-500 hover:border-white ${className}`}
    >
      <span
        className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0"
        aria-hidden="true"
      />
      <span className="relative transition-colors duration-500 group-hover:text-neutral-950">{children}</span>
      <ArrowRight
        className="relative h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-neutral-950"
        aria-hidden="true"
      />
    </Tag>
  );
}
