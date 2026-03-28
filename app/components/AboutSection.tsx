import Image from "next/image";

import unionCard from "@/app/assets/about/union-card.png";
import unionAbout from "@/app/assets/about/union-about.png";
import doctorAbout from "@/app/assets/about/doctor-about.png";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── About Us header — above card, aligned with left edge ─── */}
        <div className="mb-6 sm:mb-8" style={{ paddingLeft: "60px" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211F1F]">
            About <span style={{ color: "#0A6EFF" }}>Us</span>
          </h2>
        </div>
        {/* ─── Card ─── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            backgroundColor: "#AECFFF",
            borderRadius: "60px",
            minHeight: "420px",
          }}
        >
          {/* Union shape overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={unionCard}
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              aria-hidden="true"
            />
          </div>

          {/* ─── Union shape — left side, behind doctor ─── */}
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 h-[65%] w-[30%] z-[2]">
            <Image
              src={unionAbout}
              alt=""
              fill
              sizes="40vw"
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          {/* ─── Doctor image — left side, on top of union ─── */}
          <div className="absolute left-[2%] bottom-0 h-[95%] w-[38%] z-[3]">
            <Image
              src={doctorAbout}
              alt="Doctor consulting with patient"
              fill
              sizes="38vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* ─── Text content — right side ─── */}
          <div className="absolute right-0 top-0 h-full w-[55%] z-[4] flex flex-col justify-center pb-28 px-8 sm:px-12 lg:pr-16">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          {/* ─── More Story button — bottom right notch ─── */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md
                         bg-white px-5 py-2.5 sm:px-7 sm:py-3
                         text-sm sm:text-base font-semibold text-[#075EE0]
                         shadow-md transition-all duration-200
                         hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
            >
              More Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
          </div>
        </div>
      </div>
    </section>
  );
}
