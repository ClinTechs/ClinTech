import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";  // Página inicial do site principal
import NotFound from "./pages/NotFound";  // Página de erro 404
import Portfolio from "./pages/portfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página inicial do site principal */}
          <Route path="/" element={<Index />} />
          {/* Página de erro 404 */}
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Página para qualquer rota desconhecida */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;