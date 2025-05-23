import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { BadgeAlert, TestTube, FileText, Dna, History, Users, CalendarClock, ShieldCheck } from "lucide-react";

const HereditaryCancerPage = () => {
  return (
    <ServiceDetailPage
      title="Kalıtsal Kanser Taraması"
      subtitle="Ailesel kanser riski taşıyıp taşımadığınızı öğrenerek, erken teşhis ve önleme stratejileri geliştirin"
      icon={<BadgeAlert className="h-6 w-6" />}
      heroImage="https://media.istockphoto.com/id/1327073519/tr/foto%C4%9Fraf/scientist-working-in-the-laboratory.jpg?s=2048x2048&w=is&k=20&c=ROCdZUl6UHJKEtexu2KTRYq7efy8RyDWwACEDi36e24="
      description={[
        "Kalıtsal kanser tarama testimiz, kanser sendromlarıyla ilişkili genlerinizi analiz ederek, aileden geçen kanser risklerini değerlendirir.",
        "Tüm kanser vakalarının yaklaşık %5-10'u kalıtsal genetik mutasyonlardan kaynaklanmaktadır. Bu mutasyonlar, BRCA1/2 (meme ve yumurtalık kanseri), Lynch sendromu (kolorektal, endometrium ve diğer kanserler), TP53 (Li-Fraumeni sendromu) gibi genlerde bulunabilir ve ailede kuşaklar boyunca aktarılabilir.",
        "Sapiens Genetik Kalıtsal Kanser Tarama testi, kanserle ilişkili genlerdeki mutasyonları tespit ederek, risk altındaki bireylerin belirlenmesine, erken tarama programlarının planlanmasına ve gerekirse önleyici tedbirlerin alınmasına yardımcı olur. Genetik risk faktörlerinizi bilmek, siz ve aileniz için yaşam kurtarıcı olabilir."
      ]}
      benefits={[
        "Kapsamlı kalıtsal kanser geni paneli analizi",
        "Aile risk değerlendirmesi",
        "Erken tarama önerileri",
        "Önleyici cerrahi veya ilaç seçenekleri hakkında bilgi",
        "Genetik danışmanlık desteği",
        "Aile üyeleri için test önerileri"
      ]}
      process={[
        {
          title: "Aile Öyküsü Değerlendirmesi",
          description: "Süreç, detaylı bir aile öyküsü değerlendirmesi ile başlar. Genetik danışmanımız, ailenizde görülen kanser vakaları, tanı yaşları ve diğer önemli sağlık bilgilerini toplar ve kalıtsal kanser riski için bir ön değerlendirme yapar.",
          icon: <History className="h-6 w-6" />
        },
        {
          title: "Genetik Test",
          description: "Kan veya tükürük örneğinden DNA'nız izole edilir ve kalıtsal kanserlerle ilişkili 1 genden 1000 gene kadar değişen, durumunuza özel seçilen paneller kullanılarak analiz edilir.",
          icon: <Dna className="h-6 w-6" />
        },
        {
          title: "Sonuçların Yorumlanması",
          description: "Test sonuçlarınız, genetik uzmanlarımız ve onkologlar tarafından değerlendirilir. Bulunan varyantlar, mevcut bilimsel literatür ve klinik rehberlere göre sınıflandırılır ve raporlanır.",
          icon: <FileText className="h-6 w-6" />
        },
        {
          title: "Genetik Danışmanlık ve Takip Planı",
          description: "Sonuçlarınızı anlamanıza yardımcı olmak, sorularınızı yanıtlamak ve uygun takip planını oluşturmak için genetik danışmanımızla görüşürsünüz. Risk durumunuza göre, size ve aile üyelerinize özel tarama önerileri ve risk azaltma stratejileri sunulur.",
          icon: <CalendarClock className="h-6 w-6" />
        }
      ]}
      faqs={[
        {
          question: "Kimler kalıtsal kanser testi yaptırmalıdır?",
          answer: "Kalıtsal kanser testi, aşağıdaki durumlardan bir veya daha fazlasına sahip kişiler için önerilir: 1) Ailede erken yaşta (50 yaş altı) kanser tanısı alan bireyler, 2) Aynı kişide birden fazla kanser türü, 3) Nadir görülen kanser türleri, 4) Ailede birden fazla bireyde aynı veya ilişkili kanser türleri, 5) Bilinen bir kalıtsal kanser sendromu olan aile üyeleri. Ancak, her durum benzersizdir ve test endikasyonları kişisel ve aile öyküsüne göre değişebilir."
        },
        {
          question: "Test sonucunda bir mutasyon bulunursa ne olur?",
          answer: "Eğer testte patojenik veya olası patojenik bir mutasyon tespit edilirse, bu durum kalıtsal bir kanser sendromu taşıdığınızı gösterir. Bu durumda, genetik danışmanınız ve sağlık ekibiniz, kanser riskinizi azaltmak için kapsamlı bir plan geliştirecektir. Bu plan, yoğunlaştırılmış tarama programları, risk azaltıcı cerrahi seçenekleri, kemoprevensiyon (ilaçla önleme) ve yaşam tarzı değişiklikleri içerebilir. Ayrıca, mutasyonun diğer aile üyelerine de geçmiş olabileceği düşünülerek, onların da test edilmesi önerilecektir."
        },
        {
          question: "Test sonucum negatif çıkarsa, hiç kanser riskim yok demek midir?",
          answer: "Hayır, negatif bir test sonucu kanser riskinizin olmadığı anlamına gelmez. Kalıtsal kanser testi, bilinen kalıtsal kanser genlerindeki mutasyonları araştırır, ancak sporadik (kalıtsal olmayan) kanserler veya henüz tanımlanmamış genlerdeki mutasyonlardan kaynaklanan kanserleri tespit edemez. Ayrıca, aile öyküsü güçlü olmasına rağmen herhangi bir mutasyon tespit edilmezse, bu 'gerçek negatif' veya 'açıklanamayan negatif' olabilir. Her durumda, yaşınıza ve risk faktörlerinize uygun standart kanser tarama önerilerine uymanız önemlidir."
        },
        {
          question: "Kalıtsal bir kanser mutasyonu taşıdığım tespit edilirse, çocuklarıma geçme olasılığı nedir?",
          answer: "Kalıtsal kanser sendromlarının çoğu, otozomal dominant kalıtım modeli ile aktarılır. Bu, mutasyonu taşıyan bir ebeveynin, çocuklarına %50 olasılıkla bu mutasyonu geçireceği anlamına gelir. Ancak, mutasyonu taşımak, kesinlikle kanser geliştireceğiniz anlamına gelmez; bu, sadece riskinizin arttığını gösterir. Riskin derecesi, spesifik gene ve mutasyona bağlı olarak değişir ve 'penetrans' olarak adlandırılır. Genetik danışmanınız, spesifik durumunuz için risk tahminleri ve yönetim stratejileri hakkında detaylı bilgi sağlayacaktır."
        },
        {
          question: "Test sonuçlarım sigorta şirketleri veya işverenler tarafından görülebilir mi?",
          answer: "ETNA olarak, genetik bilgilerinizin gizliliğini korumak için katı önlemler alıyoruz. Sonuçlarınız, yalnızca sizin açık izninizle sağlık profesyonelleriyle paylaşılır. Ancak, gizlilik konusuyla ilgili endişeleriniz varsa, genetik danışmanınızla konuşmanızı öneririz; size ülkenizdeki ilgili yasalar ve haklarınız hakkında detaylı bilgi verebilirler."
        },
        {
          question: "Çocuklarım için de bu testi yaptırabilir miyim?",
          answer: "Evet, 18 yaşın altındaki çocuklar için veli onayı ve mutlaka tıbbi gereklilik ve hekim isteği doğrultusunda test yapılabilir. Çocuklarda genetik test konusunda genetik danışmanlarımız size rehberlik edecektir."
        }
      ]}
      cta={{
        title: "Kanser Riskinizi Proaktif Olarak Yönetin",
        description: "Sapiens Genetik Kalıtsal Kanser Tarama testi ile genetik kanser riskinizi öğrenin ve ailenizi korumak için gerekli adımları atın. Erken bilgi, erken önlem ve daha sağlıklı bir gelecek demektir."
      }}
    />
  );
};

export default HereditaryCancerPage;