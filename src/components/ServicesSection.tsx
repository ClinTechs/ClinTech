import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Pill, 
  FileText, 
  MonitorSpeaker, 
  Calendar, 
  Shield, 
  Headphones,
  ArrowRight 
} from "lucide-react";

type ServicesSectionProps = {
  id?: string;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  const services = [
    {
      icon: Pill,
      title: "Automação de Farmácia",
      description: "Sistemas automatizados para dispensação, controle de estoque e gestão de medicamentos.",
      features: ["Dispensação automática", "Controle de validade", "Rastreabilidade completa"]
    },
    {
      icon: FileText,
      title: "Gestão de Prontuários",
      description: "Digitalização e automação de prontuários médicos com integração completa.",
      features: ["Prontuário eletrônico", "Assinatura digital", "Backup automático"]
    },
    {
      icon: Calendar,
      title: "Sistema de Agendamento",
      description: "Automação completa de consultas, exames e procedimentos médicos.",
      features: ["Agendamento online", "Confirmação automática", "Gestão de filas"]
    },
    {
      icon: MonitorSpeaker,
      title: "Atendimento Automatizado",
      description: "Sistemas de atendimento automático para otimizar o fluxo de pacientes.",
      features: ["Atendimento 24/7", "Triagem automática", "Agendamento inteligente"]
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Sistemas de segurança para conformidade com normas sanitárias e LGPD.",
      features: ["Controle de acesso", "Auditoria automática", "Compliance ANVISA"]
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Suporte técnico 24/7 especializado em sistemas de saúde.",
      features: ["Suporte 24/7", "Manutenção preventiva", "Treinamento de equipes"]
    }
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas de automação para clínicas e farmácias, desde o projeto até a implementação e suporte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver a solução ideal para seu negócio. 
              Entre em contato e receba uma consultoria gratuita.
            </p>
            <a href="#contato">
              <Button variant="hero" size="lg">
                Solicitar Consultoria Gratuita
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;