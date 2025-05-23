import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Activity, TestTube, FileText, Dna, Microscope, PieChart, Target, BarChart } from "lucide-react";

const CancerGeneticsPage = () => {
  return (
    <ServiceDetailPage
      title="Kanser Genetiği ve Kişiye Özel Tedavi"
      subtitle="Kanser tedavinizi genetik profilinize göre optimize edin, en etkili tedavi seçeneklerini belirleyin"
      icon={<Activity className="h-6 w-6" />}
      heroImage="https://media.istockphoto.com/id/1477214805/tr/foto%C4%9Fraf/cancer-detection.jpg?s=2048x2048&w=is&k=20&c=t65EIPTwpBDSNwhZ1pz7LrFUb-GtcEdJ3-Td3PGCO_Y="
      description={[
        "Kanser genetiği testlerimiz, tümör hücrelerinizdeki genetik değişiklikleri tespit ederek, kanser tipiniz için en etkili tedavi seçeneklerini belirlemenize yardımcı olur.",
        "Modern kanser tedavisinde, 'tek boy herkese uyar' yaklaşımı artık geçerliliğini yitirmiştir. Her kanser genetik olarak benzersizdir ve tedaviye yanıtı belirleyen moleküler özelliklere sahiptir. Kanser genetiği testlerimiz, tümörünüzün genetik profilini çıkararak, hangi tedavilerin sizin için en etkili olacağını, hangi ilaçlara direnç gösterebileceğinizi ve hangi yan etkilere yatkın olabileceğinizi belirlemeye yardımcı olur.",
        "Sapiens Genetik Kanser Testleri, hedefe yönelik tedavilerin etkinliğini değerlendirmek, kemoterapiye yanıtı tahmin etmek, immünoterapi için uygunluğu belirlemek ve klinik çalışmalara katılım için uygunluğunuzu değerlendirmek için kullanılabilir. Bu testler, onkologunuzun tedavi planınızı kişiselleştirmesine ve optimal sonuçlar elde etmenize yardımcı olur."
      ]}
      benefits={[
        "Tümör genetik profili çıkarma",
        "Hedefe yönelik tedavilerin etkinliğini tahmin etme",
        "İlaç direnci mekanizmalarının belirlenmesi",
        "İmmünoterapi yanıtının öngörülmesi",
        "Kişiselleştirilmiş kanser tedavi planları",
        "Uygun klinik çalışmalar için eşleştirme"
      ]}
      process={[
        {
          title: "Tümör Örneği Toplama",
          description: "Test süreci, genellikle standart biyopsi veya ameliyat sırasında alınan tümör doku örneğiyle başlar. Gerekli durumlarda, daha önce alınmış ve patoloji laboratuvarında saklanan doku örnekleri de kullanılabilir.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Kapsamlı Genomik Profilleme",
          description: "Tümör örneğiniz, kanser gelişiminde ve tedavi yanıtında rol oynayan yüzlerce genin mutasyonları, kopya sayısı değişiklikleri, gen füzyonları ve gen ekspresyonu için analiz edilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Biyoinformatik Analiz",
          description: "Gelişmiş biyoinformatik algoritmalar kullanılarak, tümörünüzün genetik profili değerlendirilir ve klinik olarak önemli genetik değişiklikler belirlenir.",
          icon: <BarChart className="h-6 w-6" />
        },
        {
          title: "Klinik Yorumlama ve Raporlama",
          description: "Genomik bulgularınız, deneyimli moleküler onkologlar ve genetik uzmanları tarafından değerlendirilir. Sonuçlar, onkologunuz için anlaşılır bir formatta, tedavi seçenekleri, klinik çalışmalar ve prognostik bilgilerle birlikte raporlanır.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Hangi kanser türleri için genetik testler yapıyorsunuz?",
          answer: "Etna olarak, tüm solid tümörler (meme, akciğer, kolorektal, prostat, over, melanoma vb.) ve hematolojik maligniteler (lösemi, lenfoma vb.) için kapsamlı genetik testler sunuyoruz. Test portföyümüz sürekli genişlemekte ve en son bilimsel gelişmeleri takip etmektedir."
        },
        {
          question: "Kanser genetik testleri tedavi kararlarını nasıl etkiler?",
          answer: "Kanser genetik testleri, tedavi kararlarını birkaç şekilde etkileyebilir: 1) Hedefe yönelik tedaviler için uygunluğunuzu belirleyebilir (örn. EGFR, ALK, BRAF, HER2 hedefli tedaviler), 2) İmmünoterapi yanıtını tahmin edebilir, 3) Kemoterapi seçimini ve dozunu optimize edebilir, 4) Prognoz hakkında bilgi sağlayabilir, 5) Klinik çalışmalara katılım için uygunluğunuzu değerlendirebilir. Bu bilgiler, onkologunuzun tedavi planınızı kişiselleştirmesine ve en etkili tedavi yaklaşımını seçmesine yardımcı olur."
        },
        {
          question: "Sonuçlar ne kadar sürede alınır?",
          answer: "Test tipine bağlı olarak, sonuçlar genellikle 7-21 iş günü içinde hazır olur. Test süreci başladığında, size tahmini bir sonuç tarihi verilecektir."
        },
        {
          question: "Testler sağlık sigortası kapsamında karşılanıyor mu?",
          answer: "Birçok sağlık sigortası şirketi, klinik olarak endike olan kanser genetik testlerini kısmen veya tamamen karşılamaktadır. Ancak, kapsam detayları sigorta şirketine ve poliçenize göre değişiklik gösterir. Test öncesinde, finansal danışmanlarımız sizinle birlikte sigorta kapsamınızı değerlendirir ve olası maliyetler hakkında şeffaf bilgi sağlar. Ayrıca, ödeme planları ve finansal destek seçenekleri konusunda da yardımcı oluruz."
        },
        {
          question: "Tümör dokusuna ulaşılamayan durumlarda alternatif test seçenekleri var mı?",
          answer: "Evet, tümör dokusuna ulaşılamayan veya biyopsi yapmanın riskli olduğu durumlarda, sıvı biyopsi (liquid biopsy) adı verilen kan bazlı testler sunuyoruz. Bu testler, dolaşımdaki tümör DNA'sını (ctDNA) analiz ederek, tümörünüzün genetik profilini belirleyebilir. Sıvı biyopsi, özellikle ileri evre kanserlerde, tedavi yanıtının izlenmesinde ve direnç mekanizmalarının belirlenmesinde değerli bir araç olabilir."
        }
      ]}
      cta={{
        title: "Kişiselleştirilmiş Kanser Tedavisi İçin İlk Adımı Atın",
        description: "Sapiens Genetik Kanser Testleri ile tümörünüzün genetik profilini çıkarın ve sizin için en etkili tedavi seçeneklerini belirleyin. Kanser tedavisinde kişiselleştirilmiş yaklaşımın gücünden yararlanın."
      }}
    />
  );
};

export default CancerGeneticsPage;