import { motion } from "framer-motion";
import { Shield, Eye, Clock, UserCheck, FileText, Lock, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KVKKPage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading mb-4">Kişisel Verilerin Korunması</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ETNA olarak kişisel ve genetik verilerinizin korunması en büyük önceliğimizdir. 
            KVKK kapsamında haklarınız ve uygulamalarımız hakkında bilgi alın.
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
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yasal Uyumluluk</h3>
                <p className="text-gray-600">
                  Tüm faaliyetlerimiz 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuata tam uyumlu şekilde yürütülmektedir.
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
                  <Eye className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Şeffaflık</h3>
                <p className="text-gray-600">
                  Kişisel verilerinizin hangi amaçlarla işlendiği, kimlerle paylaşıldığı ve haklarınız konusunda açık ve anlaşılır bilgilendirme yapıyoruz.
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
                  <Lock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenlik Önlemleri</h3>
                <p className="text-gray-600">
                  Kişisel verileriniz, ileri teknik ve idari güvenlik önlemleriyle koruma altına alınmakta ve yetkisiz erişimlere karşı korunmaktadır.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">KVKK Aydınlatma Metni</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Veri Sorumlusu</h3>
            <p className="mb-0">
              ETNA A.Ş. ("ETNA"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu olarak hareket etmektedir. Bu aydınlatma metni, kişisel verilerinizin işlenmesine ilişkin bilgilendirme amacıyla hazırlanmıştır.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">2. İşlenen Kişisel Veriler</h3>
            <p className="mb-4">
              ETNA olarak aşağıdaki kişisel verilerinizi işlemekteyiz:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres</li>
              <li><strong>Sağlık Bilgileri:</strong> Genetik test sonuçları, tıbbi geçmiş, aile sağlık öyküsü</li>
              <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura bilgileri</li>
              <li><strong>Diğer Bilgiler:</strong> Web sitesi kullanım verileri, hizmet talepleri, şikayet ve öneriler</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Kişisel Verilerin İşlenme Amaçları</h3>
            <p className="mb-4">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Genetik test ve analiz hizmetlerinin sunulması</li>
              <li>Teşhis, tedavi ve sağlık danışmanlığı hizmetlerinin sağlanması</li>
              <li>Yasal ve düzenleyici gerekliliklerin yerine getirilmesi</li>
              <li>İletişim ve bilgilendirme faaliyetlerinin yürütülmesi</li>
              <li>Hizmet kalitesinin değerlendirilmesi ve iyileştirilmesi</li>
              <li>Talep ve şikayetlerin takibi ve yanıtlanması</li>
              <li>Faturalandırma ve ödeme işlemlerinin gerçekleştirilmesi</li>
              <li>Bilimsel araştırma ve geliştirme faaliyetlerinin yürütülmesi (anonimleştirilmiş verilerle)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Kişisel Verilerin Aktarılması</h3>
            <p className="mb-4">
              Kişisel verileriniz, belirtilen amaçların gerçekleştirilmesi için gerekli olduğu durumlarda ve ilgili mevzuat çerçevesinde aşağıdaki alıcılara aktarılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Sağlık hizmetlerinin sağlanması amacıyla iş birliği içinde olduğumuz laboratuvarlar ve sağlık kuruluşları</li>
              <li>Yasal zorunluluklar nedeniyle kamu kurum ve kuruluşları</li>
              <li>Ödeme işlemleri için finans kuruluşları</li>
              <li>İş ortaklarımız ve hizmet sağlayıcılarımız</li>
            </ul>
            <p className="mt-4 mb-0">
              Kişisel verileriniz, açık rızanız olmadan üçüncü kişilere aktarılmaz, pazarlama amacıyla kullanılmaz ve yurt dışına aktarılmaz (laboratuvar analizleri için zorunlu durumlar hariç).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">5. Kişisel Verilerin Korunması İçin Alınan Önlemler</h3>
            <p className="mb-4">
              ETNA, kişisel verilerinizin gizliliğini ve güvenliğini korumak için aşağıdaki önlemleri almaktadır:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Veri güvenliği için gerekli teknik ve idari tedbirler</li>
              <li>Fiziksel ve elektronik güvenlik sistemleri</li>
              <li>Çalışanlar için gizlilik politikaları ve düzenli eğitimler</li>
              <li>Yetkisiz erişimlere karşı koruma mekanizmaları</li>
              <li>Düzenli güvenlik denetimleri ve risk değerlendirmeleri</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">6. KVKK Kapsamında Haklarınız</h3>
            <p className="mb-4">
              KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere düzeltme, silme veya yok etme işlemlerinin bildirilmesini isteme</li>
              <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">7. İletişim Bilgileri</h3>
            <p className="mb-0">
              Kişisel verilerinizle ilgili her türlü talep ve sorularınız için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4 mb-0">
              <li><strong>ETNA A.Ş.</strong></li>
              <li>Adres: [Maslak Mahallesi , Eski Büyükdere caddesi, İz Plaza Giz, No: 9,
                İç Kapı No: 78, Zemin Kat, Sarıyer, İstanbul]</li>
              <li>E-posta: info@etnahealth.com.tr</li>
              <li>Telefon: [0532 120 75 00]</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-primary-50 rounded-lg p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">KVKK Kapsamında Talepte Bulunmak İster misiniz?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kişisel verilerinizle ilgili bilgi almak, düzeltme veya silme talebinde bulunmak için bizimle iletişime geçebilirsiniz.
          </p>
          <Button className="px-6 py-3">
            <a href="/iletisim">İletişim Formu</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default KVKKPage;