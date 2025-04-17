import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPostDetail from "@/pages/blog/[id]";

// Service Detail Pages
import NutritionGeneticsPage from "@/pages/services/nutrition-genetics";
import MicrobiomeAnalysisPage from "@/pages/services/microbiome-analysis";
import SportsGeneticsPage from "@/pages/services/sports-genetics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/hizmetlerimiz" component={Services} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPostDetail} />
      
      {/* Service Detail Pages */}
      <Route path="/hizmetlerimiz/beslenme-genetigi" component={NutritionGeneticsPage} />
      <Route path="/hizmetlerimiz/mikrobiom-analizi" component={MicrobiomeAnalysisPage} />
      <Route path="/hizmetlerimiz/spor-genetigi" component={SportsGeneticsPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
