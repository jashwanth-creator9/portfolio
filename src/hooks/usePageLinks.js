import { useEffect } from 'react';
import { runCurtain, smoothScrollTo } from '@/lib/motion';

export function usePageLinks(curtainRef) {
  useEffect(() => {
    let busy = false;

    const navigate = (href) => {
      if (busy || window.location.hash === href) return;
      busy = true;
      runCurtain(curtainRef.current, () => {
        window.location.hash = href;
      }).then(() => {
        busy = false;
      });
    };

    const onClick = (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest('a[href^="#"]');
      const href = link?.getAttribute('href');
      if (!href || href === '#') return;

      const element = href.startsWith('#/') ? null : document.getElementById(href.slice(1));
      event.preventDefault();

      if (element) {
        smoothScrollTo(element);
        history.replaceState(null, '', href);
      } else {
        navigate(href);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [curtainRef]);
}
