// Genetic Tests data
export const geneticTests = [
  {
    id: "wes",
    title: "Tüm Ekzom Dizileme (WES)",
    description: "Tüm ekzom dizileme (WES), protein kodlayan genlerin analizini sağlayarak hastalık yapıcı mutasyonları belirlemede en güçlü araçlardan biridir.",
    icon: "Dna",
    fullDescription: "Tüm ekzom dizileme (WES), DNA'nızın protein kodlayan bölgelerini analiz ederek, nadir hastalıkların teşhisinde kritik öneme sahiptir. Bu test, tek bir testte binlerce potansiyel hastalık mutasyonunun taranmasını sağlar.",
    features: [
      "20.000'den fazla genin protein kodlayan bölgelerinin kapsamlı analizi",
      "Tek bir testte binlerce potansiyel hastalık mutasyonunun taranması",
      "Nadir ve teşhisi zor hastalıkların tespitinde %25-40 tanı oranı",
      "Aile bireylerinin de test edilmesiyle tanı oranında artış",
      "Kişiselleştirilmiş tedavi planlarının oluşturulmasına yardımcı olma"
    ],
    recommendedFor: [
      "Tanısı konmamış genetik hastalık şüphesi olan hastalar",
      "Çoklu doğumsal anomalisi olan çocuklar",
      "Nörogelişimsel bozuklukları olan hastalar",
      "Ailesel hastalık öyküsü olanlar",
      "Standart genetik testlerle tanısı konamamış hastalar"
    ]
  },
  {
    id: "onkoloji",
    title: "Tıbbi-Onkoloji Testleri",
    description: "Solid tümörler ve kanser türlerinin tanısını destekleyen genetik testler, kişiye özel tedavi planları için kritik bilgiler sunar.",
    icon: "Heart",
    fullDescription: "Solid tümörler ve kanser türlerinin tanısını destekleyen genetik testler, kişiye özel tedavi planları için kritik bilgiler sunar. Bu testler, tümör dokusundaki genetik değişiklikleri analiz ederek kanser türünün doğru tanımlanmasına ve en etkili tedavi seçeneklerinin belirlenmesine yardımcı olur.",
    features: [
      "Kapsamlı Kanser Panel Testi: 500'den fazla kanser genini analiz eder",
      "Hedefli Tedavi Belirteçleri: EGFR, KRAS, BRAF, HER2 gibi tedaviye yanıtı öngören genetik değişimler",
      "Tümör Mutasyon Yükü (TMB): İmmünoterapi yanıtını öngörmede kullanılır",
      "Mikrosatelit İnstabilite (MSI): Lynch sendromu ve immünoterapi yanıtı için önemli bir belirteç",
      "Kalıtsal Kanser Sendromları: BRCA1/2, Lynch sendromu, Li-Fraumeni gibi kalıtsal kanser risklerini değerlendirme"
    ],
    benefits: [
      "Kişiselleştirilmiş kanser tedavi planlarının oluşturulması",
      "Hedefe yönelik tedavilerin belirlenmesi",
      "Tedaviye direnç mekanizmalarının anlaşılması",
      "Nüksetme riskinin değerlendirilmesi",
      "Aile üyelerinin kanser riskinin değerlendirilmesi"
    ]
  },
  {
    id: "hemato",
    title: "Hemato-Onkoloji Testleri",
    description: "Kan kanserleri ve hematolojik bozuklukların teşhisi ve yönetimi için geliştirilmiş genetik analiz testleridir.",
    icon: "Flask",
    fullDescription: "Kan kanserleri ve hematolojik bozuklukların teşhisi ve yönetimi için geliştirilmiş genetik analiz testleridir. Bu testler, lösemi, lenfoma ve miyelom gibi kan kanserlerinin alt tiplerinin tanımlanmasında, tedavi yanıtının izlenmesinde ve minimal kalıntı hastalığın tespitinde kritik öneme sahiptir.",
    testTypes: [
      "Lösemi ve Lenfoma Paneli: Hematolojik malignitelerde sık görülen genetik değişimleri kapsamlı olarak analiz eder",
      "BCR-ABL Testi: Kronik Miyeloid Lösemi tanısı ve tedavi takibi için",
      "JAK2, CALR, MPL Testleri: Miyeloproliferatif hastalıkların tanısı için",
      "Klonalite Testleri: B ve T hücreli lenfoproliferatif hastalıkların tanısında",
      "Minimal Rezidüel Hastalık (MRH) Değerlendirmesi: Tedavi sonrası kalan kanser hücrelerinin tespiti için yüksek hassasiyete sahip testler"
    ],
    applications: [
      "Akut ve kronik lösemilerin tanı ve sınıflandırması",
      "Lenfoma alt tiplerinin belirlenmesi",
      "Miyelodisplastik sendrom ve miyeloproliferatif hastalıkların tanısı",
      "Tedavi yanıtının moleküler düzeyde izlenmesi",
      "Nüks riskinin değerlendirilmesi",
      "Kemik iliği nakli sonrası takip"
    ]
  },
  {
    id: "molekuler",
    title: "Moleküler Yapısal Analiz",
    description: "DNA'nızın yapısını inceleyerek sağlık üzerinde etkili olabilecek genetik varyasyonları belirlemek için gelişmiş analizler sunuyoruz.",
    icon: "Dna",
    fullDescription: "DNA'nızın yapısını inceleyerek sağlık üzerinde etkili olabilecek genetik varyasyonları belirlemek için gelişmiş analizler sunuyoruz. Bu testler, tek nükleotid varyasyonlarından (SNV) büyük yapısal değişikliklere kadar DNA'nızın farklı seviyelerini inceleyerek, çeşitli genetik durumların tanı ve yönetiminde yardımcı olur.",
    methods: [
      "Yeni Nesil Dizileme (NGS): Çok sayıda genin hızlı ve paralel olarak dizilenmesi",
      "Mikroarray Testleri: Kromozomlardaki kopya sayısı değişikliklerinin (CNV) geniş çaplı taraması",
      "Sanger Dizileme: Spesifik gen bölgelerinin hedefli analizi",
      "MLPA (Multiplex Ligasyon-bağımlı Prob Amplifikasyonu): Gen duplikasyon ve delesyonlarının tespiti",
      "qPCR ve dijital PCR: Gen ekspresyonu ve kopya sayısı değişikliklerinin hassas analizi"
    ],
    applications: [
      "Nadir hastalıkların moleküler tanısı",
      "Genetik sendromların tanımlanması",
      "Nörodejeneratif hastalıkların genetik analizi",
      "Kardiyogenetik hastalıkların tanısı",
      "İlaç metabolizmasını etkileyen genetik varyasyonların tespiti (farmakogenomik)",
      "Kişiselleştirilmiş tıp uygulamaları için genetik risk değerlendirmesi"
    ]
  },
  {
    id: "sito",
    title: "Sito-FISH Yapısal Analiz",
    description: "Kromozomal yapıları detaylı şekilde görselleştirerek genetik bozuklukların teşhisinde kritik rol oynayan ileri düzey analiz.",
    icon: "Microscope",
    fullDescription: "Kromozomal yapıları detaylı şekilde görselleştirerek genetik bozuklukların teşhisinde kritik rol oynayan ileri düzey analizdir. Floresan In Situ Hibridizasyon (FISH) tekniği kullanılarak, spesifik DNA dizilerinin hücrelerdeki konumu ve sayısı belirlenir ve kromozomal yapısal anormallikler tespit edilir.",
    techniques: [
      "Klasik Sitogenetik Analiz: Kromozomların bant düzeyinde incelenmesi",
      "Interfaz FISH: Hücre çekirdeğindeki spesifik DNA bölgelerinin incelenmesi",
      "Metafaz FISH: Bölünme aşamasındaki hücrelerde kromozomların detaylı analizi",
      "Çoklu Prob FISH: Birden fazla kromozomal bölgenin eş zamanlı incelenmesi",
      "Kromozom Microarray Analizi (CMA): Tüm genomdaki kopya sayısı değişimlerinin yüksek çözünürlüklü tespiti"
    ],
    applications: [
      "Kanser tanısı ve sınıflandırılması",
      "Kromozomal delesyon ve duplikasyon sendromlarının tanısı",
      "Doğum öncesi genetik anomalilerin tespiti",
      "Genetik sendromların tanımlanması",
      "Translokasyon taşıyıcılarının belirlenmesi",
      "Lösemi ve lenfoma alt tiplerinin tanımlanması ve takibi"
    ]
  },
  {
    id: "prenatal",
    title: "Doğum Öncesi Testler",
    description: "Fetüsün potansiyel genetik durumlarını belirlemeye yardımcı olan doğum öncesi testlerimiz ile geleceğe güvenle adım atın.",
    icon: "Baby",
    fullDescription: "Fetüsün potansiyel genetik durumlarını belirlemeye yardımcı olan doğum öncesi testlerimiz ile geleceğe güvenle adım atın. Bu testler, hamilelik sürecinde bebeğin sağlık durumu hakkında değerli bilgiler sağlayarak, ebeveynlere ve sağlık profesyonellerine planlama yapma imkanı tanır.",
    options: [
      "Invaziv Olmayan Prenatal Test (NIPT): Anne kanındaki fetal DNA'nın analizi ile yaygın kromozomal anomalilerin taranması",
      "Amniyosentez Genetik Analizi: Amniyotik sıvıdan alınan hücreler üzerinde detaylı genetik inceleme",
      "Koryon Villus Biyopsisi (CVS) Analizi: Plasenta dokusundan alınan örneklerin genetik analizi",
      "Fetal Ekzom Dizileme: Nadir genetik bozuklukların kapsamlı analizi",
      "Taşıyıcı Tarama Testi: Ebeveynlerin resesif genetik hastalık taşıyıcılığının belirlenmesi"
    ],
    information: [
      "Down sendromu, Edwards sendromu ve Patau sendromu gibi yaygın trizomilerin risk değerlendirmesi",
      "Cinsiyet kromozomu anormallikleri",
      "Mikrodelesyon ve mikroduplikasyon sendromları",
      "Tek gen hastalıkları için spesifik testler",
      "Genetik danışmanlık ve aile planlaması desteği",
      "İleri genetik test seçenekleri hakkında bilgilendirme"
    ]
  }
];

// What We Offer data
export const offerings = [
  {
    icon: "Dna",
    title: "Kişiye Özel Sağlık Planları",
    description: "Sağlık geçmişiniz ve genetik yapınıza uygun özel programlar oluşturuyor, yaşam kalitenizi artırmak için rehberlik ediyoruz."
  },
  {
    icon: "Microscope",
    title: "Öncü Teşhis ve Tedavi Yöntemleri",
    description: "En son teknolojilere dayalı testlerimizle, özellikle kanser ve nadir hastalıklarda tanı ve tedaviye yönelik analiz hizmetleri sunuyoruz."
  },
  {
    icon: "FlaskConical",
    title: "Bilimsel ve Güvenilir Yaklaşım",
    description: "Alanında uzman genetik danışmanlarımız ve ileri düzey laboratuvarlarımız ile hızlı ve güvenilir sonuçlar elde edin."
  },
  {
    icon: "Heart",
    title: "Sürekli Takip ve Destek",
    description: "Test sonrası süreçte de yanınızda olarak, sonuçlarınızı anlamanız ve doğru sağlık kararları vermeniz için destek sağlıyoruz."
  }
];

// Testimonials data
export const testimonials = [
  {
    name: "Ayşe Y.",
    location: "İstanbul",
    content: "\"ETNA Genetik'in kapsamlı kanser riski testi sayesinde erken bir aşamada risk faktörlerim tespit edildi. Önleyici tedbirler alarak sağlığımı korumak için harekete geçebildim.\"",
    rating: 5
  },
  {
    name: "Mehmet K.",
    location: "Ankara",
    content: "\"Nadir bir genetik hastalığın teşhisinde ETNA'nın WES testi hayat kurtarıcı oldu. Uzman danışmanlarının desteği ile süreci çok daha kolay atlattık.\"",
    rating: 5
  },
  {
    name: "Dr. Zeynep A.",
    location: "İzmir",
    content: "\"Hekim olarak hastalarımı ETNA Genetik'e yönlendiriyorum. Sonuçların doğruluğu, detayı ve rapor kalitesi tedavi planlamasında büyük fark yaratıyor.\"",
    rating: 4.5
  }
];

// FAQ data
export const faqs = [
  {
    question: "Genetik test sonuçlarım ne kadar sürede hazır olur?",
    answer: "Test türüne bağlı olarak sonuç süreleri değişmektedir. NIPT gibi doğum öncesi tarama testleri 5-7 iş günü içinde, standart genetik paneller 2-3 hafta içinde, tüm ekzom dizileme gibi kapsamlı testler ise 4-6 hafta içinde sonuçlanmaktadır. Acil durumlarda hızlandırılmış sonuç seçenekleri de mevcuttur."
  },
  {
    question: "Genetik test yaptırmak için doktor sevki gerekli midir?",
    answer: "Bazı testler için doktor sevki gerekirken, bazı tarama testleri doğrudan kişisel başvuru ile yaptırılabilir. Ancak tüm test sonuçlarının doğru yorumlanması için uzman bir hekim değerlendirmesi önemlidir. Test öncesinde genetik danışmanlarımız sizinle iletişime geçerek, durumunuza en uygun prosedür hakkında bilgi verecektir."
  },
  {
    question: "Genetik test sonuçlarım gizli tutulacak mı?",
    answer: "Evet, ETNA Genetik olarak hasta gizliliği ve veri güvenliği en önemli önceliklerimiz arasındadır. Tüm genetik test sonuçlarınız, KVKK ve uluslararası veri güvenliği standartlarına uygun şekilde saklanır ve korunur. Verileriniz yasal zorunluluklar dışında hiçbir üçüncü tarafla paylaşılmaz."
  },
  {
    question: "Testler için hangi örnek türleri gereklidir?",
    answer: "Test türüne göre kan, tükürük, yanak içi sürüntüsü, doku örnekleri, amniyotik sıvı veya koryon villus örnekleri kullanılabilir. En yaygın olarak kullanılan örnek türü kan örneğidir. Örnek alımı konusunda detaylı bilgilendirme ve gerekirse evde örnek alma hizmeti sunulmaktadır."
  }
];

// Genetic Terms Glossary
export const geneticTerms = [
  {
    term: "DNA (Deoksiribonükleik Asit)",
    definition: "Genetik bilgiyi taşıyan ve tüm canlı organizmaların gelişimini ve işlevini yöneten moleküldür. A, T, G ve C harfleriyle gösterilen dört temel yapı taşından (nükleotid) oluşur."
  },
  {
    term: "Gen",
    definition: "DNA'nın bir protein veya RNA molekülünün üretilmesini sağlayan fonksiyonel birimidir. İnsan genomunda yaklaşık 20.000-25.000 gen bulunur."
  },
  {
    term: "Mutasyon",
    definition: "DNA dizisindeki kalıcı değişikliklerdir. Mutasyonlar zararsız olabildiği gibi, hastalıklara da yol açabilir veya bazı durumlarda evrimsel avantaj sağlayabilir."
  },
  {
    term: "Genom",
    definition: "Bir organizmanın genetik materyalinin tamamıdır. İnsan genomu yaklaşık 3 milyar DNA baz çifti içerir ve 23 çift kromozomda bulunur."
  },
  {
    term: "Ekzom",
    definition: "Genomun protein kodlayan kısmıdır. İnsan genomunun yaklaşık %1-2'sini oluşturmasına rağmen, bilinen hastalık mutasyonlarının %85'i ekzom bölgesinde bulunur."
  },
  {
    term: "FISH (Floresan In Situ Hibridizasyon)",
    definition: "Kromozomlardaki spesifik DNA dizilerini görselleştirmek için kullanılan bir teknik. Kromozomal anomalilerin, gen delesyonlarının veya duplikasyonlarının tespitinde kullanılır."
  }
];

// Team Members
export const teamMembers = [
  {
    name: "Prof. Dr. Mehmet Yılmaz",
    title: "Genetik Uzmanı, Tıbbi Direktör",
    bio: "20 yılı aşkın klinik genetik deneyimiyle, dünya çapında tanınan bir genetik uzmanıdır."
  },
  {
    name: "Dr. Ayşe Kaya",
    title: "Moleküler Biyolog, Araştırma Direktörü",
    bio: "Moleküler genetik alanındaki çalışmalarıyla tanınan, yenilikçi tanı yöntemleri geliştiren bir uzmandır."
  },
  {
    name: "Uzm. Dr. Kemal Demir",
    title: "Genetik Danışman",
    bio: "Hastalarla doğrudan çalışarak genetik test sonuçlarını anlamalarına ve doğru sağlık kararları vermelerine yardımcı olur."
  }
];

// Company Values
export const companyValues = [
  {
    title: "Bilimsel Mükemmellik",
    description: "En son bilimsel araştırmaları ve teknolojileri kullanarak genetik test hizmetlerimizde sürekli gelişimi hedefliyoruz."
  },
  {
    title: "Müşteri Odaklılık",
    description: "Müşterilerimizin ihtiyaçlarını anlamak, onlara kişiselleştirilmiş hizmet sunmak ve en iyi deneyimi yaşatmak için çalışıyoruz."
  },
  {
    title: "Etik ve Gizlilik",
    description: "Genetik verilerinizin gizliliğini en üst düzeyde koruyor, tüm faaliyetlerimizde etik ilkelere bağlı kalıyoruz."
  }
];
