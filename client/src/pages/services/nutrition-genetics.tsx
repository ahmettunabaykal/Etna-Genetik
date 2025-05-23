import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Apple, TestTube, FileText, Dna, Users, FileCheck, Scale, Coffee, Utensils } from "lucide-react";

const NutritionGeneticsPage = () => {
  return (
    <ServiceDetailPage
      title="Beslenme Genetiği"
      subtitle="DNA'nıza uygun beslenme planıyla ideal kilonuza ulaşın ve sağlıklı bir yaşam sürün"
      icon={<Apple className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Beslenme genetiği testimiz, vücudunuzun besinleri nasıl işlediğini, hangi besin gruplarına daha duyarlı olduğunuzu ve metabolizmanızın nasıl çalıştığını analiz ederek size özel beslenme önerileri sunar.",
        "Her bireyin genetik yapısı birbirinden farklıdır ve bu farklılıklar, besinlerin vücudunuzda nasıl metabolize edildiğini ve depolandığını belirler. Aynı diyet farklı kişilerde farklı sonuçlar verebilir - bazıları için etkili olurken, diğerleri için faydası sınırlı olabilir.",
        "ETNA beslenme testi ile, vücudunuzun yağları, karbonhidratları ve proteinleri nasıl işlediğini, hangi vitamin ve minerallere daha fazla ihtiyaç duyduğunuzu ve belirli gıdalara karşı genetik duyarlılığınızı belirleyerek kişiselleştirilmiş beslenme önerileri sunuyoruz."
      ]}
      benefits={[
        "Karbonhidrat, protein ve yağ metabolizmanızın genetik analizi",
        "Vitamin ve mineral ihtiyaçlarınızın belirlenmesi",
        "Laktoz, gluten ve kafein duyarlılığının tespiti",
        "Açlık ve tokluk mekanizmalarının genetik analizi",
        "Vücut kompozisyonu ve kilo yönetimi ile ilgili genetik faktörlerin belirlenmesi",
        "DNA'nıza göre optimize edilmiş beslenme planı oluşturma"
      ]}
      process={[
        {
          title: "Örnek Toplama",
          description: "Kolay ve ağrısız bir şekilde kan veya yanak sürüntüsü örneği toplanır. İsteğiniz halinde test kitimiz evinize gönderilir ve basit talimatlarla örneği kendiniz alabilirsiniz.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Laboratuvar Analizi",
          description: "Örneğiniz, ISO sertifikalı laboratuvarımızda beslenme ile ilgili 100'den fazla genetik varyant için analiz edilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Rapor",
          description: "Genetik sonuçlarınıza göre detaylı ve anlaşılır bir rapor hazırlanır, uzman genetik danışmanlarımız tarafından değerlendirilir.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Beslenme genetiği testi hangi bilgileri sağlar?",
          answer: "Testimiz, karbonhidrat, protein ve yağ metabolizmanız, vitamin ve mineral emiliminiz, açlık ve tokluk mekanizmalarınız, laktoz, gluten ve kafein toleransınız gibi beslenme ile ilgili genetik faktörlerinizi analiz eder."
        },
        {
          question: "Bu test bana nasıl yardımcı olabilir?",
          answer: "Test sonuçlarınız, vücudunuzun besinlere nasıl tepki verdiğini anlamanıza yardımcı olarak, kilo yönetimi, enerji seviyenizi optimum düzeye çıkarma ve genel sağlığınızı iyileştirme konusunda kişiselleştirilmiş bir beslenme planı oluşturmanıza olanak tanır."
        },
        {
          question: "Beslenme genetiği testi için ne tür bir örnek gerekiyor?",
          answer: "Testimiz için genellikle tükürük örneği kullanılır. Bu, ağrısız ve basit bir işlemdir. Örnek toplama kiti evinize gönderilir ve açık talimatlarla birlikte örneği kendiniz alabilirsiniz."
        },
        {
          question: "Test sonuçlarını ne kadar sürede alırım?",
          answer: "Örneğiniz laboratuvarımıza ulaştıktan sonra, genellikle 2-3 hafta içinde test sonuçlarınıza erişebilirsiniz. Sonuçlar, online platformumuz aracılığıyla güvenli bir şekilde size iletilir."
        }
      ]}
      cta={{
        title: "Genetik Yapınıza Uygun Beslenme Planı İçin Adım Atın",
        description: "Sapiens Genetik beslenme testi ile, vücudunuzun besinlere olan tepkisini anlayarak, kişiselleştirilmiş beslenme önerileri alın. Sağlıklı yaşam yolculuğunuzda sizinle birlikte yürümeye hazırız."
      }}
    />
  );
};

export default NutritionGeneticsPage;