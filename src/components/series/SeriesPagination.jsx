import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SeriesPagination({ previous, next }) {
  return (
    <nav aria-label="Collection navigation" className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <a
          href={`#/series/${previous.id}`}
          className="group flex flex-col items-start gap-5 px-6 py-16 transition-colors duration-500 hover:bg-white/[0.03] sm:px-10 md:border-r md:border-white/10 lg:px-12"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-300">
            <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" aria-hidden="true" />
            Previous collection
          </span>
          <span className="font-display text-4xl font-light text-white transition-transform duration-500 group-hover:-translate-x-2 sm:text-6xl">
            {previous.title}
          </span>
        </a>

        <a
          href={`#/series/${next.id}`}
          className="group flex flex-col items-start gap-5 px-6 py-16 transition-colors duration-500 hover:bg-white/[0.03] sm:px-10 md:items-end md:text-right lg:px-12"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-300">
            Next collection
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
          </span>
          <span className="font-display text-4xl font-light text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
            {next.title}
          </span>
        </a>
      </div>
    </nav>
  );
}
