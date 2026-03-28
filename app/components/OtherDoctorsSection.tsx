import Image from "next/image";

import doctor1 from "@/app/assets/doctors/doctor-1.png";
import doctor2 from "@/app/assets/doctors/doctor-2.png";
import doctor3 from "@/app/assets/doctors/doctor-3.png";
import doctor4 from "@/app/assets/doctors/doctor-4.png";

const otherDoctors = [
  {
    image: doctor1,
    name: "Dr. Jenny Joe",
    subtitle: "MBBS / Dip in psychology",
  },
  {
    image: doctor2,
    name: "Dr. Kenny Smith",
    subtitle: "MBBS / Dip in psychology",
  },
  {
    image: doctor3,
    name: "Dr. Jasmine Rei",
    subtitle: "MBBS / Dip in psychology",
  },
  {
    image: doctor4,
    name: "Dr. Ashmar Chart",
    subtitle: "MBBS / Dip in psychology",
  },
];

export default function OtherDoctorsSection() {
  return (
    <div className="relative w-full pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section Header ─── */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#211F1F]">
            And Other Top{" "}
            <span style={{ color: "#0A6EFF" }}>Professional</span>
          </h2>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {otherDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-3xl bg-[#f8f9fa] p-4 sm:p-5
                         transition-all duration-300 hover:shadow-lg hover:bg-white"
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content & Arrow button */}
              <div className="mt-5 flex items-end justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-[#211F1F]">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-[#6b7280] italic mt-1">
                    {doc.subtitle}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                             transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95"
                  style={{ backgroundColor: "#1e293b" }}
                  aria-label={`View profile of ${doc.name}`}
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

        {/* ─── Carousel Controls (Static Placeholder matching design) ─── */}
        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d1d5db] bg-white transition-colors hover:bg-gray-50"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1e293b]"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d1d5db] bg-white transition-colors hover:bg-gray-50"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
