import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Função para rolar até a seção
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">
              Clintech <span className="text-primary">Automação</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Início
            </a>
            <a
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Sobre
            </a>
            <a
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Serviços
            </a>
            <a
              onClick={() => scrollToSection('pacientes')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Para Pacientes
            </a>
            <a
              onClick={() => scrollToSection('assinatura')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Planos
            </a>
            <a
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('contato')}>
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                onClick={() => { scrollToSection('inicio'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Início
              </a>
              <a
                onClick={() => { scrollToSection('sobre'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Sobre
              </a>
              <a
                onClick={() => { scrollToSection('servicos'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Serviços
              </a>
              <a
                onClick={() => { scrollToSection('pacientes'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Para Pacientes
              </a>
              <a
                onClick={() => { scrollToSection('assinatura'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Planos
              </a>
              <a
                onClick={() => { scrollToSection('contato'); setIsMenuOpen(false); }}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contato
              </a>
              <Button
                variant="hero"
                size="lg"
                onClick={() => { scrollToSection('contato'); setIsMenuOpen(false); }}
                className="w-full"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;