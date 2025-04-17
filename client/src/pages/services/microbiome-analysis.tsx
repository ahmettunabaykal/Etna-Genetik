import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Microscope, TestTube, FileText, Dna, Beaker, Shield, Bug, BrainCircuit, Leaf } from "lucide-react";

const MicrobiomeAnalysisPage = () => {
  return (
    <ServiceDetailPage
      title="Mikrobiyom Analizleri"
      subtitle="Bağırsak floranızın detaylı analiziyle bağışıklık sisteminizi güçlendirin ve sindirim sorunlarına çözüm bulun"
      icon={<Microscope className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1636955792096-748925faf367?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Mikrobiyom analizimiz, bağırsak floranızdaki mikroorganizmaların kompozisyonunu ve çeşitliliğini değerlendirerek genel sağlık durumunuz hakkında önemli bilgiler sunar.",
        "İnsan bağırsağında yaşayan trilyonlarca mikroorganizma, sindirim sisteminden bağışıklığa, hatta ruh haline kadar vücudunuzun birçok sistemini etkiler. Mikrobiyomun dengesizliği (disbiyoz), irritabl bağırsak sendromu, enflamatuar bağırsak hastalıkları, alerjiler, otoimmün hastalıklar ve hatta depresyon gibi çeşitli rahatsızlıklarla ilişkilendirilmiştir.",
        "ETNA Genetik Mikrobiyom Analizi ile bağırsak floranızın kapsamlı bir haritasını çıkarıyor, sağlık durumunuzu etkileyebilecek mikrobiyom dengesizliklerini tespit ediyor ve bağırsak sağlığınızı iyileştirmek için kişiselleştirilmiş öneriler sunuyoruz."
      ]}
      benefits={[
        "Bağırsak mikrobiyom profilinizin haritalandırılması",
        "Probiyotik ve prebiyotik ihtiyaçlarının belirlenmesi",
        "Mikrobiyom dengesizliklerinin tespiti",
        "Bağışıklık sisteminizi güçlendirme stratejileri",
        "Sindirim sorunlarının altında yatan nedenlerin belirlenmesi",
        "Beyin-bağırsak eksenini destekleyici öneriler"
      ]}
      process={[
        {
          title: "Örnek Toplama",
          description: "Evde kolayca kullanabileceğiniz dışkı örneği toplama kitimiz adresinize gönderilir. Kit, örneğin bozulmadan laboratuvarımıza ulaşmasını sağlayan özel bir koruyucu içerir.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "İleri Teknoloji Analiz",
          description: "Örneğiniz, en son teknoloji kullanılarak 16S rRNA sekanslama ile analiz edilir. Bu yöntem, bağırsağınızdaki mikroorganizmaların çeşitliliğini ve kompozisyonunu hassas bir şekilde belirler.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Kapsamlı Değerlendirme",
          description: "Sonuçlarınız, mikrobiyom uzmanlarımız tarafından detaylı bir şekilde değerlendirilir ve beslenme, yaşam tarzı ve gerektiğinde takviye önerileri içeren kişiselleştirilmiş bir rapor hazırlanır.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Mikrobiyom analizi ne için kullanılır?",
          answer: "Mikrobiyom analizi, bağırsak sağlığı sorunları, sindirim problemleri, kronik enflamasyon, bağışıklık sistemi dengesizlikleri, enerji seviyesi düşüklüğü ve zihinsel sağlık sorunları gibi durumların altında yatan nedenleri anlamaya yardımcı olur."
        },
        {
          question: "Mikrobiyom analizinden sonra ne gibi öneriler alacağım?",
          answer: "Analiz sonucunda, bağırsak floranızı dengelemeye yönelik kişiselleştirilmiş beslenme önerileri, prebiyotik ve probiyotik takviyeler, yaşam tarzı değişiklikleri ve mikrobiyomun optimize edilmesi için stratejiler içeren kapsamlı bir rapor alacaksınız."
        },
        {
          question: "Örnek toplamak zor mu?",
          answer: "Hayır, örnek toplama kiti kullanımı kolay ve hijyenik olacak şekilde tasarlanmıştır. Kit içerisinde detaylı talimatlar ve gerekli tüm malzemeler bulunmaktadır. Örnek toplama işlemi evde, özel hayatınızın gizliliği korunarak gerçekleştirilir."
        },
        {
          question: "Mikrobiyom değişimleri ne kadar hızlı gerçekleşir?",
          answer: "Bağırsak mikrobiyomu oldukça dinamiktir ve beslenme değişiklikleri, probiyotik takviyeler ve yaşam tarzı değişiklikleri ile birkaç hafta içinde bile değişimler gözlemlenebilir. Ancak kalıcı ve anlamlı değişiklikler için genellikle 3-6 aylık bir süreç önerilir."
        },
        {
          question: "Sonuçlarımı nasıl yorumlayacağım?",
          answer: "Test sonuçlarınızla birlikte anlaşılır bir rapor ve mikrobiyom uzmanlarımızla 30 dakikalık bir danışma seansı alacaksınız. Bu seansta, sonuçlarınız detaylı olarak açıklanacak ve sorularınız yanıtlanacaktır."
        }
      ]}
      cta={{
        title: "Bağırsak Sağlığınızı Keşfedin",
        description: "Mikrobiyom analizimiz ile bağırsak floranızın durumunu değerlendirin ve kişiselleştirilmiş önerilerle genel sağlığınızı, sindirim sisteminizi ve bağışıklığınızı destekleyin. Sağlıklı bir mikrobiyom, sağlıklı bir vücut demektir."
      }}
    />
  );
};

export default MicrobiomeAnalysisPage;