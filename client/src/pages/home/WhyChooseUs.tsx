import { Check, FlaskRound, Lock } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Neden Biz?</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">
              Genetik Alanında Öncü Yaklaşım
            </p>
            <p className="mt-4 text-lg text-gray-500">
              ETNA Genetik olarak, dünya standartlarında kalite, bilimsel uzmanlık ve kişiselleştirilmiş hizmet sunuyoruz.
            </p>
            
            <dl className="mt-10 space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900 font-heading">Uzman Kadro</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Alanında deneyimli genetik uzmanları, moleküler biyologlar ve bioinformatik profesyonellerinden oluşan ekibimiz.
                  </dd>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <FlaskRound className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900 font-heading">İleri Teknoloji</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    En son teknolojik cihazlar ve yöntemlerle donatılmış laboratuvarlarımızda yüksek doğrulukta sonuçlar.
                  </dd>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <Lock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium text-gray-900 font-heading">Gizlilik ve Güvenlik</dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Genetik verileriniz en üst düzey güvenlik protokolleri ile korunur ve etik standartlara uygun şekilde işlenir.
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
              <img 
                className="w-full" 
                src="https://images.unsplash.com/photo-1581093196277-9f608bb3733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Laboratuvarda genetik test analizi" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
