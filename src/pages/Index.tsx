
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PatientSolutionsSection from "@/components/PatientSolutionsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header /> 
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PatientSolutionsSection />
      <SubscriptionSection />
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Index;