import { Badge } from "@/components/ui/badgeP";
import { Button } from "@/components/ui/buttonP";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/cardP";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsP";
import '../indexP.css'; 
import { 
  Activity, 
  Calendar, 
  Database, 
  FileText, 
  Pill, 
  Settings, 
  Shield, 
  Stethoscope, 
  Users, 
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Agendamento Automatizado",
      description: "Automação completa do processo de agendamento de consultas com integração WhatsApp e confirmação automática.",
      category: "agendamento",
      image: "/lovable-uploads/afd10602-2343-4841-af0d-a421a353ac9c.png",
      technologies: ["n8n", "WhatsApp API", "Google Calendar", "MySQL"],
      features: [
        "Agendamento via WhatsApp",
        "Confirmação automática",
        "Lembretes personalizados",
        "Gestão de filas de espera"
      ],
      results: {
        efficiency: "85%",
        timeReduction: "4h/dia",
        satisfaction: "96%"
      },
      status: "Concluído",
      duration: "3 meses"
    },
    {
      id: 2,
      title: "Automação de Farmácia Hospitalar",
      description: "Sistema automatizado para controle de estoque, dispensação e validade de medicamentos com alertas inteligentes.",
      category: "farmacia",
      image: "/lovable-uploads/8e6609ca-bd9a-426d-acfa-30ea29c157fe.png",
      technologies: ["n8n", "REST API", "PostgreSQL", "Telegram Bot"],
      features: [
        "Controle automático de estoque",
        "Alertas de validade",
        "Dispensação rastreada",
        "Relatórios automáticos"
      ],
      results: {
        efficiency: "92%",
        timeReduction: "6h/dia",
        satisfaction: "98%"
      },
      status: "Em produção",
      duration: "4 meses"
    },
    {
      id: 3,
      title: "Gestão Eletrônica de Prontuários",
      description: "Digitalização e automação completa do fluxo de prontuários médicos com backup automático e compliance LGPD.",
      category: "prontuarios",
      image: "/lovable-uploads/924779d5-824c-4a40-97b7-f39f6ac3ca79.png",
      technologies: ["n8n", "AWS S3", "OCR API", "MongoDB"],
      features: [
        "Digitalização automática",
        "Backup em nuvem",
        "Busca inteligente",
        "Compliance LGPD"
      ],
      results: {
        efficiency: "78%",
        timeReduction: "5h/dia",
        satisfaction: "94%"
      },
      status: "Em desenvolvimento",
      duration: "6 meses"
    },
    {
      id: 4,
      title: "Dashboard de Monitoramento em Tempo Real",
      description: "Sistema de monitoramento de equipamentos médicos com alertas automáticos e relatórios de manutenção preventiva.",
      category: "monitoramento",
      image: "/lovable-uploads/45cccbb3-b547-4d17-b444-9248024cafd3.png",
      technologies: ["n8n", "InfluxDB", "Grafana", "MQTT"],
      features: [
        "Monitoramento 24/7",
        "Alertas em tempo real",
        "Manutenção preventiva",
        "Dashboards personalizados"
      ],
      results: {
        efficiency: "95%",
        timeReduction: "8h/dia",
        satisfaction: "99%"
      },
      status: "Concluído",
      duration: "2 meses"
    },
    {
      id: 5,
      title: "Automação de Relatórios Médicos",
      description: "Geração automática de relatórios médicos, laudos e documentos com templates personalizáveis e assinatura digital.",
      category: "relatorios",
      image: "/lovable-uploads/afd10602-2343-4841-af0d-a421a353ac9c.png",
      technologies: ["n8n", "DocuSign API", "PDF Generator", "Firebase"],
      features: [
        "Templates personalizáveis",
        "Assinatura digital",
        "Envio automático",
        "Controle de versões"
      ],
      results: {
        efficiency: "88%",
        timeReduction: "3h/dia",
        satisfaction: "97%"
      },
      status: "Em produção",
      duration: "3 meses"
    },
    {
      id: 6,
      title: "Sistema de Triagem Inteligente",
      description: "Automação do processo de triagem com classificação de risco e direcionamento automático para especialistas.",
      category: "triagem",
      image: "/lovable-uploads/924779d5-824c-4a40-97b7-f39f6ac3ca79.png",
      technologies: ["n8n", "AI/ML APIs", "Redis", "Socket.io"],
      features: [
        "Classificação automática",
        "Direcionamento inteligente",
        "Priorização por risco",
        "Notificações em tempo real"
      ],
      results: {
        efficiency: "90%",
        timeReduction: "7h/dia",
        satisfaction: "95%"
      },
      status: "Em teste",
      duration: "5 meses"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos", icon: Settings },
    { id: "agendamento", label: "Agendamento", icon: Calendar },
    { id: "farmacia", label: "Farmácia", icon: Pill },
    { id: "prontuarios", label: "Prontuários", icon: FileText },
    { id: "monitoramento", label: "Monitoramento", icon: Activity },
    { id: "relatorios", label: "Relatórios", icon: Database },
    { id: "triagem", label: "Triagem", icon: Stethoscope }
  ];

  const stats = [
    { label: "Projetos Concluídos", value: "25+", icon: CheckCircle },
    { label: "Clientes Atendidos", value: "15+", icon: Users },
    { label: "Horas Economizadas", value: "200+", icon: Clock },
    { label: "Taxa de Satisfação", value: "96%", icon: Shield }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Em produção":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Em desenvolvimento":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Em teste":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const filteredProjects = (category: string) => {
    if (category === "todos") return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Portfólio de
            <span className="text-transparent bg-clip-text bg-gradient-primary ml-3">
              Automações
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Especializações em automação para área da saúde utilizando n8n e outras tecnologias modernas.
            Transformando processos manuais em fluxos automatizados eficientes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card/10 backdrop-blur-sm border-white/10 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8 bg-card/10 backdrop-blur-sm border-white/10">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-300 text-xs md:text-sm"
              >
                <category.icon className="w-4 h-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects(category.id).map((project, index) => (
                  <Card 
                    key={project.id} 
                    className="group bg-card/10 backdrop-blur-sm border-white/10 hover:bg-card/20 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={`${getStatusColor(project.status)} border`}>
                          {project.status}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          {project.duration}
                        </span>
                      </div>
                      <CardTitle className="text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Principais Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="text-xs text-gray-400 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Resultados:</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center">
                            <div className="text-primary font-bold">{project.results.efficiency}</div>
                            <div className="text-gray-400">Eficiência</div>
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold">{project.results.timeReduction}</div>
                            <div className="text-gray-400">Economia</div>
                          </div>
                          <div className="text-center">
                            <div className="text-primary font-bold">{project.results.satisfaction}</div>
                            <div className="text-gray-400">Satisfação</div>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        Ver Detalhes
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-primary text-white border-0 shadow-elegant">
          <CardContent className="p-8 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Automatizar sua Clínica ou Farmácia?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Entre em contato e descubra como posso ajudar a modernizar seus processos
              com soluções de automação personalizadas para área da saúde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Solicitar Orçamento
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Ver Mais Projetos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;