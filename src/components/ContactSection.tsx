import { useState } from "react";  
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send 
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = { ...formData };

    console.log('Dados enviados para o backend:', data);

    try {
      const res = await fetch("https://ctb-theta.vercel.app/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseText = await res.text();
      console.log("Resposta do servidor como texto:", responseText);

      if (!res.ok) {
        throw new Error(responseText || "Erro inesperado no servidor");
      }

      try {
        const result = JSON.parse(responseText);
        console.log('Resposta JSON do servidor:', result);

        toast({
          title: "Mensagem enviada!",
          description: result.message || "Entraremos em contato em breve. Obrigado!",
        });

        // Limpar formulário após sucesso
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });

      } catch (jsonError) {
        throw new Error(`Resposta do servidor não é JSON válido. Erro: ${jsonError.message}`);
      }

    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar mensagem.",
        description: error.message || "Houve um erro ao tentar enviar sua mensagem.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 3456-7890",
      description: "Seg - Sex, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@clintechautomacao.com.br",
      description: "Especialistas em saúde"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo, SP",
      description: "Atendemos todo o Brasil"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "08:00 - 18:00",
      description: "Segunda a Sexta-feira"
    }
  ];

  return (
     <section id="contato" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para modernizar sua clínica ou farmácia? Fale conosco e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para atender você. Entre em contato através dos canais abaixo 
                ou preencha o formulário para receber uma proposta personalizada.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formulário de contato */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar Orçamento
              </CardTitle>
              <CardDescription>
                Preencha o formulário e receba uma proposta personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Descreva seu projeto ou necessidade de automação..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;