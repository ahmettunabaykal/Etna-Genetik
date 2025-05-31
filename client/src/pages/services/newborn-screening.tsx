import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { Baby, TestTube, FileText, Dna, Clock, Stethoscope, Apple, Brain } from "lucide-react";

const NewbornScreeningPage = () => {
  return (
    <ServiceDetailPage
      title="Yeni Doğan Taraması"
      subtitle="Bebeğinizin sağlıklı gelişimi için erken tedavi fırsatı sağlayan kapsamlı genetik tarama"
      icon={<Baby className="h-6 w-6" />}
      heroImage="/yeni_dogan.jpg"
      description={[
        "Genişletilmiş yenidoğan tarama testimiz, standart yenidoğan taramalarından çok daha fazla genetik hastalığı kapsar. Bu test, erken müdahale ile tedavi edilebilecek metabolik, hematolojik ve gelişimsel bozuklukların erken teşhisini sağlayarak, bebeğinizin sağlıklı gelişimini destekler.",
        "Doğumdan sonraki ilk günler ve haftalar, bebeğinizin sağlığı için kritik bir dönemdir. Birçok genetik hastalık, erken tespit edilip tedavi edildiğinde, ciddi sağlık sorunlarının ve gelişimsel gecikmelerin önüne geçilebilir. Standart yenidoğan taramaları genellikle sınırlı sayıda hastalığı kapsar, ancak genişletilmiş tarama ile 200'den fazla genetik durum için bebeğiniz değerlendirilebilir.",
        "ETNA Yenidoğan Taraması, bebeğinizin sağlıklı bir başlangıç yapması için gerekli bilgileri sağlar ve potansiyel sağlık sorunlarına proaktif yaklaşım geliştirmenize olanak tanır. Erken tanı, erken tedavi şansı anlamına gelir ve bebeğinizin optimum gelişimi için hayati önem taşır."
      ]}
      benefits={[
        "Genişletilmiş metabolik hastalık paneli",
        "Erken tedavi şansı sunan hastalıkların tespiti",
        "Beslenme ve gelişim önerileri",
        "Uzun vadeli sağlık takip planı",
        "Ailenin diğer üyeleri için risk değerlendirmesi",
        "Özelleştirilmiş pediatrik bakım rehberliği"
      ]}
      process={[
        {
          title: "Örnek Toplama",
          description: "Test, bebeğinizden alınan birkaç cc kan örneği ile yapılır. Bu işlem, doğumdan 24-48 saat sonra hastanede veya evde bir sağlık profesyoneli tarafından gerçekleştirilir. İşlem hızlı ve bebeğiniz için minimum rahatsızlık verecek şekilde yapılır.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Kapsamlı Analiz",
          description: "Kan örneği, metabolik hastalıklar, hemoglobinopati, endokrin bozukluklar, immün yetmezlikler ve diğer kalıtsal durumlar için analiz edilir. Testlerimiz, hem biyokimyasal hem de genetik analizleri içerir ve 200'den fazla genetik durum için tarama yapar.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Hızlı Sonuç ve Değerlendirme",
          description: "Sonuçlar genellikle 4-6 hafta içinde hazır olur. Acil durumlar için hızlandırılmış hizmet de mevcuttur. Sonuçlar, pediatrik genetik uzmanlarımız tarafından değerlendirilir ve anormal bulgular olması durumunda hemen sizinle iletişime geçilir.",
          icon: <Clock className="h-6 w-6" />
        },
        {
          title: "Takip ve Danışmanlık",
          description: "Anormal bulgular tespit edilirse, detaylı açıklama, ek testler ve tedavi seçenekleri için genetik danışmanımız ve pediatrik uzmanlarımızla bir görüşme ayarlanır. Normal sonuçlar durumunda da, bebeğinizin sağlık izlemi için öneriler içeren kapsamlı bir rapor alırsınız.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Genişletilmiş yenidoğan taraması hangi durumları tespit edebilir?",
          answer: "Genişletilmiş yenidoğan tarama testimiz, 200'den fazla genetik durumu tespit edebilir. Bunlar arasında şunlar bulunur: 1) Metabolik bozukluklar (fenilketonüri, galaktozemi, organik asidemiler vb.), 2) Endokrin bozukluklar (konjenital hipotiroidi, konjenital adrenal hiperplazi vb.), 3) Hemoglobinopatiler (orak hücreli anemi, talasemi vb.), 4) İmmün yetmezlikler (şiddetli kombine immün yetmezlik, DiGeorge sendromu vb.), 5) Lizozomal depo hastalıkları (Gaucher, Pompe, Fabry vb.), 6) Diğer genetik durumlar (kistik fibrozis, spinal müsküler atrofi vb.)."
        },
        {
          question: "Bu test standart yenidoğan taramasının yerini alır mı?",
          answer: "Hayır, genişletilmiş yenidoğan tarama testimiz, ülkenizde zorunlu olan standart yenidoğan taramasının yerini almaz, onu tamamlar. Standart taramalar genellikle sınırlı sayıda, ancak yaygın ve tedavi edilebilir durumları kapsar. Genişletilmiş taramalar ise çok daha fazla genetik durumu değerlendirir. Bebeğinizin hem standart hem de genişletilmiş taramalardan geçmesi, en kapsamlı sağlık değerlendirmesini sağlar."
        },
        {
          question: "Testin zamanlaması neden önemlidir?",
          answer: "Yenidoğan taramasının doğumdan 24-48 saat sonra yapılması önemlidir. Bu süre, bebeğin metabolizmasının ve hormon seviyelerinin stabilize olması için yeterlidir, ancak olası bir metabolik hastalık durumunda semptomlar başlamadan önce müdahale edilebilecek kadar erkendir. Bazı durumlar için, optimal testlerin 10-14 gün civarında yapılması da önerilir; bu nedenle bazı durumlarda tekrar testi önerilebilir."
        },
        {
          question: "Anormal bir sonuç alırsak ne olur?",
          answer: "Anormal bir sonuç, bebeğinizin kesin olarak bir hastalığa sahip olduğu anlamına gelmez; bu bir ilk taramadır ve 'yanlış pozitif' sonuçlar olabilir. Anormal bir sonuç durumunda, genetik danışmanımız hemen sizinle iletişime geçecek, sonucu açıklayacak ve yapılması gereken adımları anlatacaktır. Genellikle, tanıyı doğrulamak için ek testler gerekir. Eğer bir hastalık tanısı kesinleşirse, hemen tedavi ve yönetim planı oluşturulur ve uzman pediatrik ekibimiz tarafından size rehberlik edilir."
        }
      ]}
      cta={{
        title: "Bebeğinize Sağlıklı Bir Başlangıç Sunun",
        description: "ETNA Yenidoğan Taraması ile bebeğinizin sağlığını proaktif olarak koruyun. Erken tanı, erken tedavi ve sağlıklı bir gelecek için ilk adımı atın."
      }}
    />
  );
};

export default NewbornScreeningPage;