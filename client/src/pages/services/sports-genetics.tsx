import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Dumbbell, Timer, TestTube, FileText, Dna, Heart, Zap, ShieldCheck } from "lucide-react";

const SportsGeneticsPage = () => {
  return (
    <ServiceDetailPage
      title="Spor Genetiği"
      subtitle="Genetik yapınıza uygun egzersiz programıyla performansınızı artırın ve sakatlanma riskinizi azaltın"
      icon={<Dumbbell className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Spor genetiği testimiz, kaslarınızın tipini, aerobik ve anaerobik kapasitelerinizi, sakatlanma riskinizi ve toparlanma hızınızı belirleyen genleri analiz eder.",
        "Her birey genetik olarak belirli spor türlerine ve antrenman yöntemlerine daha yatkındır. Bazı kişiler doğal olarak dayanıklılık sporlarında daha başarılı olurken, diğerleri patlayıcı güç gerektiren aktivitelerde daha iyi performans gösterebilir.",
        "Sapiens Genetik Spor Testi ile genetik yapınıza en uygun egzersiz tiplerini, optimal antrenman yoğunluklarını ve sıklığını, sakatlanma riskinizi ve toparlanma stratejilerinizi belirleyerek, antrenman programınızı genetik potansiyelinize göre optimize edebilirsiniz."
      ]}
      benefits={[
        "Kas lifi tipinizin belirlenmesi (hız/dayanıklılık eğilimi)",
        "Aerobik/anaerobik egzersiz yatkınlığınızın tespiti",
        "Sakatlanma risk faktörlerinin analizi",
        "Toparlanma genlerinizin değerlendirilmesi",
        "Maksimum oksijen kullanım kapasitesi (VO2 max) potansiyeliniz",
        "Genetik yapınıza uygun egzersiz ve antrenman planı"
      ]}
      process={[
        {
          title: "DNA Örneği Toplama",
          description: "Evinize gönderilen kit ile basit bir yanak içi sürüntü örneği almanız yeterlidir. Ağrısız ve tamamen hijyenik bir işlemdir.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Genetik Analiz",
          description: "Laboratuvarımızda, sporla ilgili 70'ten fazla genetik varyant analiz edilir. Bu genler arasında ACTN3, ACE, PPARGC1A, CRP ve IL6 gibi spor performansını etkileyen önemli genler bulunur.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Spor Planı",
          description: "Genetik sonuçlarınız temelinde, spor bilimciler ve genetik uzmanları tarafından hazırlanan detaylı bir rapor ve kişiselleştirilmiş antrenman önerileri alırsınız.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Spor genetiği testi hangi bilgileri sağlar?",
          answer: "Testimiz, kas lifi tipi dağılımınız, güç/dayanıklılık oranınız, aerobik kapasite potansiyeliniz, sakatlanma riskiniz, toparlanma hızınız ve metabolik verimliliğiniz gibi bilgileri sağlar."
        },
        {
          question: "Bu test sonuçları nasıl kullanılabilir?",
          answer: "Test sonuçları, genetik yapınıza en uygun spor türlerini seçmenize, antrenman programınızı optimize etmenize, sakatlanmaları önlemenize ve performansınızı maksimize etmenize yardımcı olur. Profesyonel sporcular, fitness tutkunları ve sağlıklı bir yaşam sürmek isteyen herkes için değerli bilgiler içerir."
        },
        {
          question: "Testi yaptırmak için sporcu olmam gerekiyor mu?",
          answer: "Hayır, test hem profesyonel sporcular hem de rekreasyonel amaçla spor yapan veya fiziksel aktiviteye başlamayı düşünen herkes için uygundur. Genetik yapınızı anlayarak, hangi spor türlerinde daha başarılı olabileceğinizi veya hangi egzersiz yaklaşımlarının sizin için daha etkili olacağını öğrenebilirsiniz."
        },
        {
          question: "Sonuçlar ne kadar kesindir?",
          answer: "Test sonuçları, genetik bilimindeki en son araştırmalara dayalıdır. Ancak spor performansı, genetik faktörlerin yanı sıra beslenme, antrenman, motivasyon ve psikolojik faktörler gibi çevresel etkenlere de bağlıdır. Testimiz, genetik potansiyelinizi değerlendirir, ancak başarı için disiplinli çalışma ve doğru antrenman metodları da gereklidir."
        }
      ]}
      cta={{
        title: "Genetik Potansiyelinizi Keşfedin",
        description: "Sapiens Genetik Spor Testi ile fiziksel potansiyelinizi anlamak, performansınızı artırmak ve sakatlanma riskinizi azaltmak için ilk adımı atın. Genetik bilimi, başarılı bir spor kariyeri veya sağlıklı bir yaşam tarzı için size rehberlik etsin."
      }}
    />
  );
};

export default SportsGeneticsPage;