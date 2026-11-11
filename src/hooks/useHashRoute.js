import { useEffect, useState } from 'react';

function readRoute() {
  const match = window.location.hash.match(/^#\/series\/([\w-]+)$/);
  return match ? { name: 'series', seriesId: match[1] } : { name: 'home' };
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
