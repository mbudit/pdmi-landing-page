import Image from "next/image";

import union2 from "@/app/assets/doctors/union-2.png";
import doctor5 from "@/app/assets/doctors/doctor-5.png";

const reasons = [
  {
    title: "24/7 Service",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Expertise and Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="10" r="6" />
        <path d="M10 20h4" />
        <path d="M9 20v-3.46a8 8 0 0 1-1.35-2.54" />
        <path d="M15 20v-3.46a8 8 0 0 0 1.35-2.54" />
        <path d="M12 20v2" />
      </svg>
    ),
  },
  {
    title: "Our Patients Are Happy",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="relative w-full py-16 sm:py-24 min-h-[100dvh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ─── Left side — Text Content & List ─── */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#211F1F] mb-10 sm:mb-12">
              Reasons to Choose Our{" "}
              <span style={{ color: "#0A6EFF" }}>Services</span>
            </h2>

            {/* Features List */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 
                             rounded-[2rem] bg-[#F4F4F4] p-5 sm:p-6 sm:pr-8
                             transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-200"
                >
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#211F1F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#6b7280] leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right side — Doctor image with union ─── */}
          <div className="relative w-full h-[500px] lg:h-auto lg:min-h-[600px] mt-10 lg:mt-0">
            {/* Union shape — centered bottom behind doctor */}
            <div className="absolute right-0 bottom-0 h-full w-[100%] z-0">
              <Image
                src={union2}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom sm:object-right-bottom"
                aria-hidden="true"
              />
            </div>

            {/* Doctor image — bottom aligned, fills more space */}
            <div className="absolute -right-[5%] bottom-0 h-[120%] w-[110%] z-10">
              <Image
                src={doctor5}
                alt="Friendly Doctor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
