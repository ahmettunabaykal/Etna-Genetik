import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Genel Sorular",
      items: [
        {
          question: "ETNA Genetik nedir?",
          answer: "ETNA Genetik, ileri genetik test ve analiz hizmetleri sunan bir sağlık kuruluşudur. Genetik yapınızı anlayarak sağlığınızı korumak, hastalık riskinizi değerlendirmek ve kişisel sağlık planları oluşturmak için genetik bilimi kullanıyoruz."
        },
        {
          question: "Genetik testler neden önemlidir?",
          answer: "Genetik testler, sağlık durumunuz, hastalık riskiniz ve ilaca yanıtınız gibi konularda kişiselleştirilmiş bilgiler sağlar. Bu bilgiler, sağlık kararlarınızı bilimsel temelle almanıza, hastalık risklerinizi azaltmanıza ve yaşam kalitenizi artırmanıza yardımcı olabilir."
        },
        {
          question: "Genetik test yaptırmak için doktor tavsiyesi gerekli midir?",
          answer: "Bazı genetik testler doktor tavsiyesi gerektirmese de, test sonuçlarınızın doğru yorumlanması ve klinik olarak anlamlı önerilerin geliştirilmesi için sağlık profesyonelleriyle çalışmanızı öneririz. ETNA Genetik'te, her müşterimize kapsamlı genetik danışmanlık hizmeti sunuyoruz."
        }
      ]
    },
    {
      title: "Test Süreci",
      items: [
        {
          question: "Genetik test süreciniz nasıl işler?",
          answer: "Genetik test sürecimiz genellikle şu adımları içerir: 1) Bir danışma oturumunda ihtiyaçlarınızı ve hedeflerinizi belirleriz. 2) Uygun test paketini seçeriz. 3) Tükürük veya kan örneği alınır. 4) Örneğiniz laboratuvarımızda analiz edilir. 5) Sonuçlar uzman genetik danışmanlarımız tarafından yorumlanır. 6) Kapsamlı bir rapor ve kişiselleştirilmiş önerilerle birlikte sonuçlarınız sizinle paylaşılır. 7) İhtiyaç duyarsanız, takip görüşmeleri sunulur."
        },
        {
          question: "Örnek toplama işlemi nasıl yapılır?",
          answer: "Test türüne bağlı olarak, tükürük, yanak swabı veya kan örneği alınabilir. Tükürük ve yanak swabı örnekleri genellikle evde, evinize gönderilen toplama kitleriyle kolayca alınabilir. Kan örneği gerektiren testler için ise, ETNA Genetik merkezlerimize veya anlaşmalı laboratuvarlarımıza kısa bir ziyaret gerekir."
        },
        {
          question: "Test sonuçlarını ne kadar sürede alırım?",
          answer: "Test sonuçları, test türüne bağlı olarak genellikle 2-4 hafta içinde hazır olur. Bazı özel testler daha uzun sürebilir, bazıları ise hızlandırılmış hizmetlerle daha kısa sürede tamamlanabilir. Örneğiniz laboratuvara ulaştığında, size tahmini bir zaman çerçevesi sunulacaktır."
        }
      ]
    },
    {
      title: "Sonuçlar ve Gizlilik",
      items: [
        {
          question: "Test sonuçlarımı nasıl alacağım?",
          answer: "Test sonuçlarınız hazır olduğunda, güvenli çevrimiçi portalımız aracılığıyla erişebilirsiniz. Ayrıca, bir genetik danışman sonuçlarınızı detaylı olarak açıklamak ve sorularınızı yanıtlamak için sizinle bir görüşme ayarlayacaktır. Talep edilirse, sonuçlarınızın basılı bir kopyası da sağlanabilir."
        },
        {
          question: "Genetik verilerimin gizliliği nasıl korunur?",
          answer: "ETNA Genetik'te veri gizliliği en öncelikli konumuzdur. Genetik verileriniz, en yüksek güvenlik standartlarına uygun şekilde saklanır ve korunur. Verileriniz, açık izniniz olmadan üçüncü taraflarla paylaşılmaz. KVKK ve GDPR gibi veri koruma düzenlemelerine tam uyum sağlıyoruz. Gizlilik politikamız hakkında daha fazla bilgi edinmek için web sitemizin gizlilik bölümünü ziyaret edebilirsiniz."
        },
        {
          question: "Test sonuçlarım sigortam veya işverenimle paylaşılacak mı?",
          answer: "Genetik test sonuçlarınız sizin açık izniniz olmadan sigorta şirketleri, işverenler veya diğer üçüncü taraflarla paylaşılmaz. Genetik bilgilerinizin kontrolü tamamen sizdedir. Ancak, tıbbi hizmet sağlayıcınızla bilgi paylaşmayı seçerseniz, bu bilgiler tıbbi kayıtlarınızın bir parçası haline gelebilir."
        }
      ]
    },
    {
      title: "Hizmetler",
      items: [
        {
          question: "Hangi tür genetik testleri sunuyorsunuz?",
          answer: "ETNA Genetik'te geniş bir genetik test yelpazesi sunuyoruz: 1) Sağlık ve Wellness: Beslenme genetiği, spor genetiği, cilt sağlığı analizleri 2) Hastalık Risk Değerlendirmeleri: Kardiyovasküler hastalıklar, kanser, nörodejeneratif hastalıklar 3) İlaç Genomikleri: İlaç metabolizması ve etkinlik analizleri 4) Aile Planlaması: Taşıyıcılık taraması, üreme genetiği 5) Onkoloji: Tümör profilleme, hedefli tedavi seçimi 6) Pediatrik Genetik: Yenidoğan taraması, gelişimsel bozukluklar. Her test hakkında detaylı bilgi için hizmetler sayfamızı ziyaret edebilirsiniz."
        },
        {
          question: "Genetik danışmanlık hizmetleriniz nelerdir?",
          answer: "Genetik danışmanlık, genetik test sürecinin kritik bir parçasıdır. Test öncesi danışmanlık, hangi testlerin size en uygun olduğunu belirlemeye yardımcı olur ve beklentilerinizi netleştirir. Test sonrası danışmanlık ise sonuçlarınızı anlamanıza, risk faktörlerinizi değerlendirmenize ve kişiselleştirilmiş sağlık stratejileri geliştirmenize yardımcı olur. Tüm danışmanlık hizmetlerimiz, genetik alanında uzmanlaşmış, sertifikalı danışmanlar tarafından sunulur."
        },
        {
          question: "Klinik genetik testler ve tüketici genetik testleri arasındaki fark nedir?",
          answer: "Klinik genetik testler, tıbbi kararları bilgilendirmek için tasarlanmış, daha kapsamlı ve derinlemesine analizlerdir. Genellikle sağlık profesyonelleri tarafından istenir ve sıkı düzenleyici standartlara tabidir. Tüketici genetik testleri ise daha genel sağlık, wellness ve atalarla ilgili bilgiler sağlamak için tasarlanmıştır ve genellikle doğrudan tüketicilere satılır. ETNA Genetik'te sunduğumuz testler, klinik derecede doğruluğa sahiptir ve kanıta dayalı tıbbi önerileri destekler."
        }
      ]
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-gray-600">
            Genetik testler ve hizmetlerimiz hakkında en çok sorulan soruların cevaplarını bulun.
            Başka sorularınız varsa, lütfen <span className="text-primary-600 font-semibold">bizimle iletişime geçin</span>.
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">{category.title}</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem 
                    key={itemIndex} 
                    value={`item-${index}-${itemIndex}`}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center p-8 bg-primary-50 rounded-xl border border-primary-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Sorunuzu Bulamadınız mı?</h3>
          <p className="text-gray-600 mb-6">
            Daha fazla sorunuz varsa veya daha fazla bilgiye ihtiyaç duyuyorsanız, uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <a 
            href="/iletisim" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Bizimle İletişime Geçin
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;