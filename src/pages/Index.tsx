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
      <Header /> {/* Header só aparece aqui, na página principal */}
      <HeroSection id="inicio" />
      <AboutSection id="sobre" />
      <ServicesSection id="servicos" />
      <PatientSolutionsSection id="pacientes" />
      <SubscriptionSection id="assinatura" />
      <ContactSection id="contato" />
      <Footer />
    </div>
  );
};

export default Index;