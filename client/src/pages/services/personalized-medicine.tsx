import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { HeartPulse, TestTube, FileText, Dna, Brain, Pill, Activity, BarChart } from "lucide-react";



const PersonalizedMedicinePage = () => {
  return (
    <ServiceDetailPage
      title="Kişiselleştirilmiş Tıp"
      subtitle="Genetik profilinize dayalı kişiselleştirilmiş sağlık planları ile hayat kalitenizi artırın"
      icon={<HeartPulse className="h-6 w-6" />}
      heroImage="/kisisellestirilmis_tip.jpg"

      description={[
        "Kişiselleştirilmiş tıp yaklaşımımız, benzersiz genetik yapınızı analiz ederek size özel bir sağlık stratejisi geliştirmenize yardımcı olur. Her birey, hastalıklara yatkınlık, ilaç yanıtları ve yaşam tarzı faktörlerine tepki bakımından farklıdır.",
        "Genetik yapınız, yaşam tarzı değişikliklerine nasıl yanıt vereceğinizi belirler. Kişiselleştirilmiş tıp hizmetimiz ile DNA'nızın benzersiz yapısını analiz ederek, sizin için en etkili sağlık yaklaşımlarını belirliyor ve doktorunuzla birlikte çalışarak genetik yapınıza uygun tedavi ve koruyucu sağlık planları oluşturuyoruz.",
        "ETNA Kişiselleştirilmiş Tıp hizmeti, hastalık risklerinizi önceden belirleyip, önleyici stratejiler geliştirmenize, ilaç tepkilerinizi öngörüp en etkili tedavileri seçmenize ve genlerinize uygun beslenme, egzersiz ve yaşam tarzı planları oluşturmanıza olanak tanır."
      ]}
      benefits={[
        "Kişiye özel sağlık ve beslenme planları",
        "İlaç tepkilerinin önceden belirlenmesi (Farmakogenomik)",
        "Risk faktörlerinin erken tespiti ve önleyici stratejiler",
        "Yaşam boyu sağlık stratejileri ve takip",
        "Kronik hastalık yönetimi için kişiselleştirilmiş yaklaşımlar",
        "Sağlık bakımında gereksiz maliyetlerin azaltılması"
      ]}
      process={[
        {
          title: "Kapsamlı Genetik Analiz",
          description: "Kişiselleştirilmiş Tıp yaklaşımı, kapsamlı bir genetik analiz ile başlar. DNA örneğiniz, sağlık ve hastalık riskleri, ilaç yanıtları ve beslenme genetiği açısından değerlendirilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Multidisipliner Değerlendirme",
          description: "Genetik analiz sonuçlarınız, klinik uzmanlar, genetik danışmanlar, beslenme uzmanları ve diğer sağlık profesyonelleri tarafından değerlendirilir ve bütünsel bir sağlık profili oluşturulur.",
          icon: <Brain className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Sağlık Planı",
          description: "Analiz sonuçlarına dayanarak, sizin için özel olarak tasarlanmış bir sağlık ve önleyici bakım planı oluşturulur. Bu plan, beslenme, egzersiz, tarama testleri ve yaşam tarzı önerilerini içerir.",
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: "Sürekli İzleme ve Güncelleme",
          description: "Sağlık durumunuzdaki değişiklikler ve yeni bilimsel bulgular ışığında sağlık planınız düzenli olarak güncellenir ve geliştirilir.",
          icon: <Activity className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Kişiselleştirilmiş tıp yaklaşımı hangi sağlık durumları için en faydalıdır?",
          answer: "Kişiselleştirilmiş tıp yaklaşımı özellikle kardiyovasküler hastalıklar, diyabet, kanser, nörodejeneratif hastalıklar ve otoimmün hastalıklar gibi kompleks ve kronik sağlık durumları için oldukça yararlıdır. Ayrıca, aile öyküsünde önemli sağlık sorunları bulunan kişiler, optimal ilaç tedavisi arayan hastalar ve sağlıklı yaşam sürmek isteyen herkes için değerli bilgiler sağlar."
        },
        {
          question: "Kişiselleştirilmiş tıp yaklaşımı, mevcut tedavimi nasıl etkileyebilir?",
          answer: "Genetik analizler, belirli ilaçlara nasıl yanıt vereceğinizi (farmakogenomik) belirleyebilir ve doktorunuzun tedavinizi optimize etmesine yardımcı olabilir. Bu sayede daha etkili ilaç dozları, yan etki riskinin azaltılması ve tedavi yanıtının iyileştirilmesi mümkün olur. Ancak, mevcut tedavinizde değişiklik yapmadan önce her zaman sağlık uzmanınıza danışmanız önemlidir."
        },
        {
          question: "Sonuçlarım doktorlarım tarafından anlaşılabilir ve kullanılabilir mi?",
          answer: "Evet, raporlarımız hem hastalar hem de sağlık profesyonelleri için anlaşılır olacak şekilde tasarlanmıştır. Ayrıca, doktorların sonuçları klinik uygulamada kullanabilmeleri için klinik uzmanlarımız tarafından detaylı açıklamalar ve öneriler içerir. İhtiyaç duyulması halinde doktorunuzla direkt iletişim kurarak sonuçların yorumlanması konusunda destek sağlıyoruz."
        },
        {
          question: "Kişiselleştirilmiş tıp, geleneksel tıp yaklaşımının yerini alır mı?",
          answer: "Kişiselleştirilmiş tıp, geleneksel tıp yaklaşımının yerini almaktan ziyade onu tamamlar ve geliştirir. Genetik bilgiler, doktorların daha bilinçli klinik kararlar almasına yardımcı olur. İdeal sağlık bakımı, genetik bilgilerin klinik bulgular, yaşam tarzı faktörleri ve hasta tercihleri ile birlikte değerlendirilmesini içerir."
        },
        {
          question: "Kişiselleştirilmiş tıp yaklaşımı, sağlık sigortası kapsamına girer mi?",
          answer: "Sağlık sigortalarının kişiselleştirilmiş tıp hizmetlerini kapsama durumu değişkenlik gösterir. Bazı sigorta şirketleri, belirli genetik testleri ve kişiselleştirilmiş tıp uygulamalarını kısmen veya tamamen karşılayabilir. Size özel bilgi için sigorta şirketinizle iletişime geçmenizi öneririz. Biz de bu süreçte size yardımcı olmaktan memnuniyet duyarız."
        }
      ]}
      cta={{
        title: "Genetik Yapınıza Uygun Kişiselleştirilmiş Sağlık Planı İçin İlk Adımı Atın",
        description: "ETNA Kişiselleştirilmiş Tıp hizmeti ile genetik profilinize dayalı optimal sağlık stratejileri geliştirin. Sağlığınızı şansa bırakmayın, bilimsel bulgulara dayalı kişiselleştirilmiş yaklaşımlarla yaşam kalitenizi artırın."
      }}
    />
  );
};

export default PersonalizedMedicinePage;