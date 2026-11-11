import { useLayoutEffect, useEffect, useCallback, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import SeriesPage from '@/pages/SeriesPage';
import { useHashRoute } from '@/hooks/useHashRoute';
import { usePageLinks } from '@/hooks/usePageLinks';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function App() {
  const route = useHashRoute();
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);
  const mainRef = useRef(null);
  const curtainRef = useRef(null);
  const pageKey = route.name === 'series' ? `series-${route.seriesId}` : 'home';

  usePageLinks(curtainRef);

  useLayoutEffect(() => {
    const tween = gsap.fromTo(
      mainRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'opacity' },
    );
    ScrollTrigger.refresh();
    return () => tween.kill();
  }, [pageKey]);

  useEffect(() => {
    if (loaded) ScrollTrigger.refresh();
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onComplete={handleLoaded} />}
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[150] bg-neutral-900"
        style={{ transform: 'scaleY(0)' }}
      />
      <Navbar />
      <main key={pageKey} ref={mainRef}>
        {route.name === 'series' ? (
          <SeriesPage seriesId={route.seriesId} />
        ) : (
          <HomePage ready={loaded} />
        )}
      </main>
      <Footer />
    </>
  );
}
