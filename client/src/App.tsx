import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NoorChatbot from "./components/NoorChatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import QuranCorrection from "./pages/QuranCorrection";
import Zakat from "./pages/Zakat";
import Enrol from "./pages/Enrol";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Donate} />
      <Route path="/quran-correction" component={QuranCorrection} />
      <Route path="/zakat" component={Zakat} />
      <Route path="/enrol" component={Enrol} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <NoorChatbot />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
