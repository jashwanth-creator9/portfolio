import ExploreButton from '@/components/ExploreButton';

export default function SeriesCard({ series, className = '', aspectClass = 'aspect-[4/5]' }) {
  const meta = [series.date, series.location].filter(Boolean).join('  /  ');

  return (
    <a
      href={`#/series/${series.id}`}
      data-series-card
      aria-label={`Explore the ${series.title} collection`}
      className={`group block ${className}`}
    >
      <div data-card-media className={`relative overflow-hidden bg-neutral-900 ${aspectClass}`}>
        <div data-card-parallax className="absolute -top-[10%] h-[120%] w-full">
          <img
            src={series.cover.src}
            alt={series.cover.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/15 to-transparent transition-opacity duration-700"
          aria-hidden="true"
        />
        <div
          className="absolute inset-3 border border-white/0 transition-all duration-700 group-hover:inset-5 group-hover:border-white/30"
          aria-hidden="true"
        />
        <span className="absolute left-6 top-4 font-display text-6xl font-light text-white/85 transition-transform duration-700 group-hover:translate-x-1 sm:text-7xl">
          {series.number}
        </span>
        <span className="absolute bottom-5 left-6 right-6 translate-y-2 text-[11px] uppercase tracking-[0.25em] text-neutral-200 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          {series.images.length} photographs
        </span>
      </div>

      <div className="mt-6">
        {meta && <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">{meta}</p>}
        <h3 className="mt-3 font-display text-3xl font-light text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
          {series.title}
        </h3>
        <p className="mt-3 max-w-md leading-[1.5] text-neutral-300">{series.shortDescription}</p>
      </div>

      <div className="mt-6">
        <ExploreButton>Explore Collection</ExploreButton>
      </div>
    </a>
  );
}
