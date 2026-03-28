"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${scrolled
          ? "bg-nav-bg backdrop-blur-xl border-b border-nav-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
        }
      `}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        {/* ─── Logo ─── */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground
                     transition-opacity duration-200 hover:opacity-80"
        >
          {/* Gradient dot accent */}
          <span
            className="inline-block h-7 w-7 rounded-lg"
            style={{
              background: "linear-gradient(135deg, var(--accent), #7c3aed)",
            }}
            aria-hidden="true"
          />
          <span>PDMI</span>
        </Link>

        {/* ─── Desktop Links ─── */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted
                           transition-colors duration-200 rounded-lg
                           hover:text-foreground hover:bg-surface-hover"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── CTA Button (Desktop) ─── */}
        {/* <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5
                       text-sm font-semibold text-white
                       transition-all duration-200
                       hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, var(--accent), #7c3aed)",
              boxShadow: "0 2px 12px var(--accent-glow)",
            }}
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div> */}

        {/* ─── Mobile Hamburger ─── */}
        <button
          id="mobile-menu-toggle"
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg
                     text-muted transition-colors duration-200
                     hover:bg-surface-hover hover:text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300
                ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300
                ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300
                ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* ─── Mobile Menu ─── */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 top-[72px] z-40 md:hidden
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* panel */}
        <div
          className={`
            relative mx-4 mt-2 rounded-2xl bg-surface border border-border
            p-6 shadow-lg
            transition-all duration-300
            ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-muted
                             transition-colors duration-200
                             hover:bg-surface-hover hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border-subtle">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full
                         px-5 py-3 text-sm font-semibold text-white
                         transition-all duration-200 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--accent), #7c3aed)",
              }}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
