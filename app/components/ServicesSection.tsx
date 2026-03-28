import Image from "next/image";

import services1 from "@/app/assets/services/services-1.png";
import services2 from "@/app/assets/services/services-2.png";
import services3 from "@/app/assets/services/services-3.png";

const services = [
  {
    image: services1,
    title: "Home Visit Services.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    image: services2,
    title: "In-patient Care.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    image: services3,
    title: "Laboratory Services.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section Header ─── */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211F1F]">
            Our Professional{" "}
            <span style={{ color: "#0A6EFF" }}>Services</span>
          </h2>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl border border-[#e5e7eb] bg-white p-5 sm:p-6
                         shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Text content */}
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-[#243352]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#243352] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow button — bottom right */}
              <div className="mt-5 flex justify-end">
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl
                             transition-all duration-200
                             hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#1a1a2e" }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
