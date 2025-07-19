import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Check, 
  Star, 
  Crown, 
  MessageSquare, 
  Bell, 
  Calendar,
  Shield,
  Smartphone,
  BarChart3
} from "lucide-react";

type SubscriptionSectionProps = {
  id?: string;
};

const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ id }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [isLoading, setIsLoading] = useState(false);

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "Grátis",
      description: "Ideal para começar",
      popular: false,
      features: [
        "Lembretes básicos de medicamentos",
        "2 medicamentos simultâneos",
        "Notificações por SMS",
        "Suporte por email"
      ],
      icon: Bell,
      buttonText: "Começar Grátis",
      buttonVariant: "outline" as const
    },
    {
      id: "premium",
      name: "Premium",
      price: "R$ 19,90",
      description: "Mais popular entre nossos usuários",
      popular: true,
      features: [
        "Lembretes ilimitados de medicamentos",
        "Bot de WhatsApp personalizado",
        "Relatórios mensais para médicos",
        "Lembretes de consultas e exames",
        "Suporte prioritário 24/7",
        "Histórico completo de adesão"
      ],
      icon: Star,
      buttonText: "Assinar Premium",
      buttonVariant: "hero" as const
    },
    {
      id: "family",
      name: "Família",
      price: "R$ 34,90",
      description: "Para toda a família",
      popular: false,
      features: [
        "Todos os recursos Premium",
        "Até 5 perfis familiares",
        "Painel administrativo familiar",
        "Relatórios consolidados",
        "Alertas para cuidadores",
        "Configuração personalizada por perfil"
      ],
      icon: Crown,
      buttonText: "Assinar Família",
      buttonVariant: "accent" as const
    }
  ];

  const allFeatures = [
    {
      icon: MessageSquare,
      title: "Bot WhatsApp Inteligente",
      description: "Interaja com nosso bot via WhatsApp para gerenciar medicamentos"
    },
    {
      icon: Bell,
      title: "Lembretes Personalizados",
      description: "Configure horários únicos para cada medicamento"
    },
    {
      icon: Calendar,
      title: "Agenda Médica",
      description: "Lembretes automáticos de consultas e exames"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe sua adesão com gráficos e estatísticas"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados protegidos e conformidade com LGPD"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "WhatsApp, SMS, email e notificações push"
    }
  ];

  const handleSubscribe = async (planId: string) => {
    setIsLoading(true);
    // Simular processo de assinatura
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (planId === "basic") {
      toast({
        title: "Conta criada com sucesso!",
        description: "Você agora tem acesso ao plano básico. Verifique seu email para começar.",
      });
    } else {
      toast({
        title: "Redirecionando para pagamento...",
        description: "Você será redirecionado para finalizar sua assinatura.",
      });
    }
    
    setIsLoading(false);
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Digite seu email para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    await handleSubscribe(selectedPlan);
    setEmail("");
  };

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Planos e Preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Escolha o Plano Ideal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece grátis e faça upgrade quando precisar de mais recursos. 
            Todos os planos incluem nossa garantia de satisfação.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            return (
              <Card 
                key={plan.id}
                className={`relative border-border hover:shadow-glow transition-all duration-300 ${
                  plan.popular 
                    ? 'ring-2 ring-primary scale-105 bg-card' 
                    : 'bg-card hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                    <PlanIcon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Grátis" && (
                      <span className="text-muted-foreground">/mês</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant}
                    className="w-full mt-6"
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processando..." : plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Signup */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="bg-gradient-primary border-0 text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle>Comece Hoje Mesmo</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Digite seu email e escolha seu plano
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-signup" className="text-primary-foreground">
                    Seu melhor email
                  </Label>
                  <Input
                    id="email-signup"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Criando conta..." : "Começar Agora"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Todos os Recursos Inclusos
            </h3>
            <p className="text-muted-foreground">
              Descubra tudo que você terá acesso com nossos planos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FeatureIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Quick */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Posso cancelar a qualquer momento?</h4>
                <p className="text-sm text-muted-foreground">Sim, sem taxas ou multas. Cancele quando quiser.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Meus dados estão seguros?</h4>
                <p className="text-sm text-muted-foreground">Totalmente protegidos com criptografia e conformidade LGPD.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Funciona sem internet?</h4>
                <p className="text-sm text-muted-foreground">Enviamos lembretes por SMS quando necessário.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tem suporte técnico?</h4>
                <p className="text-sm text-muted-foreground">Sim, nossa equipe está disponível para ajudar 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;