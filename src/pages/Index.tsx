import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhySection from "@/components/WhySection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileSticky from "@/components/MobileSticky";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />
      <img src="Design sans titre.png"alt="Formation Head Spa" className="w-full max-w-4xl mx-auto rounded-2xl my-10" />
      <InstructorSection />
      <ReviewsSection />
      <WhySection />
      <CurriculumSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <MobileSticky />
    </main>
  );
};

export default Index;
