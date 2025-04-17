import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Dna, Heart, FlaskRound, Baby, 
  Microscope, Activity, Apple, Dumbbell, 
  Scroll, Sparkles, Beaker, Leaf,
  ListTree, ShieldAlert, BadgeAlert,
  HeartPulse, ScrollText
} from "lucide-react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"wellness" | "medical">("wellness");

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading">Hizmetlerimiz</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ETNA Genetik olarak, genetik biliminin en son yeniliklerini kullanarak kapsamlı ve 
            güvenilir test hizmetleri sunuyoruz. Kişiselleştirilmiş sağlık yaklaşımı için 
            ihtiyacınız olan genetik çözümlere ulaşın.
          </p>
        </div>

        {/* Main category selector */}
        <div className="mb-10">
          <Tabs defaultValue="wellness" onValueChange={(v) => setActiveCategory(v as "wellness" | "medical")}>
            <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto">
              <TabsTrigger value="wellness" className="text-base py-3">
                Sağlıklı Yaşam ve İyilik Hali
              </TabsTrigger>
              <TabsTrigger value="medical" className="text-base py-3">
                Sağlık ve Genetik Testler
              </TabsTrigger>
            </TabsList>

            {/* Wellness Category */}
            <TabsContent value="wellness" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<Apple className="h-6 w-6" />}
                  title="Kişiselleştirilmiş Tıp"
                  description="Genetik profilinize dayalı kişiselleştirilmiş sağlık planları ile hayat kalitenizi artırın."
                  content="Genetik yapınız, yaşam tarzı değişikliklerine nasıl yanıt vereceğinizi belirler. Kişiselleştirilmiş tıp hizmetimiz ile DNA'nızın benzersiz yapısını analiz ederek, sizin için en etkili sağlık yaklaşımlarını belirliyor ve doktorunuzla birlikte çalışarak genetik yapınıza uygun tedavi ve koruyucu sağlık planları oluşturuyoruz."
                  benefits={[
                    "Kişiye özel sağlık ve beslenme planları",
                    "İlaç tepkilerinin önceden belirlenmesi",
                    "Risk faktörlerinin erken tespiti",
                    "Yaşam boyu sağlık stratejileri"
                  ]}
                />

                <ServiceCard 
                  icon={<Apple className="h-6 w-6" />}
                  title="Sağlıklı Yaşam İçin Beslenme Genetiği"
                  description="DNA'nıza uygun beslenme planıyla ideal kilonuza ulaşın ve sağlıklı bir yaşam sürün."
                  content="Beslenme genetiği testimiz, vücudunuzun besinleri nasıl işlediğini, hangi besin gruplarına daha duyarlı olduğunuzu ve metabolizmanızın nasıl çalıştığını analiz ederek size özel beslenme önerileri sunar. Bu sayede kilo yönetimi, enerji seviyenizi artırma ve kronik hastalık risklerini azaltma konularında kişiselleştirilmiş çözümler elde edersiniz."
                  benefits={[
                    "Karbonhidrat, protein ve yağ metabolizmanızın genetik analizi",
                    "Vitamin ve mineral ihtiyaçlarınızın belirlenmesi",
                    "Gıda intoleranslarının tespiti",
                    "Kişiselleştirilmiş diyet planları"
                  ]}
                />

                <ServiceCard 
                  icon={<Beaker className="h-6 w-6" />}
                  title="Mikrobiyom Analizleri"
                  description="Bağırsak floranızın detaylı analiziyle bağışıklık sisteminizi güçlendirin ve sindirim sorunlarına çözüm bulun."
                  content="Mikrobiyom analizimiz, bağırsak floranızdaki mikroorganizmaların kompozisyonunu ve çeşitliliğini değerlendirerek genel sağlık durumunuz hakkında önemli bilgiler sunar. Bu analiz, sindirim sistemi sorunları, bağışıklık sistemi dengesizlikleri ve kronik inflamasyon gibi durumların temel nedenlerini belirlemeye yardımcı olur."
                  benefits={[
                    "Bağırsak mikrobiyom profilinizin haritalandırılması",
                    "Probiyotik ve prebiyotik ihtiyaçlarının belirlenmesi",
                    "Mikrobiyom dengesizliklerinin tespiti",
                    "Bağırsak sağlığını iyileştirme planları"
                  ]}
                />

                <ServiceCard 
                  icon={<Dumbbell className="h-6 w-6" />}
                  title="Sağlıklı Yaşam İçin Spor Genetiği"
                  description="Genetik yapınıza uygun egzersiz programıyla performansınızı artırın ve sakatlanma riskinizi azaltın."
                  content="Spor genetiği testimiz, kaslarınızın tipini, aerobik ve anaerobik kapasitelerinizi, sakatlanma riskinizi ve toparlanma hızınızı belirleyen genleri analiz eder. Bu sayede vücudunuzun hangi tür egzersizlere daha yatkın olduğunu öğrenir, antrenman programınızı genetik potansiyelinize göre optimize edebilirsiniz."
                  benefits={[
                    "Kas lifi tipinizin belirlenmesi (hız/dayanıklılık eğilimi)",
                    "Aerobik/anaerobik egzersiz yatkınlığınızın tespiti",
                    "Yaralanma risk faktörlerinin analizi",
                    "Genetik yapınıza uygun egzersiz planları"
                  ]}
                />

                <ServiceCard 
                  icon={<Sparkles className="h-6 w-6" />}
                  title="Cilt Sağlığı"
                  description="Cilt yapınızı genetik düzeyde anlayarak, yaşlanma karşıtı ve cilt sağlığı stratejilerinizi kişiselleştirin."
                  content="Cilt genetiği testimiz, cildinizin yaşlanma sürecini, kollajen üretimi kapasitesini, güneş hasarına duyarlılığını ve inflamasyon eğilimini belirleyen genleri analiz eder. Bu bilgilerle, cildinizin ihtiyaçlarına özel bakım rutinleri ve ürün önerileri geliştirebilir, erken yaşlanma belirtilerini geciktirebilirsiniz."
                  benefits={[
                    "Cildinizin yaşlanma sürecini etkileyen genlerin analizi",
                    "UV hasarına genetik duyarlılığın belirlenmesi",
                    "Cilt nem dengesi ve elastikiyetine etki eden faktörlerin tespiti",
                    "DNA bazlı cilt bakım önerileri"
                  ]}
                />

                <ServiceCard 
                  icon={<ListTree className="h-6 w-6" />}
                  title="Soy Ağacı (Atasal Köken Analizi)"
                  description="Genetik geçmişinizi keşfedin ve kökenlerinizle ilgili derin bir içgörü kazanın."
                  content="Atasal köken testimiz, DNA'nızı dünya genelindeki referans popülasyonlarla karşılaştırarak etnik kökeninizi ve soy geçmişinizi ortaya çıkarır. Bu test, ailenizin nereden geldiğini, genetik akrabalıklarınızı ve kültürel bağlarınızı keşfetmenize olanak tanır, size kim olduğunuzla ilgili daha derin bir anlayış kazandırır."
                  benefits={[
                    "Detaylı etnik köken yüzdeleri",
                    "Göç yollarının haritalandırılması",
                    "Genetik akraba eşleştirmeleri",
                    "Nesiller boyu aile geçmişinizin keşfi"
                  ]}
                />
              </div>
            </TabsContent>

            {/* Medical Category */}
            <TabsContent value="medical" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<ShieldAlert className="h-6 w-6" />}
                  title="Koruyucu Hekimlik İçin Poligenik Risk Skorları"
                  description="Yaygın hastalıklar için genetik risk faktörlerinizi öğrenerek önleyici tedbirler alın."
                  content="Poligenik risk skoru analizimiz, yaygın hastalıklar için genetik yatkınlıklarınızı değerlendirir. Birden fazla genin katkıda bulunduğu kompleks hastalıklara yönelik risk skorlarınızı hesaplayarak, önleyici sağlık stratejileri geliştirmenize yardımcı olur. Bu sayede yüksek risk taşıdığınız durumlar için erken önlemler alabilirsiniz."
                  benefits={[
                    "Kardiyovasküler hastalıklar, diyabet, alzheimer gibi yaygın hastalıklar için risk değerlendirmesi",
                    "Yaşam tarzı değişiklikleri için kişiselleştirilmiş öneriler",
                    "Tarama programları için zaman çizelgesi",
                    "Risk azaltma stratejileri"
                  ]}
                />

                <ServiceCard 
                  icon={<Activity className="h-6 w-6" />}
                  title="Kanser Genetiği ve Kişiye Özel Tedavi"
                  description="Kanser tedavinizi genetik profilinize göre optimize edin, en etkili tedavi seçeneklerini belirleyin."
                  content="Kanser genetiği testlerimiz, tümör hücrelerinizdeki genetik değişiklikleri tespit ederek, kanser tipiniz için en etkili tedavi seçeneklerini belirlemenize yardımcı olur. Bu analizler, hedefe yönelik tedavilerin etkinliğini tahmin etmek, kemoterapiye duyarlılığı değerlendirmek ve immünoterapi yanıtını öngörmek için kullanılabilir."
                  benefits={[
                    "Tümör genetik profili çıkarma",
                    "Hedefe yönelik tedavilerin etkinliğini tahmin etme",
                    "İlaç direnci mekanizmalarının belirlenmesi",
                    "Kişiselleştirilmiş kanser tedavi planları"
                  ]}
                />

                <ServiceCard 
                  icon={<BadgeAlert className="h-6 w-6" />}
                  title="Kalıtsal Kanser Taraması"
                  description="Ailesel kanser riski taşıyıp taşımadığınızı öğrenerek, erken teşhis ve önleme stratejileri geliştirin."
                  content="Kalıtsal kanser tarama testimiz, kanser sendromlarıyla ilişkili genlerinizi analiz ederek, aileden geçen kanser risklerini değerlendirir. BRCA1/2, Lynch sendromu ve diğer kalıtsal kanser sendromlarıyla ilişkili mutasyonları tespit ederek, risk altındaki aile üyelerinin belirlenmesine ve erken tarama programlarının planlanmasına yardımcı olur."
                  benefits={[
                    "Kapsamlı kalıtsal kanser geni paneli analizi",
                    "Aile risk değerlendirmesi",
                    "Erken tarama önerileri",
                    "Genetik danışmanlık desteği"
                  ]}
                />

                <ServiceCard 
                  icon={<HeartPulse className="h-6 w-6" />}
                  title="Kardiyovasküler Testler"
                  description="Kalp ve damar sağlığı risk faktörlerinizi genetik düzeyde anlayarak, kardiyovasküler hastalıkları önleyin."
                  content="Kardiyovasküler genetik testlerimiz, kalp hastalıkları ile ilişkili genetik varyantları tespit ederek kalp sağlığınız için kişiselleştirilmiş bir risk profili oluşturur. Bu bilgiler, lipid metabolizması, tromboz eğilimi, hipertansiyon riski ve ani kardiyak ölüm riski gibi faktörleri değerlendirerek, kişiselleştirilmiş kalp sağlığı stratejileri geliştirmenize yardımcı olur."
                  benefits={[
                    "Kalp hastalıkları için genetik risk faktörlerinin analizi",
                    "İlaç metabolizması ve etkinlik değerlendirmesi",
                    "Diyet ve egzersiz önerileri",
                    "Kişiselleştirilmiş kalp sağlığı takip planı"
                  ]}
                />

                <ServiceCard 
                  icon={<ScrollText className="h-6 w-6" />}
                  title="Taşıyıcılık Taraması"
                  description="Çocuklarınıza aktarabileceğiniz genetik hastalık risklerini belirleyin ve aile planlamanızı buna göre şekillendirin."
                  content="Taşıyıcılık tarama testlerimiz, siz ve partnerinizin resesif genetik hastalık taşıyıcılık durumunu değerlendirerek, gelecek nesillere aktarılabilecek hastalık risklerini belirler. Kistik fibrozis, orak hücreli anemi, Tay-Sachs hastalığı gibi yüzlerce resesif genetik hastalık için taşıyıcılık durumunuzu öğrenerek aile planlamanızı bilinçli bir şekilde yapabilirsiniz."
                  benefits={[
                    "Geniş kapsamlı taşıyıcılık paneli (300+ genetik hastalık)",
                    "Çift bazlı risk değerlendirmesi",
                    "Gebelik öncesi genetik danışmanlık",
                    "Aile planlama seçenekleri sunma"
                  ]}
                />

                <ServiceCard 
                  icon={<Baby className="h-6 w-6" />}
                  title="Yeni Doğan Taraması"
                  description="Bebeğinizin sağlıklı gelişimi için erken tedavi fırsatı sağlayan kapsamlı genetik tarama."
                  content="Genişletilmiş yenidoğan tarama testimiz, standart yenidoğan taramalarından çok daha fazla genetik hastalığı kapsar. Bu test, erken müdahale ile tedavi edilebilecek metabolik, hematolojik ve gelişimsel bozuklukların erken teşhisini sağlayarak, bebeğinizin sağlıklı gelişimini destekler. Sonuçlar, potansiyel sağlık sorunlarına proaktif yaklaşım geliştirmenize olanak tanır."
                  benefits={[
                    "Genişletilmiş metabolik hastalık paneli",
                    "Erken tedavi şansı sunan hastalıkların tespiti",
                    "Beslenme ve gelişim önerileri",
                    "Uzun vadeli sağlık takip planı"
                  ]}
                />
              </div>

              <div className="mt-12">
                <Accordion type="single" collapsible className="bg-white shadow-md rounded-lg overflow-hidden">
                  <AccordionItem value="nadir-hastaliklar">
                    <AccordionTrigger className="p-6 text-xl font-semibold text-gray-900 font-heading">
                      Nadir Hastalıkların Teşhisi
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="border-none shadow-none">
                          <CardHeader>
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                                  <Dna className="h-5 w-5" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <CardTitle className="text-lg font-heading">Ekzom & Genom Testleri</CardTitle>
                              </div>
                            </div>
                            <CardDescription className="ml-14">
                              Karmaşık ve tanısı konmamış genetik hastalıkların teşhisi için kapsamlı DNA analizi.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">
                              Tüm ekzom dizileme (WES) ve tüm genom dizileme (WGS) testlerimiz, nadir ve teşhisi zor genetik hastalıkların tanısında altın standarttır. Protein kodlayan tüm genleri veya tüm genomu analiz ederek, diğer testlerle tespit edilemeyen kompleks genetik durumları belirlemeye yardımcı olur.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                              <li>Tüm protein kodlayan genlerin kapsamlı analizi</li>
                              <li>Nadir hastalıklar için %30-40 tanı oranı</li>
                              <li>Aile bazlı analiz seçeneği</li>
                              <li>Detaylı klinik raporlama</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-none shadow-none">
                          <CardHeader>
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-primary-600">
                                  <Scroll className="h-5 w-5" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <CardTitle className="text-lg font-heading">RNA Dizileme Hizmetleri</CardTitle>
                              </div>
                            </div>
                            <CardDescription className="ml-14">
                              Gen ekspresyonu ve fonksiyonunu analiz ederek DNA dizileme ile tespit edilemeyen hastalıkları teşhis edin.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">
                              RNA dizileme (transkriptom analizi), DNA dizileme ile belirlenemeyen genetik hastalıkların tanısında tamamlayıcı bir yaklaşım sunar. Gen ekspresyonu, splicing varyantları ve regülasyon mekanizmalarını inceleyerek, hastalık mekanizmalarını daha iyi anlamaya yardımcı olur.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                              <li>DNA dizileme ile kaçırılan varyantların tespiti</li>
                              <li>Splicing kusurlarının analizi</li>
                              <li>Ekspresyon düzeyi değişikliklerinin değerlendirilmesi</li>
                              <li>Fonksiyonel genomik bilgi sağlama</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Tüm genetik testlerimiz, uzman genetik danışmanlarımız eşliğinde yorumlanır ve sonuçlarınız hakkında kapsamlı bilgilendirme yapılır. Detaylı bilgi için bizimle iletişime geçebilirsiniz.
          </p>
          <Button asChild className="px-8 py-6 text-lg">
            <Link href="/iletisim">
              Bizimle İletişime Geçin
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  benefits: string[];
};

const ServiceCard = ({ icon, title, description, content, benefits }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600">
              {icon}
            </div>
          </div>
          <div className="ml-4">
            <CardTitle className="text-xl font-heading">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 font-medium mb-4">{description}</p>
        <p className="text-gray-600 mb-4 text-sm">{content}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Sağladığı Faydalar:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/iletisim">
            Detaylı Bilgi Al
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Services;