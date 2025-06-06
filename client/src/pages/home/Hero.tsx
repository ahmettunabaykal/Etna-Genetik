import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-heading">
                <span className="block">Genetik Testlerle</span>
                <span className="block text-primary-600">Sağlığınızı Keşfedin</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Size özel genetik analizlerle sağlık risklerinizi önceden belirleyin ve kişiselleştirilmiş çözümler sunan testlerimizle tanışın.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="px-8 py-3 text-base">
                  <Link href="hizmetlerimiz">
                    Testlerimizi Keşfedin
                  </Link>
                </Button>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base text-primary-700 bg-primary-100 hover:bg-primary-200 border-transparent">
                    <Link href="hakkimizda">
                      Hakkımızda
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="DNA genetik laboratuvarı" />
      </div>
    </section>
  );
};

export default Hero;
