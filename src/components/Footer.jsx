import { ArrowUp, Instagram } from 'lucide-react';
import { photographer } from '@/data/photography';
import { smoothScrollTo } from '@/lib/motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-neutral-400 md:flex-row">
        <p className="font-display text-xl font-light tracking-wide text-white">{photographer.name}</p>
        <p className="text-center">
          &copy; {year} {photographer.name}. All photographs are protected by copyright.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={photographer.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors duration-300 hover:text-white"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <button
            type="button"
            onClick={() => smoothScrollTo()}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition-all duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
