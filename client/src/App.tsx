import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProyectosExteriores from "./components/ProyectosExteriores";
import ProyectosInteriores from "./components/ProyectosInteriores";
import ProyectoDetalle from "./components/ProyectoDetalle";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proyectos/exteriores" component={ProyectosExteriores} />
      <Route path="/proyectos/interiores" component={ProyectosInteriores} />
      <Route path="/proyectos/:slug" component={ProyectoDetalle} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
           <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
