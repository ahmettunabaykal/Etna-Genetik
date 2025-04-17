import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { HeartPulse, TestTube, FileText, Dna, Heart, Activity, Pill, Salad } from "lucide-react";

const CardiovascularTestsPage = () => {
  return (
    <ServiceDetailPage
      title="Kardiyovasküler Testler"
      subtitle="Kalp ve damar sağlığı risk faktörlerinizi genetik düzeyde anlayarak, kardiyovasküler hastalıkları önleyin"
      icon={<HeartPulse className="h-6 w-6" />}
      heroImage="https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      description={[
        "Kardiyovasküler genetik testlerimiz, kalp hastalıkları ile ilişkili genetik varyantları tespit ederek kalp sağlığınız için kişiselleştirilmiş bir risk profili oluşturur.",
        "Kardiyovasküler hastalıklar, dünya genelinde önde gelen ölüm nedenlerinden biridir, ancak bu hastalıkların birçoğu, risk faktörlerinin erken tespit edilmesi ve doğru önlemlerin alınmasıyla önlenebilir veya geciktirilebilir. Genetik yapınız, kardiyovasküler sağlığınızı etkileyen önemli faktörlerden biridir ve lipid metabolizması, tromboz eğilimi, hipertansiyon riski ve ani kardiyak ölüm riski gibi parametreleri etkiler.",
        "ETNA Genetik Kardiyovasküler Test, kardiyovasküler sağlığı etkileyen geniş bir gen yelpazesini analiz ederek, kişisel genetik risk profilinizi oluşturur ve sağlığınızı optimize etmek için kişiselleştirilmiş stratejiler geliştirir. Bu test, hem yüksek risk altındaki bireyler hem de kardiyovasküler sağlıklarını proaktif olarak yönetmek isteyen sağlıklı bireyler için değerli bilgiler sağlar."
      ]}
      benefits={[
        "Kalp hastalıkları için genetik risk faktörlerinin analizi",
        "İlaç metabolizması ve etkinlik değerlendirmesi",
        "Diyet ve egzersiz önerileri",
        "Kişiselleştirilmiş kalp sağlığı takip planı",
        "Lipid profili ve metabolizma genetiği",
        "İnflamasyon yolakları ve endotel fonksiyon analizi"
      ]}
      process={[
        {
          title: "Kapsamlı Genetik Analiz",
          description: "Tükürük veya kan örneğinden DNA'nız izole edilir ve kardiyovasküler sağlığı etkileyen 100'den fazla gen analiz edilir. Bu genler, lipid metabolizması, kan basıncı regülasyonu, tromboz, inflamasyon ve kardiyak fonksiyon gibi çeşitli yolakları etkileyen varyantları içerir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Risk Profili Oluşturma",
          description: "Genetik varyantlarınız, bilimsel literatür ve klinik rehberler ışığında değerlendirilir ve kardiyovasküler hastalıklar için kişiselleştirilmiş bir risk profili oluşturulur. Bu profil, koroner arter hastalığı, atriyal fibrilasyon, inme ve diğer kardiyovasküler durumlar için riskinizi değerlendirir.",
          icon: <Heart className="h-6 w-6" />
        },
        {
          title: "Farmakogenetik Analiz",
          description: "Statinler, antikoagülanlar, antihipertansifler ve diğer kardiyovasküler ilaçlara yanıtınızı etkileyen genler analiz edilir. Bu bilgi, doktorunuzun tedavinizi optimize etmesine ve olası yan etkileri minimize etmesine yardımcı olabilir.",
          icon: <Pill className="h-6 w-6" />
        },
        {
          title: "Kişiselleştirilmiş Öneri Planı",
          description: "Genetik profiliniz, mevcut sağlık durumunuz ve aile öykünüz temelinde, beslenme, egzersiz, yaşam tarzı değişiklikleri ve tarama önerileri içeren kapsamlı bir kardiyovasküler sağlık planı oluşturulur.",
          icon: <FileText className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Bu test benim için uygun mu?",
          answer: "Kardiyovasküler genetik test, aşağıdaki durumlardan bir veya daha fazlasına sahip kişiler için özellikle yararlı olabilir: 1) Ailede erken yaşta (erkeklerde 55, kadınlarda 65 yaş altı) kardiyovasküler hastalık öyküsü, 2) Yüksek kolesterol, hipertansiyon gibi geleneksel risk faktörleri, 3) Kalp krizi veya inme geçirmiş ve gelecekteki riski değerlendirmek isteyenler, 4) Kardiyovasküler sağlığını proaktif olarak yönetmek isteyenler. Ancak, genetik testin size uygun olup olmadığını belirlemek için sağlık uzmanınızla konuşmanızı öneririz."
        },
        {
          question: "Testin sonuçları benim için ne anlama gelecek?",
          answer: "Test sonuçları, kardiyovasküler hastalıklar için genetik risk faktörlerinizi, ilaç yanıtınızı, beslenme ve egzersiz genetiğinizi içeren kapsamlı bir değerlendirme sağlar. Bu bilgiler, sağlık uzmanınızın kalp sağlığınızı optimize etmek için kişiselleştirilmiş öneriler geliştirmesine yardımcı olur. Örneğin, yüksek genetik risk tespit edilirse, daha yoğun izleme, yaşam tarzı değişiklikleri veya önleyici tedavi önerileri alabilirsiniz. İlaç metabolizmanızı etkileyen genetik varyantlar bulunursa, doktorunuz tedavinizi buna göre ayarlayabilir."
        },
        {
          question: "Çocuklarım için de bu testi yaptırmalı mıyım?",
          answer: "18 yaş altı çocuklarda kardiyovasküler genetik testler, genellikle aile öyküsünde erken başlangıçlı kalp hastalığı veya ani kardiyak ölüm vakaları gibi spesifik durumlar için düşünülür. Çocuklarda genetik test, karmaşık etik ve psikolojik faktörleri içerir ve kararlar duruma özgü olmalıdır. Çocuğunuz için test düşünüyorsanız, bir pediatrik kardiyolog veya genetik danışman ile görüşmenizi öneririz."
        },
        {
          question: "Test sonucum yüksek risk gösterirse ne yapmalıyım?",
          answer: "Yüksek kardiyovasküler risk tespit edilirse panik yapmayın. Bu, hastalığa kesin olarak yakalanacağınız anlamına gelmez, sadece riskinizin arttığını gösterir. Test sonuçlarınızı sağlık uzmanınızla paylaşın. Doktorunuz, risk düzeyinize bağlı olarak, daha sık izleme, yaşam tarzı değişiklikleri (diyet, egzersiz, sigarayı bırakma vb.) ve bazı durumlarda önleyici ilaç tedavisi önerebilir. Genetik risk faktörlerinizi bilmek, proaktif sağlık kararları almanıza olanak tanır."
        },
        {
          question: "Kardiyovasküler genetik test sonuçları ne sıklıkla güncellenmelidir?",
          answer: "Genetik yapınız hayat boyu değişmez, bu nedenle kardiyovasküler genetik testinizi tekrarlamanıza genellikle gerek yoktur. Ancak, genetik bilimi hızla ilerlemekte ve yeni gen-hastalık ilişkileri keşfedilmektedir. Genetik veritabanımız ve risk değerlendirme algoritmalarımız sürekli güncellenmektedir. Bu nedenle, yaklaşık 5-10 yılda bir genetik raporunuzun güncellenmesi, yeni bilimsel bulgulara dayalı ek içgörüler sağlayabilir. Ayrıca, sağlık durumunuzda önemli değişiklikler olursa, genetik danışmanınızla görüşerek raporunuzun yeniden değerlendirilip değerlendirilmemesi gerektiğini sorabilirsiniz."
        }
      ]}
      cta={{
        title: "Kalp Sağlığınızı Genetik Düzeyde Anlayın",
        description: "ETNA Genetik Kardiyovasküler Test ile genetik risk faktörlerinizi öğrenin ve kalp sağlığınızı optimize etmek için kişiselleştirilmiş stratejiler geliştirin. Proaktif bir yaklaşımla, kalbinizin uzun ve sağlıklı atmasını sağlayın."
      }}
    />
  );
};

export default CardiovascularTestsPage;