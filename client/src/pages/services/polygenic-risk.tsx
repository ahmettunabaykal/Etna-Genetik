import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { ShieldAlert, TestTube, FileText, Dna, Lightbulb, BarChart3, Heart, Brain } from "lucide-react";

const PoligenicRiskPage = () => {
  return (
    <ServiceDetailPage
      title="Koruyucu Hekimlik İçin Poligenik Risk Skorları"
      subtitle="Yaygın hastalıklar için genetik risk faktörlerinizi öğrenerek önleyici tedbirler alın"
      icon={<ShieldAlert className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Poligenik risk skoru analizimiz, yaygın hastalıklar için genetik yatkınlıklarınızı değerlendirir. Birden fazla genin katkıda bulunduğu kompleks hastalıklara yönelik risk skorlarınızı hesaplayarak, önleyici sağlık stratejileri geliştirmenize yardımcı olur.",
        "Modern genetik bilimi, birçok yaygın hastalığın (kardiyovasküler hastalıklar, tip 2 diyabet, bazı kanser türleri, Alzheimer vb.) tek bir genin değil, yüzlerce veya binlerce genetik varyantın kümülatif etkisiyle ortaya çıktığını göstermektedir. Poligenik risk skorları, bu genetik varyantların toplu etkisini ölçerek, belirli hastalıklara yatkınlığınızı bilimsel olarak değerlendiren güçlü bir araçtır.",
        "ETNA Genetik Poligenik Risk Skoru analizi, kişisel genetik profilinize dayanarak, çeşitli yaygın hastalıklar için risk düzeyinizi belirler ve bu riskleri yönetmenize yardımcı olacak kişiselleştirilmiş sağlık stratejileri sunar. Bu bilgiler, sağlık profesyonelleri ile işbirliği içinde, erken tarama programları planlamak, yaşam tarzı değişiklikleri yapmak ve proaktif sağlık önlemleri almak için değerli bir rehber oluşturur."
      ]}
      benefits={[
        "Kardiyovasküler hastalıklar, diyabet, alzheimer gibi yaygın hastalıklar için risk değerlendirmesi",
        "Yaşam tarzı değişiklikleri için kişiselleştirilmiş öneriler",
        "Tarama programları için zaman çizelgesi",
        "Risk azaltma stratejileri",
        "Erken müdahale fırsatları",
        "Koruyucu sağlık planı oluşturma"
      ]}
      process={[
        {
          title: "Kapsamlı Genetik Analiz",
          description: "Tükürük veya kan örneğinizden DNA'nız izole edilir ve milyonlarca genetik varyant için analiz edilir. Bu analiz, en son teknoloji ve bilimsel araştırmalara dayalı poligenik risk skorlama modelleri kullanılarak gerçekleştirilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Risk Hesaplaması",
          description: "Genetik varyantlarınız, her hastalık için spesifik risk modellerine göre değerlendirilir ve poligenik risk skorlarınız hesaplanır. Bu skorlar, genel popülasyonla karşılaştırılarak, rölatif risk düzeyiniz belirlenir.",
          icon: <BarChart3 className="h-6 w-6" />
        },
        {
          title: "Klinik Değerlendirme",
          description: "Genetik risk skorlarınız, klinik uzmanlarımız tarafından aile öykünüz, yaşam tarzı faktörleriniz ve mevcut sağlık durumunuz gibi diğer risk faktörleri ile birlikte değerlendirilir.",
          icon: <Lightbulb className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Önleyici Sağlık Planı",
          description: "Analizleriniz temelinde, tarama programları, yaşam tarzı değişiklikleri ve risk azaltma stratejileri içeren kapsamlı bir önleyici sağlık planı hazırlanır. Bu plan, doktorunuzla paylaşabileceğiniz detaylı bir rapor halinde sunulur.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Poligenik risk skorları hangi hastalıklar için hesaplanır?",
          answer: "Poligenik risk skor analizimiz, kardiyovasküler hastalıklar (koroner arter hastalığı, atriyal fibrilasyon, inme), metabolik hastalıklar (tip 2 diyabet, obezite), nörodejeneratif hastalıklar (Alzheimer, Parkinson), bazı kanser türleri (meme, kolorektal, prostat), otoimmün hastalıklar (romatoid artrit, tip 1 diyabet, multipl skleroz) ve daha birçok yaygın hastalık için risk değerlendirmesi sunar."
        },
        {
          question: "Sonuçlarım kesin bir hastalık teşhisi olarak yorumlanabilir mi?",
          answer: "Hayır, poligenik risk skorları hastalık teşhisi koymaz. Bu skorlar, belirli hastalıklar için genetik yatkınlığınızın bir ölçüsüdür ve gelecekte bu hastalıklara yakalanma riskinizin tahminini sağlar. Ancak, genetik risk faktörleri sadece hastalık gelişiminin bir parçasıdır; çevresel faktörler, yaşam tarzı ve diğer bireysel özellikler de hastalık gelişiminde önemli rol oynar."
        },
        {
          question: "Yüksek risk skoruna sahipsem ne yapmalıyım?",
          answer: "Belirli bir hastalık için yüksek poligenik risk skoruna sahipseniz, panik yapmayın. Bu, hastalığa kesin olarak yakalanacağınız anlamına gelmez. Bunun yerine, bu bilgiyi sağlık profesyonelinizle paylaşın. Doktorunuz, erken tarama programları, yaşam tarzı değişiklikleri ve gerekirse önleyici tedaviler gibi proaktif önlemler önerebilir. Raporda sunulan kişiselleştirilmiş önerileri takip etmek, risk faktörlerinizi yönetmenize yardımcı olacaktır."
        },
        {
          question: "Poligenik risk skorları zamanla değişir mi?",
          answer: "Genetik yapınız yaşam boyu değişmez, bu nedenle poligenik risk skorlarınız da sabit kalır. Ancak, poligenik risk skorlama modelleri, yeni bilimsel araştırmalar ve daha büyük genetik veritabanları ile sürekli olarak geliştirilmekte ve iyileştirilmektedir. Bu nedenle, birkaç yıl içinde daha hassas risk tahminleri için testinizi yenilemeniz önerilebilir."
        },
        {
          question: "Çocuklarım için de bu testi yaptırabilir miyim?",
          answer: "Evet, 18 yaşın altındaki çocuklar için veli onayı ile test yapılabilir. Ancak, çocuklar için poligenik risk değerlendirmesi, yalnızca çocukluk çağında başlangıç gösteren veya erken önleyici müdahalelerin faydalı olabileceği durumlar için önerilir. Çocuklarda genetik test konusunda genetik danışmanlarımız size rehberlik edecektir."
        }
      ]}
      cta={{
        title: "Genetik Riskleri Bilgi ile Yönetin",
        description: "ETNA Genetik Poligenik Risk Skoru analizi ile hastalık risklerinizi önceden belirleyin ve proaktif sağlık kararları alın. Sağlığınızın kontrolünü elinize alın, geleceğinizi şekillendirin."
      }}
    />
  );
};

export default PoligenicRiskPage;