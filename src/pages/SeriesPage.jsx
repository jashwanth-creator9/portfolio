import { useEffect } from 'react';
import { series as allSeries } from '@/data/photography';
import SeriesHeader from '@/components/series/SeriesHeader';
import SeriesCaption from '@/components/series/SeriesCaption';
import SeriesGallery from '@/components/series/SeriesGallery';
import SeriesPagination from '@/components/series/SeriesPagination';
import ExploreButton from '@/components/ExploreButton';

export default function SeriesPage({ seriesId }) {
  const index = allSeries.findIndex((item) => item.id === seriesId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [seriesId]);

  if (index === -1) {
    return (
      <section className="flex min-h-[80svh] flex-col items-center justify-center gap-10 bg-neutral-950 px-6 text-center">
        <p className="font-display text-4xl font-light text-white sm:text-6xl">This collection could not be found.</p>
        <ExploreButton href="#work">Back to Selected Work</ExploreButton>
      </section>
    );
  }

  const current = allSeries[index];
  const previous = allSeries[(index - 1 + allSeries.length) % allSeries.length];
  const next = allSeries[(index + 1) % allSeries.length];

  return (
    <article className="bg-neutral-950">
      <SeriesHeader series={current} />
      <SeriesCaption series={current} />
      <SeriesGallery series={current} />
      <SeriesPagination previous={previous} next={next} />
    </article>
  );
}
