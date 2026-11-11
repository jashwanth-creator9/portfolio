import { useEffect, useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { photographer } from '@/data/photography';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? 'border-b border-white/10 bg-neutral-950/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12" aria-label="Main">
          <a href="#/" className="group inline-flex items-center gap-3 text-white" aria-label={`${photographer.shortName}, back to top`} onClick={closeMenu}>
            <Camera className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-12" aria-hidden="true" />
            <span className="font-display text-xl font-light tracking-[0.15em] uppercase">{photographer.shortName}</span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 text-xs uppercase tracking-[0.3em] text-neutral-200 transition-colors duration-300 hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex p-2 text-white md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 overflow-y-auto bg-neutral-950 transition-all duration-500 ease-out md:hidden ${
          menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-8 px-6 pt-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu} className="font-display text-5xl font-light text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
