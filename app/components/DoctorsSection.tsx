import Image from "next/image";

import unionExpert from "@/app/assets/doctors/union-expert.png";
import doctorExpert from "@/app/assets/doctors/doctor-expert.png";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="relative w-full py-16 sm:py-24 min-h-[100dvh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ─── Left side — Doctor image with union ─── */}
          <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
            {/* Union shape — centered bottom behind doctor */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-full w-[90%] sm:w-[85%] z-0">
              <Image
                src={unionExpert}
                alt=""
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain object-bottom"
                aria-hidden="true"
              />
            </div>

            {/* Doctor image — bottom aligned, fills more space */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[105%] w-full z-10">
              <Image
                src={doctorExpert}
                alt="Dr. Joe Dennis — Expert Specialist"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* ─── Right side — Content ─── */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#211F1F] leading-tight">
              Our <span style={{ color: "#0A6EFF" }}>Expert</span>
              <br />
              Specialist
            </h2>

            {/* Doctor info + Contact button */}
            <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#211F1F]">
                  Dr. Joe Dennis
                </p>
                <p className="text-sm sm:text-base text-[#6b7280] italic">
                  MBBS / Dip in pschology
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d1d5db]
                           bg-white px-5 py-2.5
                           text-sm font-medium text-[#211F1F]
                           transition-all duration-200
                           hover:border-[#0A6EFF] hover:text-[#0A6EFF] hover:shadow-md"
              >
                Contact now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-[#6b7280] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium.
            </p>

            {/* Experience badge */}
            <div
              className="mt-8 inline-flex items-center gap-4 self-start rounded-2xl px-8 py-5"
              style={{ backgroundColor: "#0A6EFF" }}
            >
              <span className="text-4xl sm:text-5xl font-bold text-white">
                20 <span className="text-3xl sm:text-4xl">+</span>
              </span>
              <div>
                <p className="text-base sm:text-lg font-semibold text-white">
                  Years
                </p>
                <p className="text-sm text-white/80 italic">
                  Professional Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
