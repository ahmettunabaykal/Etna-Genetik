import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { ScrollText, TestTube, FileText, Dna, Users, Calendar, BabyIcon, HeartHandshake } from "lucide-react";
import { Baby as BabyIcon } from "lucide-react";

const CarrierScreeningPage = () => {
  return (
    <ServiceDetailPage
      title="Taşıyıcılık Taraması"
      subtitle="Çocuklarınıza aktarabileceğiniz genetik hastalık risklerini belirleyin ve aile planlamanızı buna göre şekillendirin"
      icon={<ScrollText className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1567564421143-9d3edce4a670?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Taşıyıcılık tarama testlerimiz, siz ve partnerinizin resesif genetik hastalık taşıyıcılık durumunu değerlendirerek, gelecek nesillere aktarılabilecek hastalık risklerini belirler.",
        "Her birimiz, 5-7 resesif genetik hastalık için taşıyıcı genler taşırız. Bu, tek başına sağlığımızı etkilemez, ancak eğer her iki ebeveyn de aynı hastalık için taşıyıcı ise, çocuklarının bu hastalığa sahip olma riski %25'tir. Kistik fibrozis, orak hücreli anemi, Tay-Sachs hastalığı gibi yüzlerce resesif genetik hastalık için taşıyıcılık durumunuzu öğrenerek aile planlamanızı bilinçli bir şekilde yapabilirsiniz.",
        "ETNA Genetik Taşıyıcılık Taraması, 300'den fazla resesif genetik hastalık için kapsamlı bir analiz sunar. Bu test, hem gebe kalmayı planlayan çiftler hem de gebelik sırasında, gelecek nesiller için bilinçli sağlık kararları almak isteyenler için idealdir."
      ]}
      benefits={[
        "Geniş kapsamlı taşıyıcılık paneli (300+ genetik hastalık)",
        "Çift bazlı risk değerlendirmesi",
        "Gebelik öncesi genetik danışmanlık",
        "Aile planlama seçenekleri sunma",
        "Erken müdahale imkanı",
        "Genetik danışmanlık desteği"
      ]}
      process={[
        {
          title: "Konsültasyon ve Aile Öyküsü",
          description: "Süreç, genetik danışmanımızla bir ön görüşme ile başlar. Bu görüşmede, aile sağlık öykünüz, etnik kökeniniz ve taşıyıcılık taramasına olan ilginizin nedenleri değerlendirilir.",
          icon: <Users className="h-6 w-6" />
        },
        {
          title: "Örnek Toplama",
          description: "Basit bir tükürük veya kan örneği alınır. İdeal olarak, her iki partnerin de aynı anda test edilmesi önerilir, ancak başlangıçta sadece bir partner de test edilebilir.",
          icon: <TestTube className="h-6 w-6" />
        },
        {
          title: "Kapsamlı Genetik Analiz",
          description: "Örneğiniz, 300'den fazla resesif genetik hastalıkla ilişkili genleri analiz eden ileri teknoloji DNA sekanslama yöntemleriyle incelenir. Tespit edilen varyantlar, mevcut bilimsel literatür ve klinik rehberler ışığında değerlendirilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Sonuçların Yorumlanması ve Danışmanlık",
          description: "Sonuçlarınız, sertifikalı genetik danışmanımız tarafından size detaylı olarak açıklanır. Eğer her iki partner de aynı hastalık için taşıyıcı olarak tespit edilirse, riskleri anlamanıza ve mevcut aile planlama seçeneklerini değerlendirmenize yardımcı olunur.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Hangi durumlarda taşıyıcılık taraması önerilir?",
          answer: "Taşıyıcılık taraması şu durumlarda özellikle önerilir: 1) Gebe kalmayı planlayan çiftler, 2) Gebeliğin erken dönemlerinde olan çiftler, 3) Ailesinde genetik hastalık öyküsü bulunan bireyler, 4) Belirli etnik gruplara mensup kişiler (örn. Aşkenazi Yahudileri, Akdeniz kökenliler, Afrikalılar vb.), 5) Akraba evliliği olan çiftler. Ancak, taşıyıcılık taraması günümüzde tüm gebe kalmayı planlayan çiftlere önerilmektedir, çünkü aile öyküsü olmadan da taşıyıcı olma ihtimali vardır."
        },
        {
          question: "Tarama sonuçlarıma göre hangi seçeneklerim olacak?",
          answer: "Eğer siz ve partneriniz aynı hastalık için taşıyıcı olarak tespit edilirseniz, çeşitli aile planlama seçenekleriniz vardır: 1) Preimplantasyon Genetik Tanı (PGT) ile IVF: Genetik hastalık taşımayan embriyoların seçilmesi, 2) Prenatal Tanı: Gebelik sırasında bebeğin durumunun amniyosentez veya koryonik villus örneklemesi ile değerlendirilmesi, 3) Yumurta veya sperm bağışı: Taşıyıcı olmayan bir donör kullanılması, 4) Evlat edinme, 5) Tespit edilen duruma göre riskleri kabul ederek doğal gebelik. Genetik danışmanınız, durumunuza özgü seçenekleri detaylı olarak anlatacak ve kararınızda size destek olacaktır."
        },
        {
          question: "Tüm genetik hastalıklar bu test ile tespit edilebilir mi?",
          answer: "Hayır, taşıyıcılık tarama testimiz 300'den fazla resesif kalıtılan genetik hastalığı kapsar, ancak tüm genetik hastalıkları tespit edemez. Dominant kalıtılan hastalıklar, spontan mutasyonlar veya kromozomal anomaliler bu testin kapsamı dışındadır. Ayrıca, test edilen hastalıklar için bile %100 tespit oranı garanti edilemez; her testin teknik sınırlamaları vardır. Testin kapsamını ve sınırlamalarını anlamak için genetik danışmanınızla görüşmeniz önemlidir."
        },
        {
          question: "Tarama sonuçları ne kadar sürede alınır?",
          answer: "Taşıyıcılık tarama sonuçları genellikle örnek laboratuvara ulaştıktan sonra 2-3 hafta içinde hazır olur. Acil durumlarda (örn. ileri gebelik haftası), hızlandırılmış sonuç seçeneği de sunulmaktadır, bu durumda sonuçlar 5-7 iş günü içinde alınabilir. Sonuçlarınız hazır olduğunda, genetik danışmanınız sizinle iletişime geçecek ve sonuçları yorumlamak için bir görüşme ayarlayacaktır."
        },
        {
          question: "Eşimle akraba isek taşıyıcılık riski artar mı?",
          answer: "Evet, akraba evliliği durumunda, çiftlerin aynı resesif genetik hastalık için taşıyıcı olma olasılığı önemli ölçüde artar. Bu, ortak atalardan gelen aynı genetik varyantları taşıma olasılığının yüksek olmasından kaynaklanır. Akraba evliliği olan çiftlerde, çocuklarında genetik hastalık görülme riski genel popülasyona göre 2-3 kat daha yüksektir. Bu nedenle, akraba evliliği olan çiftlere kapsamlı taşıyıcılık taraması özellikle önerilir."
        }
      ]}
      cta={{
        title: "Geleceği Bilinçli Planlamak İçin İlk Adımı Atın",
        description: "ETNA Genetik Taşıyıcılık Taraması ile ailenizin genetik sağlığı hakkında bilgi edinin ve gelecek nesiller için bilinçli kararlar alın. Çocuklarınıza sağlıklı bir başlangıç vermek için genetik riskleri önceden belirleyin."
      }}
    />
  );
};

export default CarrierScreeningPage;