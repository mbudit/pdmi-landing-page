import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import DoctorsSection from "./components/DoctorsSection";
import OtherDoctorsSection from "./components/OtherDoctorsSection";
import ReasonsSection from "./components/ReasonsSection";
import BookingSection from "./components/BookingSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <OtherDoctorsSection />
      <ReasonsSection />
      <BookingSection />
      <TestimonialsSection />
    </>
  );
}
