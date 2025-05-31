import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { ListTree, TestTube, FileText, Dna, Map, Users, Globe, Search } from "lucide-react";

const AncestryAnalysisPage = () => {
  return (
    <ServiceDetailPage
      title="Soy Ağacı (Atasal Köken Analizi)"
      subtitle="Genetik geçmişinizi keşfedin ve kökenlerinizle ilgili derin bir içgörü kazanın"
      icon={<ListTree className="h-6 w-6" />}
      heroImage="/atasal_koken.jpg"
      description={[
        "Atasal köken testimiz, DNA'nızı dünya genelindeki referans popülasyonlarla karşılaştırarak etnik kökeninizi ve soy geçmişinizi ortaya çıkarır.",
        "Her birimiz, atalarımızdan miras aldığımız benzersiz bir genetik yapıya sahibiz. Bu genetik miras, sadece fiziksel özelliklerimizi değil, aynı zamanda kökenlerimizin dünya haritasındaki yerini de belirler.",
        "Sapiens Genetik Soy Ağacı analizi, atalarınızın göç yollarını, farklı popülasyonlarla genetik bağlantılarınızı ve etnik kökeninizin ayrıntılı bir dökümünü sunar. Bu analiz, kim olduğunuzu daha iyi anlamanıza, kültürel mirasınızla daha derin bir bağ kurmanıza ve aile hikayenizi zenginleştirmenize yardımcı olur."
      ]}
      benefits={[
        "Detaylı etnik köken yüzdeleri ve bölgesel analizler",
        "Nesiller boyu aile geçmişinizin keşfi",
        "Kültürel mirasınızla bağ kurma",
        "Aile sağlık geçmişi hakkında içgörüler"
      ]}
      process={[
        {
          title: "Örnek Toplama",
          description: "Kolay ve ağrısız bir şekilde kan veya yanak sürüntüsü örneği toplanır. İsteğiniz halinde test kitimiz evinize gönderilir ve basit talimatlarla örneği kendiniz alabilirsiniz.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Kapsamlı DNA Analizi",
          description: "Örneğiniz laboratuvarımızda işlenir ve kökeninizi belirlemek için yüz binlerce genetik işaretçi (SNP) analiz edilir. Bu işaretçiler, dünyanın farklı bölgelerindeki popülasyonlarda görülen karakteristik genetik varyasyonlardır.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Referans Popülasyonlarla Karşılaştırma",
          description: "DNA'nız, dünya çapında 2000'den fazla referans popülasyonla karşılaştırılır. Bu, etnik kökeninizi ve atalarınızın göç yollarını büyük bir doğrulukla belirlememizi sağlar.",
          icon: <Globe className="h-6 w-6" />
        },
        {
          title: "Detaylı Rapor ve İnteraktif Araçlar",
          description: "Analiz sonuçlarınız, etnik köken yüzdelerinizi, bölgesel dağılımınızı gösteren kapsamlı bir rapor halinde sunulur.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Atasal köken testi ne kadar kesindir?",
          answer: "Testimiz, dünya çapındaki en geniş referans popülasyon veritabanlarını kullanır ve %95'in üzerinde doğruluk oranına sahiptir. Ancak, sonuçların kesinliği, etnik grubunuzun referans veritabanımızdaki temsil edilme oranına bağlı olarak değişebilir. Sürekli olarak veritabanımızı genişletmekte ve sonuçların doğruluğunu artırmaktayız."
        },
        {
          question: "Akrabalarımı bulabilir miyim?",
          answer: "Evet, testimiz, veritabanımızdaki diğer kişilerle genetik benzerliğinizi analiz ederek potansiyel akrabalarınızı belirlemenize yardımcı olur. Sistem, onay vermesi halinde, sizinle ortak DNA segmentleri paylaşan diğer kişileri tespit eder ve akrabalık derecesini tahmin eder. Bu sayede, uzak kuzenlerinizi veya bilinmeyen akrabalarınızı keşfedebilirsiniz."
        },
        {
          question: "Hangi etnik bölgeler analiz edilir?",
          answer: "Testimiz, dünya genelinde 1500'den fazla bölgeyi kapsayan en kapsamlı etnik köken analizlerinden birini sunar. Bu bölgeler arasında Avrupa, Orta Doğu, Afrika, Asya, Okyanusya ve Amerika kıtalarındaki çeşitli etnik gruplar ve alt bölgeler bulunur. Özellikle Anadolu, Kafkasya ve Balkanlar gibi Türkiye'nin genetik mirasını oluşturan bölgelerde yüksek çözünürlüklü analiz sağlarız."
        },
        {
          question: "Sonuçlar ne kadar sürede alınır?",
          answer: "Örneğiniz laboratuvarımıza ulaştıktan sonra genellikle 6-8 hafta içinde sonuçlarınız hazır olur. Yoğun dönemlerde bu süre biraz uzayabilir. Örneğinizin işleme alındığı ve analizin tamamlandığı aşamalarda e-posta ile bilgilendirilirsiniz."
        },
        {
          question: "Test verileri ve gizlilik konusunda nasıl bir politika izliyorsunuz?",
          answer: "ETNA olarak, genetik bilgilerinizin gizliliği ve güvenliği en büyük önceliğimizdir. Verileriniz, en yüksek güvenlik standartlarına sahip sistemlerde saklanır ve izniniz olmadan üçüncü taraflarla paylaşılmaz. İstediğiniz zaman verilerinizin silinmesini talep edebilirsiniz. Ayrıca, genetik verilerinizin araştırma amaçlı kullanımı için ayrıca onayınız istenir ve bu tamamen isteğe bağlıdır."
        }
      ]}
      cta={{
        title: "Genetik Yolculuğunuza Başlayın",
        description: "Sapiens Genetik Soy Ağacı analizi ile kökenlerinizi keşfedin, atalarınızın izini sürün ve kim olduğunuzla ilgili daha derin bir anlayış kazanın. Genetik mirasınızı öğrenmek için ilk adımı atın."
      }}
    />
  );
};

export default AncestryAnalysisPage;