import { motion } from "framer-motion";
import { Cookie, ShieldCheck, Clock, FileText, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CookiePolicyPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading mb-4">Çerez Politikası</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ETNA Genetik olarak, web sitemizin kullanımı sırasında hangi çerezleri kullandığımız ve bu çerezlerin nasıl kontrol edileceği konusunda bilgi edinmek için bu politikayı okuyabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Cookie className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Çerez Nedir?</h3>
                <p className="text-gray-600">
                  Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin daha iyi çalışmasını sağlar ve sizin için daha iyi bir deneyim sunmamıza yardımcı olur.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gizlilik ve Güvenlik</h3>
                <p className="text-gray-600">
                  Kullandığımız çerezler, kişisel verilerinizin gizliliğini korumak için tasarlanmıştır ve veri güvenliği standartlarımıza uygun şekilde saklanır ve işlenir.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Çerez Tercihleri</h3>
                <p className="text-gray-600">
                  Çerezlerin nasıl kontrol edileceği ve tarayıcı ayarlarınızı nasıl değiştireceğiniz konusunda detaylı bilgileri bu sayfada bulabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Kullandığımız Çerez Türleri</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Zorunlu Çerezler</h3>
            <p className="mb-4">
              Bu çerezler, web sitemizin temel işlevlerini sağlamak için gereklidir. Bu çerezler olmadan, web sitemiz düzgün çalışmaz ve bu nedenle devre dışı bırakılamazlar.
            </p>
            <table className="min-w-full text-sm text-gray-700 mb-0">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Çerez Adı</th>
                  <th className="text-left py-2 font-medium">Amacı</th>
                  <th className="text-left py-2 font-medium">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">sessid</td>
                  <td className="py-2">Oturum yönetimi</td>
                  <td className="py-2">Oturum süresi</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">csrf_token</td>
                  <td className="py-2">Güvenlik</td>
                  <td className="py-2">Oturum süresi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Analitik Çerezler</h3>
            <p className="mb-4">
              Bu çerezler, web sitemizin nasıl kullanıldığı hakkında bilgi toplar ve site performansını izlememize yardımcı olur. Tüm bilgiler anonimdir ve sizi kişisel olarak tanımlamak için kullanılamaz.
            </p>
            <table className="min-w-full text-sm text-gray-700 mb-0">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Çerez Adı</th>
                  <th className="text-left py-2 font-medium">Amacı</th>
                  <th className="text-left py-2 font-medium">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics - Ziyaretçileri ayırt etmek için kullanılır</td>
                  <td className="py-2">2 yıl</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics - Ziyaretçileri ayırt etmek için kullanılır</td>
                  <td className="py-2">24 saat</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_gat</td>
                  <td className="py-2">Google Analytics - İstek oranını sınırlamak için kullanılır</td>
                  <td className="py-2">1 dakika</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">İşlevsellik Çerezleri</h3>
            <p className="mb-4">
              Bu çerezler, web sitemizde yaptığınız seçimleri (örneğin dil tercihiniz) hatırlamak ve gelişmiş, kişiselleştirilmiş özellikler sunmak için kullanılır.
            </p>
            <table className="min-w-full text-sm text-gray-700 mb-0">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Çerez Adı</th>
                  <th className="text-left py-2 font-medium">Amacı</th>
                  <th className="text-left py-2 font-medium">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">lang</td>
                  <td className="py-2">Kullanıcının dil tercihini saklar</td>
                  <td className="py-2">1 yıl</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">user_settings</td>
                  <td className="py-2">Kullanıcı tercihlerini hatırlar</td>
                  <td className="py-2">1 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Pazarlama Çerezleri</h3>
            <p className="mb-4">
              Bu çerezler, ilgi alanlarınıza ve web tarama alışkanlıklarınıza göre size daha alakalı reklamlar göstermek için kullanılır. Ayrıca, görüntülediğiniz reklamların etkinliğini ölçmeye de yardımcı olurlar.
            </p>
            <table className="min-w-full text-sm text-gray-700 mb-0">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Çerez Adı</th>
                  <th className="text-left py-2 font-medium">Amacı</th>
                  <th className="text-left py-2 font-medium">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">_fbp</td>
                  <td className="py-2">Facebook Piksel - Ziyaretçileri tanımlamak için kullanılır</td>
                  <td className="py-2">3 ay</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">ads_prefs</td>
                  <td className="py-2">Reklam tercihleri</td>
                  <td className="py-2">1 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-heading">Çerezleri Nasıl Kontrol Edebilirim?</h2>
          
          <p className="mb-4">
            Çoğu web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Ancak, çerez ayarlarınızı istediğiniz zaman değiştirebilirsiniz. Tarayıcı ayarlarınızı değiştirerek çerezleri devre dışı bırakabilir veya çerez ayarlarınızı düzenleyebilirsiniz.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Popüler Tarayıcılarda Çerez Ayarları</h3>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Google Chrome:</strong> "Ayarlar" > "Gelişmiş" > "Gizlilik ve Güvenlik" > "Site Ayarları" > "Çerezler ve Site Verileri"</li>
              <li><strong>Mozilla Firefox:</strong> "Seçenekler" > "Gizlilik ve Güvenlik" > "Çerezler ve Site Verileri"</li>
              <li><strong>Safari:</strong> "Tercihler" > "Gizlilik" > "Çerezler ve web sitesi verileri"</li>
              <li><strong>Microsoft Edge:</strong> "Ayarlar" > "Çerezler ve site izinleri"</li>
            </ul>
          </div>
          
          <p className="mb-4">
            Çerezleri devre dışı bırakmak, web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir. Bu nedenle, en iyi kullanıcı deneyimi için çerezlerin etkin olmasını öneririz.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Üçüncü Taraf Çerezleri</h3>
            <p className="mb-0">
              Web sitemizde, Google Analytics, Facebook Pixel gibi üçüncü taraf hizmetleri kullanıyoruz. Bu hizmetler kendi çerezlerini kullanabilir ve bunlar üzerinde doğrudan kontrolümüz yoktur. Bu tür üçüncü taraf çerezleri nasıl kullanacağınız ve devre dışı bırakabileceğiniz hakkında daha fazla bilgi için ilgili üçüncü taraf hizmetlerinin gizlilik politikalarını incelemenizi öneririz.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-heading">Politika Değişiklikleri</h2>
          
          <p className="mb-4">
            Bu Çerez Politikası'nı zaman zaman güncelleyebiliriz. Politikada yapılan önemli değişiklikleri size bildirmek için makul adımlar atacağız, ancak düzenli olarak bu sayfayı kontrol etmenizi öneririz.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Son Güncelleme</h3>
            <p className="mb-0">
              Bu Çerez Politikası son olarak 17 Nisan 2025 tarihinde güncellenmiştir.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-primary-50 rounded-lg p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Daha Fazla Bilgi İçin</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Çerez kullanımımız veya gizlilik uygulamalarımız hakkında sorularınız varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
          </p>
          <Button className="px-6 py-3">
            <a href="/iletisim">İletişim Formu</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;