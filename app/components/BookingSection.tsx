"use client";

import React, { useState } from "react";

export default function BookingSection() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // September 2025 like the mockup
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 8, 9)); // Default selected date

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  return (
    <section id="booking" className="relative w-full py-16 sm:py-24 min-h-[100dvh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex flex-col xl:flex-row overflow-hidden rounded-[3rem] sm:rounded-[4rem]"
          style={{ backgroundColor: "#0A6EFF" }}
        >
          {/* Main Content Area */}
          <div className="flex flex-1 flex-col lg:flex-row p-10 sm:p-16 lg:p-20 gap-16 lg:gap-24">
            
            {/* ─── Left Column — Text & Form ─── */}
            <div className="flex flex-col justify-center flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-snug tracking-tight">
                Fill the details and
                <br className="hidden sm:block" />
                book an appointment.
              </h2>

              <form className="mt-12 flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="First and last name"
                  className="w-full rounded-full border-none bg-black/10 px-8 py-5 text-base text-white placeholder:text-white/70 placeholder:italic focus:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border-none bg-black/10 px-8 py-5 text-base text-white placeholder:text-white/70 placeholder:italic focus:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Contact number"
                  className="w-full rounded-full border-none bg-black/10 px-8 py-5 text-base text-white placeholder:text-white/70 placeholder:italic focus:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                />
              </form>
            </div>

            {/* ─── Right Column — Calendar Panel ─── */}
            <div className="relative flex-1 max-w-lg lg:ml-auto w-full">
              {/* Dark Blue Backplate */}
              <div
                className="relative w-full rounded-[3rem] p-6 sm:p-10 pb-24 sm:pb-32 overflow-hidden shadow-2xl"
                style={{ backgroundColor: "#0052cc" }}
              >
                {/* The Calendar UI */}
                <div className="relative z-10 w-full rounded-3xl bg-white p-6 sm:p-8 shadow-xl select-none">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-8">
                    <button onClick={handlePrevMonth} className="text-gray-400 hover:text-black transition-colors rounded-full p-1 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <div className="flex gap-4">
                      {/* Month Dropdown */}
                      <div className="relative flex items-center">
                        <select
                          value={month}
                          onChange={(e) => setCurrentDate(new Date(year, parseInt(e.target.value), 1))}
                          className="appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors outline-none focus:ring-2 focus:ring-[#0A6EFF]/50"
                        >
                          {monthNames.map((m, i) => (
                            <option key={m} value={i}>{m}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-2.5 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                      {/* Year Dropdown */}
                      <div className="relative flex items-center">
                        <select
                          value={year}
                          onChange={(e) => setCurrentDate(new Date(parseInt(e.target.value), month, 1))}
                          className="appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors outline-none focus:ring-2 focus:ring-[#0A6EFF]/50"
                        >
                          {Array.from({ length: 21 }, (_, i) => 2020 + i).map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-2.5 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>
                    <button onClick={handleNextMonth} className="text-gray-400 hover:text-black transition-colors rounded-full p-1 hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
                    {/* Days of Week */}
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                      <div key={day} className="text-xs font-semibold text-gray-400 mb-2">{day}</div>
                    ))}
                    
                    {/* Empty Slots For Start of Month */}
                    {Array.from({ length: firstDayIndex }).map((_, i) => (
                       <div key={`empty-${i}`} className="text-transparent pointer-events-none">0</div>
                    ))}
                    
                    {/* Active Month Dates */}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => {
                      const isSelected = selectedDate?.getDate() === date && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;
                      return (
                        <div key={date} className="flex justify-center items-center">
                          <span
                            onClick={() => handleDateClick(date)}
                            className={`flex h-8 w-8 items-center justify-center rounded-xl font-medium cursor-pointer transition-colors
                              ${isSelected ? 'bg-[#211F1F] text-white shadow-md scale-105' : 'text-gray-700 hover:bg-gray-100'}
                            `}
                          >
                            {date}
                          </span>
                        </div>
                      );
                    })}
                    
                    {/* Next Month Dates Padding */}
                    {Array.from({ length: 42 - (firstDayIndex + daysInMonth) }).map((_, i) => (
                      <div key={`next-month-${i}`} className="flex justify-center">
                        <span className="flex h-8 w-8 items-center justify-center text-gray-300 pointer-events-none">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Make Appointment Button (Inside bottom-left) */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 right-6 sm:left-10 sm:right-10 z-20">
                  <a
                    href="#book"
                    className="flex items-center justify-center gap-3 w-full rounded-full bg-white px-6 sm:px-8 py-4 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="text-sm font-bold text-[#0A6EFF]">Make Appointment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A6EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons Bar (Far Right) */}
          <div className="hidden xl:flex flex-col items-center justify-center pr-12 pb-16 pt-20 w-32 border-l border-white/10 ml-auto">
            <div className="flex flex-col items-center gap-8">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/></svg>
              </a>
            </div>
            {/* Vertical Line */}
            <div className="w-0.5 h-24 bg-white mt-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
