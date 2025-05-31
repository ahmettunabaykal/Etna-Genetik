import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-700 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-extrabold text-white font-heading sm:text-4xl">
                  Genetik Geleceğinizi Keşfedin
                </h2>
                <p className="mt-4 text-lg text-primary-100">
                  ETNA ile sağlığınız için en doğru adımları atın. Uzman ekibimiz sorularınızı yanıtlamak ve size en uygun genetik testi önermek için hazır.
                </p>
                <div className="mt-8 flex">
                  <Button asChild variant="secondary" className="text-primary-700 bg-white hover:bg-primary-50">
                    <Link href="/iletisim">
                      Bizimle İletişime Geçin
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <img 
                  src="genetik_lab.jpg" 
                  alt="Genetik Laboratuvarı" 
                  className="rounded-lg shadow-lg max-h-64" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
