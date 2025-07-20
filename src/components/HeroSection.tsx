import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Automação para
                <span className="block text-primary">Saúde</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Modernize sua clínica ou farmácia com soluções de automação especializadas. 
                Melhore o atendimento, reduza erros e otimize processos médicos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Eficiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Redução de Custos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Começar Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Portfólio
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-card/70 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Soluções Médicas</h3>
                  <p className="text-muted-foreground">Automação especializada para clínicas e farmácias</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-card/70 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Tecnologia Médica</h3>
                  <p className="text-muted-foreground">Sistemas digitais e dispensação automatizada</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:bg-card/70 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Segurança e Compliance</h3>
                  <p className="text-muted-foreground">Conformidade com normas sanitárias e ANVISA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;