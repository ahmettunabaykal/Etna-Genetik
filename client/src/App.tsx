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
import FAQ from "@/pages/faq";
import Glossary from "@/pages/glossary";
import KVKK from "@/pages/kvkk";
import CookiePolicy from "@/pages/cookie-policy";

// Service Detail Pages
// Sağlıklı Yaşam ve İyilik Hali Kategorisi
import PersonalizedMedicinePage from "@/pages/services/personalized-medicine";
import NutritionGeneticsPage from "@/pages/services/nutrition-genetics";
import MicrobiomeAnalysisPage from "@/pages/services/microbiome-analysis";
import SportsGeneticsPage from "@/pages/services/sports-genetics";
import SkinHealthPage from "@/pages/services/skin-health";
import AncestryAnalysisPage from "@/pages/services/ancestry-analysis";

// Sağlık ve Genetik Testler Kategorisi
import PoligenicRiskPage from "@/pages/services/polygenic-risk";
import CancerGeneticsPage from "@/pages/services/cancer-genetics";
import HereditaryCancerPage from "@/pages/services/hereditary-cancer";
import CardiovascularTestsPage from "@/pages/services/cardiovascular-tests";
import CarrierScreeningPage from "@/pages/services/carrier-screening";
import NewbornScreeningPage from "@/pages/services/newborn-screening";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/hizmetlerimiz" component={Services} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPostDetail} />
      <Route path="/sss" component={FAQ} />
      <Route path="/genetik-sozluk" component={Glossary} />
      <Route path="/kvkk" component={KVKK} />
      <Route path="/cerez-politikasi" component={CookiePolicy} />
      
      {/* Sağlıklı Yaşam ve İyilik Hali Kategorisi */}
      <Route path="/hizmetlerimiz/kisisellestirilmis-tip" component={PersonalizedMedicinePage} />
      <Route path="/hizmetlerimiz/beslenme-genetigi" component={NutritionGeneticsPage} />
      <Route path="/hizmetlerimiz/mikrobiom-analizi" component={MicrobiomeAnalysisPage} />
      <Route path="/hizmetlerimiz/spor-genetigi" component={SportsGeneticsPage} />
      <Route path="/hizmetlerimiz/cilt-sagligi" component={SkinHealthPage} />
      <Route path="/hizmetlerimiz/soy-agaci-analizi" component={AncestryAnalysisPage} />
      
      {/* Sağlık ve Genetik Testler Kategorisi */}
      <Route path="/hizmetlerimiz/poligenik-risk-skorlari" component={PoligenicRiskPage} />
      <Route path="/hizmetlerimiz/kanser-genetigi" component={CancerGeneticsPage} />
      <Route path="/hizmetlerimiz/kalitsal-kanser-taramasi" component={HereditaryCancerPage} />
      <Route path="/hizmetlerimiz/kardiyovaskuler-testler" component={CardiovascularTestsPage} />
      <Route path="/hizmetlerimiz/tasiyicilik-taramasi" component={CarrierScreeningPage} />
      <Route path="/hizmetlerimiz/yeni-dogan-taramasi" component={NewbornScreeningPage} />
      
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
