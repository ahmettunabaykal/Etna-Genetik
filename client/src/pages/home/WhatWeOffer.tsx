import { 
  Dna, Microscope, FlaskConical, Heart 
} from "lucide-react";

interface OfferProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OfferCard = ({ icon, title, description }: OfferProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-900 font-heading">{title}</h3>
        <p className="mt-2 text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  const offers = [
    {
      icon: <Dna className="text-primary-600 h-6 w-6" />,
      title: "Kişiye Özel Sağlık Planları",
      description: "Sağlık geçmişiniz ve genetik yapınıza uygun özel programlar oluşturuyor, yaşam kalitenizi artırmak için rehberlik ediyoruz."
    },
    {
      icon: <Microscope className="text-primary-600 h-6 w-6" />,
      title: "Öncü Teşhis ve Tedavi Yöntemleri",
      description: "En son teknolojilere dayalı testlerimizle, özellikle kanser ve nadir hastalıklarda tanı ve tedaviye yönelik analiz hizmetleri sunuyoruz."
    },
    {
      icon: <FlaskConical className="text-primary-600 h-6 w-6" />,
      title: "Bilimsel ve Güvenilir Yaklaşım",
      description: "Alanında uzman genetik danışmanlarımız ve ileri düzey laboratuvarlarımız ile hızlı ve güvenilir sonuçlar elde edin."
    },
    {
      icon: <Heart className="text-primary-600 h-6 w-6" />,
      title: "Sürekli Takip ve Destek",
      description: "Test sonrası süreçte de yanınızda olarak, sonuçlarınızı anlamanız ve doğru sağlık kararları vermeniz için destek sağlıyoruz."
    }
  ];

  return (
    <section id="offers" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Neler Sunuyoruz</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">Genetik Alanında Uzman Çözümler</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Dünya standartlarında genetik test hizmetlerimizle sağlığınızı daha yakından tanıyın.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              icon={offer.icon}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
