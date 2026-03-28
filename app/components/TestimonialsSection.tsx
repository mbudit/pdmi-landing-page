import React from "react";
import Image from "next/image";

import person1 from "@/app/assets/testimonials/person-1.png";
import person2 from "@/app/assets/testimonials/person-2.png";
import person3 from "@/app/assets/testimonials/person-3.png";
import person4 from "@/app/assets/testimonials/person-4.png";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    name: "Jonathan Doe",
    role: "Game Devs",
    image: person1,
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    name: "Rakha Nate",
    role: "Web Devs",
    image: person2,
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    name: "Jeanice Shell",
    role: "Game Devs",
    image: person3,
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    name: "Meg Rush",
    role: "Web Devs",
    image: person4,
    rating: 4,
  },
];

const StarIcon = ({ active }: { active: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? "#F5A623" : "#E5E7EB"}
    className="w-5 h-5 sm:w-6 sm:h-6"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 bg-white min-h-[100dvh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211F1F] mb-12 sm:mb-16">
          Happy <span className="text-[#0A6EFF]">Patients</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[2.5rem] bg-[#F4F4F4] p-8 sm:p-10 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Testimonial Text */}
              <p className="text-[#6B7280] italic leading-relaxed text-sm sm:text-base mb-8">
                {item.text}
              </p>

              {/* Author Info */}
              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-[#211F1F]">
                  {item.name}
                </h4>
                <p className="text-[#6B7280] text-sm sm:text-base mt-1">
                  {item.role}
                </p>
              </div>

              {/* Avatar & Rating */}
              <div className="flex items-center gap-6 mt-auto">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-full border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} active={i < item.rating} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-4 mt-12 sm:mt-16">
          {/* Prev Arrow */}
          <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white text-gray-500 hover:border-[#0A6EFF] hover:text-[#0A6EFF] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#211F1F]"></span>
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]"></span>
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]"></span>
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]"></span>
          </div>

          {/* Next Arrow */}
          <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white text-gray-500 hover:border-[#0A6EFF] hover:text-[#0A6EFF] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
