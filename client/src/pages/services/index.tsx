import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dna, Heart, FlaskRound, Baby, Microscope, Activity } from "lucide-react";

const Services = () => {
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

        <Tabs defaultValue="wes" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="wes" id="wes">Tüm Ekzom Dizileme</TabsTrigger>
            <TabsTrigger value="onkoloji" id="onkoloji">Tıbbi-Onkoloji</TabsTrigger>
            <TabsTrigger value="hemato" id="hemato">Hemato-Onkoloji</TabsTrigger>
            <TabsTrigger value="molekuler" id="molekuler">Moleküler Yapısal</TabsTrigger>
            <TabsTrigger value="sito" id="sito">Sito-FISH</TabsTrigger>
            <TabsTrigger value="prenatal" id="prenatal">Doğum Öncesi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wes">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <Dna className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Tüm Ekzom Dizileme (WES)</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Tüm ekzom dizileme (WES), protein kodlayan genlerin analizini sağlayarak hastalık 
                  yapıcı mutasyonları belirlemede en güçlü araçlardan biridir. Bu test, DNA'nızın 
                  protein kodlayan bölgelerini (eksomlar) analiz ederek, nadir hastalıkların 
                  teşhisinde kritik öneme sahiptir.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Özellikler ve Avantajlar:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>20.000'den fazla genin protein kodlayan bölgelerinin kapsamlı analizi</li>
                  <li>Tek bir testte binlerce potansiyel hastalık mutasyonunun taranması</li>
                  <li>Nadir ve teşhisi zor hastalıkların tespitinde %25-40 tanı oranı</li>
                  <li>Aile bireylerinin de test edilmesiyle tanı oranında artış</li>
                  <li>Kişiselleştirilmiş tedavi planlarının oluşturulmasına yardımcı olma</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Kimlere Önerilir?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Tanısı konmamış genetik hastalık şüphesi olan hastalar</li>
                  <li>Çoklu doğumsal anomalisi olan çocuklar</li>
                  <li>Nörogelişimsel bozuklukları olan hastalar</li>
                  <li>Ailesel hastalık öyküsü olanlar</li>
                  <li>Standart genetik testlerle tanısı konamamış hastalar</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="onkoloji">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Tıbbi-Onkoloji Testleri</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Solid tümörler ve kanser türlerinin tanısını destekleyen genetik testler, kişiye özel 
                  tedavi planları için kritik bilgiler sunar. Bu testler, tümör dokusundaki genetik 
                  değişiklikleri analiz ederek kanser türünün doğru tanımlanmasına ve en etkili tedavi 
                  seçeneklerinin belirlenmesine yardımcı olur.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Sunduğumuz Onkoloji Testleri:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Kapsamlı Kanser Panel Testi:</span> 500'den fazla kanser genini analiz eder</li>
                  <li><span className="font-medium">Hedefli Tedavi Belirteçleri:</span> EGFR, KRAS, BRAF, HER2 gibi tedaviye yanıtı öngören genetik değişimler</li>
                  <li><span className="font-medium">Tümör Mutasyon Yükü (TMB):</span> İmmünoterapi yanıtını öngörmede kullanılır</li>
                  <li><span className="font-medium">Mikrosatelit İnstabilite (MSI):</span> Lynch sendromu ve immünoterapi yanıtı için önemli bir belirteç</li>
                  <li><span className="font-medium">Kalıtsal Kanser Sendromları:</span> BRCA1/2, Lynch sendromu, Li-Fraumeni gibi kalıtsal kanser risklerini değerlendirme</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Klinik Faydalar:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Kişiselleştirilmiş kanser tedavi planlarının oluşturulması</li>
                  <li>Hedefe yönelik tedavilerin belirlenmesi</li>
                  <li>Tedaviye direnç mekanizmalarının anlaşılması</li>
                  <li>Nüksetme riskinin değerlendirilmesi</li>
                  <li>Aile üyelerinin kanser riskinin değerlendirilmesi</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hemato">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <FlaskRound className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Hemato-Onkoloji Testleri</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Kan kanserleri ve hematolojik bozuklukların teşhisi ve yönetimi için geliştirilmiş 
                  genetik analiz testleridir. Bu testler, lösemi, lenfoma ve miyelom gibi kan kanserlerinin 
                  alt tiplerinin tanımlanmasında, tedavi yanıtının izlenmesinde ve minimal kalıntı hastalığın 
                  tespitinde kritik öneme sahiptir.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Test Çeşitlerimiz:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Lösemi ve Lenfoma Paneli:</span> Hematolojik malignitelerde sık görülen genetik değişimleri kapsamlı olarak analiz eder</li>
                  <li><span className="font-medium">BCR-ABL Testi:</span> Kronik Miyeloid Lösemi tanısı ve tedavi takibi için</li>
                  <li><span className="font-medium">JAK2, CALR, MPL Testleri:</span> Miyeloproliferatif hastalıkların tanısı için</li>
                  <li><span className="font-medium">Klonalite Testleri:</span> B ve T hücreli lenfoproliferatif hastalıkların tanısında</li>
                  <li><span className="font-medium">Minimal Rezidüel Hastalık (MRH) Değerlendirmesi:</span> Tedavi sonrası kalan kanser hücrelerinin tespiti için yüksek hassasiyete sahip testler</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Uygulama Alanları:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Akut ve kronik lösemilerin tanı ve sınıflandırması</li>
                  <li>Lenfoma alt tiplerinin belirlenmesi</li>
                  <li>Miyelodisplastik sendrom ve miyeloproliferatif hastalıkların tanısı</li>
                  <li>Tedavi yanıtının moleküler düzeyde izlenmesi</li>
                  <li>Nüks riskinin değerlendirilmesi</li>
                  <li>Kemik iliği nakli sonrası takip</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="molekuler">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <Dna className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Moleküler Yapısal Analiz</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  DNA'nızın yapısını inceleyerek sağlık üzerinde etkili olabilecek genetik varyasyonları belirlemek için 
                  gelişmiş analizler sunuyoruz. Bu testler, tek nükleotid varyasyonlarından (SNV) büyük yapısal değişikliklere 
                  kadar DNA'nızın farklı seviyelerini inceleyerek, çeşitli genetik durumların tanı ve yönetiminde yardımcı olur.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Analiz Yöntemlerimiz:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Yeni Nesil Dizileme (NGS):</span> Çok sayıda genin hızlı ve paralel olarak dizilenmesi</li>
                  <li><span className="font-medium">Mikroarray Testleri:</span> Kromozomlardaki kopya sayısı değişikliklerinin (CNV) geniş çaplı taraması</li>
                  <li><span className="font-medium">Sanger Dizileme:</span> Spesifik gen bölgelerinin hedefli analizi</li>
                  <li><span className="font-medium">MLPA (Multiplex Ligasyon-bağımlı Prob Amplifikasyonu):</span> Gen duplikasyon ve delesyonlarının tespiti</li>
                  <li><span className="font-medium">qPCR ve dijital PCR:</span> Gen ekspresyonu ve kopya sayısı değişikliklerinin hassas analizi</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Uygulama Alanları:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Nadir hastalıkların moleküler tanısı</li>
                  <li>Genetik sendromların tanımlanması</li>
                  <li>Nörodejeneratif hastalıkların genetik analizi</li>
                  <li>Kardiyogenetik hastalıkların tanısı</li>
                  <li>İlaç metabolizmasını etkileyen genetik varyasyonların tespiti (farmakogenomik)</li>
                  <li>Kişiselleştirilmiş tıp uygulamaları için genetik risk değerlendirmesi</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sito">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <Microscope className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Sito-FISH Yapısal Analiz</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Kromozomal yapıları detaylı şekilde görselleştirerek genetik bozuklukların teşhisinde kritik rol oynayan 
                  ileri düzey analizdir. Floresan In Situ Hibridizasyon (FISH) tekniği kullanılarak, spesifik DNA dizilerinin 
                  hücrelerdeki konumu ve sayısı belirlenir ve kromozomal yapısal anormallikler tespit edilir.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Sito-FISH Tekniklerimiz:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Klasik Sitogenetik Analiz:</span> Kromozomların bant düzeyinde incelenmesi</li>
                  <li><span className="font-medium">Interfaz FISH:</span> Hücre çekirdeğindeki spesifik DNA bölgelerinin incelenmesi</li>
                  <li><span className="font-medium">Metafaz FISH:</span> Bölünme aşamasındaki hücrelerde kromozomların detaylı analizi</li>
                  <li><span className="font-medium">Çoklu Prob FISH:</span> Birden fazla kromozomal bölgenin eş zamanlı incelenmesi</li>
                  <li><span className="font-medium">Kromozom Microarray Analizi (CMA):</span> Tüm genomdaki kopya sayısı değişimlerinin yüksek çözünürlüklü tespiti</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Kullanım Alanları:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Kanser tanısı ve sınıflandırılması</li>
                  <li>Kromozomal delesyon ve duplikasyon sendromlarının tanısı</li>
                  <li>Doğum öncesi genetik anomalilerin tespiti</li>
                  <li>Genetik sendromların tanımlanması</li>
                  <li>Translokasyon taşıyıcılarının belirlenmesi</li>
                  <li>Lösemi ve lenfoma alt tiplerinin tanımlanması ve takibi</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="prenatal">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                      <Baby className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">Doğum Öncesi Testler</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Fetüsün potansiyel genetik durumlarını belirlemeye yardımcı olan doğum öncesi testlerimiz ile 
                  geleceğe güvenle adım atın. Bu testler, hamilelik sürecinde bebeğin sağlık durumu hakkında 
                  değerli bilgiler sağlayarak, ebeveynlere ve sağlık profesyonellerine planlama yapma imkanı tanır.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Doğum Öncesi Test Seçeneklerimiz:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><span className="font-medium">Invaziv Olmayan Prenatal Test (NIPT):</span> Anne kanındaki fetal DNA'nın analizi ile yaygın kromozomal anomalilerin taranması</li>
                  <li><span className="font-medium">Amniyosentez Genetik Analizi:</span> Amniyotik sıvıdan alınan hücreler üzerinde detaylı genetik inceleme</li>
                  <li><span className="font-medium">Koryon Villus Biyopsisi (CVS) Analizi:</span> Plasenta dokusundan alınan örneklerin genetik analizi</li>
                  <li><span className="font-medium">Fetal Ekzom Dizileme:</span> Nadir genetik bozuklukların kapsamlı analizi</li>
                  <li><span className="font-medium">Taşıyıcı Tarama Testi:</span> Ebeveynlerin resesif genetik hastalık taşıyıcılığının belirlenmesi</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 font-heading mb-4">Sunduğumuz Bilgiler:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Down sendromu, Edwards sendromu ve Patau sendromu gibi yaygın trizomilerin risk değerlendirmesi</li>
                  <li>Cinsiyet kromozomu anormallikleri</li>
                  <li>Mikrodelesyon ve mikroduplikasyon sendromları</li>
                  <li>Tek gen hastalıkları için spesifik testler</li>
                  <li>Genetik danışmanlık ve aile planlaması desteği</li>
                  <li>İleri genetik test seçenekleri hakkında bilgilendirme</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div id="sss" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Genetik test sonuçlarım ne kadar sürede hazır olur?</h3>
                <p className="text-gray-700">
                  Test türüne bağlı olarak sonuç süreleri değişmektedir. NIPT gibi doğum öncesi tarama testleri 5-7 iş günü içinde, 
                  standart genetik paneller 2-3 hafta içinde, tüm ekzom dizileme gibi kapsamlı testler ise 4-6 hafta içinde 
                  sonuçlanmaktadır. Acil durumlarda hızlandırılmış sonuç seçenekleri de mevcuttur.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Genetik test yaptırmak için doktor sevki gerekli midir?</h3>
                <p className="text-gray-700">
                  Bazı testler için doktor sevki gerekirken, bazı tarama testleri doğrudan kişisel başvuru ile yaptırılabilir. 
                  Ancak tüm test sonuçlarının doğru yorumlanması için uzman bir hekim değerlendirmesi önemlidir. Test öncesinde 
                  genetik danışmanlarımız sizinle iletişime geçerek, durumunuza en uygun prosedür hakkında bilgi verecektir.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Genetik test sonuçlarım gizli tutulacak mı?</h3>
                <p className="text-gray-700">
                  Evet, ETNA Genetik olarak hasta gizliliği ve veri güvenliği en önemli önceliklerimiz arasındadır. 
                  Tüm genetik test sonuçlarınız, KVKK ve uluslararası veri güvenliği standartlarına uygun şekilde saklanır 
                  ve korunur. Verileriniz yasal zorunluluklar dışında hiçbir üçüncü tarafla paylaşılmaz.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Testler için hangi örnek türleri gereklidir?</h3>
                <p className="text-gray-700">
                  Test türüne göre kan, tükürük, yanak içi sürüntüsü, doku örnekleri, amniyotik sıvı veya koryon villus 
                  örnekleri kullanılabilir. En yaygın olarak kullanılan örnek türü kan örneğidir. Örnek alımı konusunda 
                  detaylı bilgilendirme ve gerekirse evde örnek alma hizmeti sunulmaktadır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="sozluk" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 font-heading mb-8 text-center">Genetik Terimleri Sözlüğü</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">DNA (Deoksiribonükleik Asit)</h3>
                <p className="text-gray-700">
                  Genetik bilgiyi taşıyan ve tüm canlı organizmaların gelişimini ve işlevini yöneten moleküldür. 
                  A, T, G ve C harfleriyle gösterilen dört temel yapı taşından (nükleotid) oluşur.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Gen</h3>
                <p className="text-gray-700">
                  DNA'nın bir protein veya RNA molekülünün üretilmesini sağlayan fonksiyonel birimidir. 
                  İnsan genomunda yaklaşık 20.000-25.000 gen bulunur.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Mutasyon</h3>
                <p className="text-gray-700">
                  DNA dizisindeki kalıcı değişikliklerdir. Mutasyonlar zararsız olabildiği gibi, hastalıklara 
                  da yol açabilir veya bazı durumlarda evrimsel avantaj sağlayabilir.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Genom</h3>
                <p className="text-gray-700">
                  Bir organizmanın genetik materyalinin tamamıdır. İnsan genomu yaklaşık 3 milyar 
                  DNA baz çifti içerir ve 23 çift kromozomda bulunur.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">Ekzom</h3>
                <p className="text-gray-700">
                  Genomun protein kodlayan kısmıdır. İnsan genomunun yaklaşık %1-2'sini oluşturmasına rağmen, 
                  bilinen hastalık mutasyonlarının %85'i ekzom bölgesinde bulunur.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 font-heading mb-2">FISH (Floresan In Situ Hibridizasyon)</h3>
                <p className="text-gray-700">
                  Kromozomlardaki spesifik DNA dizilerini görselleştirmek için kullanılan bir teknik. 
                  Kromozomal anomalilerin, gen delesyonlarının veya duplikasyonlarının tespitinde kullanılır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
