import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Dna, Heart, FlaskRound, Baby, 
  Microscope, Activity 
} from "lucide-react";

interface GeneticTestProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GeneticTestCard = ({ icon, title, description }: GeneticTestProps) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
              {icon}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 font-heading">{title}</h3>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-base text-gray-500">
            {description}
          </p>
          <div className="mt-5">
            <Button asChild size="sm">
              <Link href="/hizmetlerimiz">
                Daha Fazla Bilgi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeneticTests = () => {
  const geneticTests = [
    {
      icon: <Dna className="h-6 w-6" />,
      title: "Tüm Ekzom Dizileme (WES)",
      description: "Tüm ekzom dizileme (WES), protein kodlayan genlerin analizini sağlayarak hastalık yapıcı mutasyonları belirlemede en güçlü araçlardan biridir."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Tıbbi-Onkoloji Testleri",
      description: "Solid tümörler ve kanser türlerinin tanısını destekleyen genetik testler, kişiye özel tedavi planları için kritik bilgiler sunar."
    },
    {
      icon: <FlaskRound className="h-6 w-6" />,
      title: "Hemato-Onkoloji Testleri",
      description: "Kan kanserleri ve hematolojik bozuklukların teşhisi ve yönetimi için geliştirilmiş genetik analiz testleridir."
    },
    {
      icon: <Dna className="h-6 w-6" />,
      title: "Moleküler Yapısal Analiz",
      description: "DNA'nızın yapısını inceleyerek sağlık üzerinde etkili olabilecek genetik varyasyonları belirlemek için gelişmiş analizler sunuyoruz."
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Sito-FISH Yapısal Analiz",
      description: "Kromozomal yapıları detaylı şekilde görselleştirerek genetik bozuklukların teşhisinde kritik rol oynayan ileri düzey analiz."
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Doğum Öncesi Testler",
      description: "Fetüsün potansiyel genetik durumlarını belirlemeye yardımcı olan doğum öncesi testlerimiz ile geleceğe güvenle adım atın."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Hizmetlerimiz</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">Genetik Testlerimiz</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Sağlık ihtiyaçlarınıza göre özelleştirilmiş genetik test çözümlerimiz
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {geneticTests.map((test, index) => (
            <GeneticTestCard
              key={index}
              icon={test.icon}
              title={test.title}
              description={test.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneticTests;
