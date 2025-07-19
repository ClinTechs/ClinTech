import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  id?: string;
}

const AboutSection = ({ id = "sobre" }: AboutSectionProps) => {
  const achievements = [
    "Mais de 500 projetos concluídos",
    "15 anos de experiência no mercado",
    "Equipe especializada e certificada",
    "Suporte técnico 24/7",
  ];

  return (
    <section id={id} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Sobre a Clintech
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Especialistas em Automação da Saúde
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Clintech Automação é especializada em soluções tecnológicas para clínicas, farmácias 
                e estabelecimentos de saúde, oferecendo sistemas de automação que melhoram o atendimento 
                ao paciente e otimizam processos administrativos.
              </p>
              <p className="text-muted-foreground">
                Nossa missão é modernizar o setor da saúde através da tecnologia, proporcionando 
                soluções que aumentam a eficiência, reduzem erros médicos e melhoram a experiência do paciente.
              </p>
            </div>

            {/* Conquistas */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">15</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300 sm:col-span-2">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Inovação Contínua</div>
                  <div className="text-sm text-muted-foreground">
                    Sempre atualizados com as últimas tendências em automação
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;