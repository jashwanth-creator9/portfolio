import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWork from '@/components/SelectedWork';
import Contact from '@/components/Contact';
import { smoothScrollTo } from '@/lib/motion';

export default function HomePage({ ready }) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !hash.startsWith('#/')) {
      smoothScrollTo(document.getElementById(hash.slice(1)));
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <Hero ready={ready} />
      <About />
      <SelectedWork />
      <Contact />
    </>
  );
}
