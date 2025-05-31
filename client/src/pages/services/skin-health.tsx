import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Sparkles, TestTube, FileText, Dna, Sun, Clock, ShieldCheck, Layers } from "lucide-react";

const SkinHealthPage = () => {
  return (
    <ServiceDetailPage
      title="Cilt Sağlığı"
      subtitle="Cilt yapınızı genetik düzeyde anlayarak, yaşlanma karşıtı ve cilt sağlığı stratejilerinizi kişiselleştirin"
      icon={<Sparkles className="h-6 w-6" />}
      heroImage="/cilt_sagligi.jpg"
      description={[
        "Cilt genetiği testimiz, cildinizin yaşlanma sürecini, kollajen üretimi kapasitesini, güneş hasarına duyarlılığını ve inflamasyon eğilimini belirleyen genleri analiz eder.",
        "Cildinizin özelliklerini ve davranışını belirleyen yüzlerce gen vardır. Bu genler, cildinizin nemini, elastikiyetini, güneş hassasiyetini, pigmentasyonunu ve yaşlanma hızını belirler. Cilt genetiği analizimiz, bu genlerdeki varyasyonları inceleyerek, cildinizin benzersiz ihtiyaçlarını ve eğilimlerini ortaya çıkarır.",
        "Sapiens Genetik Cilt Sağlığı testi ile cildinizin genetik haritasını çıkararak, içeriden ve dışarıdan cildinizi en iyi şekilde destekleyecek kişiselleştirilmiş bakım rutinleri, ürün önerileri ve beslenme stratejileri alırsınız. Böylece cilt bakımınızı hem zaman hem de maddi açıdan optimize edebilir, uzun vadeli cilt sağlığınızı koruyabilirsiniz."
      ]}
      benefits={[
        "Cildinizin yaşlanma sürecini etkileyen genlerin analizi",
        "UV hasarına genetik duyarlılığın belirlenmesi",
        "Cilt nem dengesi ve elastikiyetine etki eden faktörlerin tespiti",
        "Akne ve cilt inflamasyonu riski değerlendirmesi",
        "Antioksidan kapasitesi ve detoksifikasyon analizi",
        "DNA bazlı cilt bakım önerileri"
      ]}
      process={[
        {
          title: "Basit Örnek Toplama",
          description: "Test sürecimiz, evde kolayca uygulayabileceğiniz bir yanak içi sürüntü örneği alımı ile başlar. Bu ağrısız işlem, evinize gönderilen kit ile dakikalar içinde tamamlanır.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Kapsamlı Genetik Analiz",
          description: "Laboratuvarımızda, cilt sağlığı ve görünümünü etkileyen 100'den fazla genetik varyant analiz edilir. Bu genler arasında kollajen oluşumu, antioksidan kapasitesi, inflamasyon yanıtı ve UV hasarı onarımı ile ilgili olanlar bulunur.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Cilt Bakım Planı",
          description: "Genetik sonuçlarınız ve cilt uzmanlarımız tarafından yorumlanır ve genetik profilinize özgü kapsamlı bir cilt bakım planı hazırlanır. Bu plan, önerilen aktif içerikler, ürün tavsiyeleri ve yaşam tarzı değişiklikleri içerir.",
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: "Uzman Danışmanlığı",
          description: "Sonuçlarınızı ve önerilerinizi anlamanız için cilt sağlığı uzmanlarımızdan biri ile 30 dakikalık bir danışma oturumu gerçekleştirirsiniz. Bu görüşmede, cilt bakım rutininizi optimize etmek için sorularınız yanıtlanır.",
          icon: <Sparkles className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Cilt genetiği testi hangi yaşlarda yapılabilir?",
          answer: "Cilt genetiği testi herhangi bir yaşta yapılabilir, ancak özellikle 25 yaş ve üzeri kişiler için idealdir. Bu yaştan itibaren cilt yaşlanma belirtileri görülmeye başlanır ve genetik bilgilerle erken yaşta doğru cilt bakım stratejilerini benimsemek, uzun vadede büyük fark yaratabilir."
        },
        {
          question: "Test sonuçlarım doğrultusunda ne tür öneriler alacağım?",
          answer: "Test sonuçlarınız doğrultusunda cildinizin ihtiyaçlarına özel formüle edilmiş aktif içerikler (retinol, vitamin C, peptitler, AHA/BHA asitler, vb.), koruyucu önlemler (özel SPF tavsiyeleri), beslenme önerileri ve yaşam tarzı değişiklikleri içeren detaylı bir rapor alacaksınız. Ayrıca, cildinizin genetik yapısına uygun ürün kategorileri ve marka önerileri de sunulacaktır."
        },
        {
          question: "Test sonuçları hangi cilt sorunlarının önlenmesine yardımcı olabilir?",
          answer: "Genetik test sonuçları, erken yaşlanma belirtileri, pigmentasyon sorunları, akne, rozasea, kuruluk, hassasiyet ve inflamasyon gibi birçok cilt sorununun altında yatan genetik faktörleri belirleyerek, bu sorunları önlemenize veya en aza indirmenize yardımcı olabilir. Cildinizin genetik zayıf noktalarını bilerek, bunları hedefleyen özel bakım stratejileri geliştirebilirsiniz."
        },
        {
          question: "Tavsiye edilen ürünleri nereden temin edebilirim?",
          answer: "Raporda önerilen ürün kategorileri ve aktif içerikler için hem yerel eczanelerden hem de güvenilir online kaynaklardan temin edilebilecek seçenekler sunuyoruz. İsterseniz, uzmanlarımız tarafından özel olarak seçilmiş ve genetik profilinize uygun ürünlerden oluşan bir cilt bakım paketi de satın alabilirsiniz."
        },
        {
          question: "Cilt genetiği testi sonuçları ne kadar sürede değişebilir?",
          answer: "Genetik yapınız hayat boyu değişmez, ancak genetik ifadeniz (genlerin aktivasyon durumu) yaşam tarzı faktörleri, çevresel etkiler ve yaşlanma süreciyle değişebilir. Bu nedenle, test sonuçlarınız kalıcı bir referans noktası olsa da, cilt bakım önerileriniz yaşınız ilerledikçe ve yeni bilimsel gelişmeler oldukça güncellenebilir."
        }
      ]}
      cta={{
        title: "Cildinizin Genetik Sırlarını Keşfedin",
        description: "Sapiens Genetik Cilt Sağlığı testi ile cildinizin benzersiz ihtiyaçlarını anlayın ve genetik profilinize özel cilt bakım stratejileri geliştirin. Zamansız bir güzellik ve sağlıklı bir cilt için ilk adımı atın."
      }}
    />
  );
};

export default SkinHealthPage;