import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading">Hakkımızda</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ETNA Genetik, genetik testler alanında Türkiye'nin önde gelen kuruluşlarından biridir. 
            Sapiens Laboratuvarları ile iş birliği içinde en son teknolojiye sahip genetik testleri 
            sunarak sağlık alanında yenilikçi çözümler getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-4">Misyonumuz</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  Genetik bilimini herkes için erişilebilir kılmak ve kişiselleştirilmiş sağlık 
                  hizmetlerinin yaygınlaşmasına öncülük etmek amacıyla çalışıyoruz. İnsanların 
                  kendi genetik yapılarını tanıyarak daha sağlıklı yaşam kararları almalarına 
                  yardımcı olmayı hedefliyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-4">Vizyonumuz</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  Genetik biliminin gücünü kullanarak sağlık hizmetlerinin geleceğini şekillendiren 
                  ve hastalıkların önlenmesinde devrim yaratan global bir lider olmak. Tüm insanların 
                  genetik bilgilerini kullanarak kişiselleştirilmiş sağlık çözümlerine erişebildiği 
                  bir dünya yaratmak için çalışıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-6">Sapiens Laboratuvarları ile İş Birliğimiz</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="p-6 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-xl">S</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-800 font-heading">SAPIENS<span className="text-secondary-600">Lab</span></span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700">
                ETNA Genetik, Sapiens Laboratuvarları ile stratejik bir ortaklık kurarak genetik test 
                hizmetlerinde mükemmelliği hedeflemektedir. Sapiens'in ileri düzey laboratuvar altyapısı 
                ve deneyimli bilim insanları kadrosu sayesinde, en yüksek kalite standartlarında ve 
                güvenilir test sonuçları sunabiliyoruz. Bu işbirliği, müşterilerimize sunduğumuz genetik 
                test portföyünü sürekli genişletmemize ve en son teknolojik gelişmeleri hizmetlerimize 
                entegre etmemize olanak tanıyor.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3">Bilimsel Mükemmellik</h3>
                <p className="text-gray-700">
                  En son bilimsel araştırmaları ve teknolojileri kullanarak genetik test hizmetlerimizde 
                  sürekli gelişimi hedefliyoruz.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3">Müşteri Odaklılık</h3>
                <p className="text-gray-700">
                  Müşterilerimizin ihtiyaçlarını anlamak, onlara kişiselleştirilmiş hizmet sunmak ve 
                  en iyi deneyimi yaşatmak için çalışıyoruz.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3">Etik ve Gizlilik</h3>
                <p className="text-gray-700">
                  Genetik verilerinizin gizliliğini en üst düzeyde koruyor, tüm faaliyetlerimizde etik 
                  ilkelere bağlı kalıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="ekibimiz" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-8 text-center">Uzman Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 font-heading">Prof. Dr. Mehmet Yılmaz</h3>
                <p className="text-gray-600">Genetik Uzmanı, Tıbbi Direktör</p>
                <p className="mt-4 text-gray-700 text-left">
                  20 yılı aşkın klinik genetik deneyimiyle, dünya çapında tanınan bir genetik uzmanıdır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 font-heading">Dr. Ayşe Kaya</h3>
                <p className="text-gray-600">Moleküler Biyolog, Araştırma Direktörü</p>
                <p className="mt-4 text-gray-700 text-left">
                  Moleküler genetik alanındaki çalışmalarıyla tanınan, yenilikçi tanı yöntemleri geliştiren bir uzmandır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 font-heading">Uzm. Dr. Kemal Demir</h3>
                <p className="text-gray-600">Genetik Danışman</p>
                <p className="mt-4 text-gray-700 text-left">
                  Hastalarla doğrudan çalışarak genetik test sonuçlarını anlamalarına ve doğru sağlık kararları vermelerine yardımcı olur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
