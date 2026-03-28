"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ─── Asset imports ─── */
import union1 from "@/app/assets/hero/hero-1/union-1.png";
import doctor1 from "@/app/assets/hero/hero-1/doctor-1.png";
import union2 from "@/app/assets/hero/hero-2/union-2.png";
import doctor2 from "@/app/assets/hero/hero-2/doctor-2.png";
import union3 from "@/app/assets/hero/hero-3/union-3.png";
import doctor3 from "@/app/assets/hero/hero-3/doctor-3.png";

const heroSlides = [
  {
    bg: "#0A6EFF",
    union: union1,
    doctor: doctor1,
    alt: "Professional Medical Service — Your Health is Our First Priority",
    subtitle: "Professional Medical Service",
    title: "Your Health is Our\nFirst Priority",
  },
  {
    bg: "#2EBB8B",
    union: union2,
    doctor: doctor2,
    alt: "All in for the Services 24/7 — Get Quick to Your Medical Needs",
    subtitle: "All in for the Services 24/7",
    title: "Get Quick to Your\nMedical Needs",
  },
  {
    bg: "#38A6E0",
    union: union3,
    doctor: doctor3,
    alt: "Maintaining Your Health — Your Health Is Our Priority",
    subtitle: "Maintaining Your Health",
    title: "Your Health\nIs Our Priority",
  },
];

const INTERVAL = 5000;
const FADE_DURATION = 700;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === activeIndex || fading) return;
      setNextIndex(idx);
      setFading(true);
      setTimeout(() => {
        setActiveIndex(idx);
        setFading(false);
      }, FADE_DURATION);
    },
    [activeIndex, fading]
  );

  /* auto-play */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % heroSlides.length;
      goTo(next);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [activeIndex, goTo]);

  return (
    <section id="home" className="relative w-full pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-[100dvh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Card Container (allows top overflow for doctor pop-out) ─── */}
        <div
          className="relative w-full rounded-[2rem] sm:rounded-[60px] shadow-lg min-h-[600px] sm:min-h-[450px] md:min-h-0 md:aspect-[16/7]"
        >
          {/* ─── Slides ─── */}
          {heroSlides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const isNext = fading && idx === nextIndex;

            return (
              <div
                key={idx}
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: isActive ? (fading ? 0 : 1) : isNext ? 1 : 0,
                  transition: `opacity ${FADE_DURATION}ms ease-in-out`,
                  zIndex: isNext ? 2 : isActive ? 1 : 0,
                }}
              >
                {/* Background + union (clipped to card shape) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden rounded-[2rem] sm:rounded-[60px]"
                  style={{ backgroundColor: slide.bg }}
                >
                  {/* Text content — top on mobile, left on desktop */}
                  <div className="absolute inset-x-0 top-0 sm:inset-y-0 sm:left-0 z-10 flex flex-col justify-start sm:justify-center px-6 pt-10 sm:pt-0 sm:px-12 lg:px-16 w-full sm:max-w-[55%]">
                    <p className="text-white/80 text-sm sm:text-base lg:text-lg font-light italic mb-2 sm:mb-4">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight whitespace-pre-line">
                      {slide.title}
                    </h2>
                  </div>

                  {/* Union shape — right side, centered behind doctor */}
                  <div className="absolute right-0 sm:right-[5%] bottom-[5%] sm:top-[10%] h-[55%] sm:h-[80%] w-[90%] sm:w-[35%] opacity-80 sm:opacity-100">
                    <Image
                      src={slide.union}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, 35vw"
                      className="object-contain object-right-bottom sm:object-right"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Doctor — pos: bottom right */}
                <div className="absolute right-0 sm:right-[1%] bottom-0 h-[60%] sm:h-[125%] w-[100%] sm:w-[50%] z-20 pointer-events-none">
                  <Image
                    src={slide.doctor}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain object-bottom-right sm:object-bottom"
                    priority={idx === 0}
                  />
                </div>
              </div>
            );
          })}

          {/* ─── Bottom-left button + indicators ─── */}
          <div className="absolute top-[160px] left-6 sm:top-auto sm:bottom-10 sm:left-12 lg:left-16 z-30 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-[20px] sm:rounded-full
                         bg-white px-6 py-3 sm:px-8 sm:py-4
                         text-sm sm:text-base font-semibold text-[#075EE0]
                         shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-200
                         hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
            >
              Make Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </a>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goTo(idx)}
                  className={`
                    h-2.5 rounded-full transition-all duration-300
                    ${idx === activeIndex || (fading && idx === nextIndex)
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

