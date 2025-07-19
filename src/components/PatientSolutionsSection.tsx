import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Bell, 
  Calendar, 
  Shield, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const PatientSolutionsSection = () => {
  const patientFeatures = [
    {
      icon: MessageSquare,
      title: "Bot de Lembretes Inteligente",
      description: "Receba lembretes personalizados via WhatsApp, SMS ou app para nunca esquecer seus medicamentos.",
      features: ["Lembretes por WhatsApp", "Horários personalizados", "Confirmação de tomada"]
    },
    {
      icon: Bell,
      title: "Alertas de Consultas",
      description: "Sistema automatizado que lembra sobre consultas, exames e procedimentos agendados.",
      features: ["Notificações antecipadas", "Confirmação automática", "Reagendamento fácil"]
    },
    {
      icon: Calendar,
      title: "Gestão de Tratamento",
      description: "Acompanhe seu plano de tratamento com relatórios automáticos para você e seu médico.",
      features: ["Histórico detalhado", "Relatórios médicos", "Progresso visual"]
    },
    {
      icon: Shield,
      title: "Segurança e Privacidade",
      description: "Seus dados médicos protegidos com a mais alta segurança e conformidade com a LGPD.",
      features: ["Dados criptografados", "Conformidade LGPD", "Acesso controlado"]
    }
  ];

  const benefits = [
    "Nunca mais esqueça de tomar seus medicamentos",
    "Melhore a adesão ao tratamento médico",
    "Tenha relatórios automáticos para seu médico",
    "Receba lembretes no seu celular",
    "Acompanhe seu progresso de forma visual",
    "Suporte 24/7 via chat automatizado"
  ];

  return (
    <section id="pacientes" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Para Pacientes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cuide Melhor da Sua Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossos bots inteligentes ajudam você a manter seus tratamentos em dia, 
            com lembretes personalizados e acompanhamento completo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {patientFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-border bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-1">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Benefícios para Você
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-accent border-0 text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-xl">Pronto para começar?</CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  Assine nosso serviço e tenha acesso a todos os recursos por apenas R$ 19,90/mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" className="flex-1 group">
                    Assinar Agora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                    Teste Grátis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <blockquote className="text-lg text-foreground mb-4">
              "Desde que comecei a usar o bot de lembretes, nunca mais esqueci de tomar meus medicamentos. 
              É como ter um assistente pessoal cuidando da minha saúde!"
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">MJ</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Maria José</div>
                <div className="text-sm text-muted-foreground">Paciente há 6 meses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSolutionsSection;