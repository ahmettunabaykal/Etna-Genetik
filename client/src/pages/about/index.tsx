import { Card, CardContent } from "@/components/ui/card";
import SapiensLogo from "@assets/sapiens-logo.svg";
import { 
  Microscope, Award, UserCheck, ShieldCheck, 
  BookOpen, HeartHandshake, BrainCircuit, 
  RouteOff, Sparkles
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading">Hakkımızda</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ETNA, genetik testler alanında Türkiye'nin önde gelen kuruluşlarından biridir. 
            Sapiens Laboratuvarları ile iş birliği içinde en son teknolojiye sahip genetik testleri 
            sunarak sağlık alanında yenilikçi çözümler getiriyoruz.
          </p>
        </div>

        {/* Vision, Mission, and Approach Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VisionCard 
              title="Vizyonumuz"
              icon={<Sparkles className="h-6 w-6" />}
              content="Genetik testleri yalnızca bir analiz aracı olarak değil, bireyselleştirilmiş sağlık hizmetlerinin temel taşı olarak konumlandırarak, dünyanın dört bir yanındaki insanlara bilimsel doğrulukla rehberlik etmek. Teknolojiyi ve yenilikçi araştırmaları kullanarak genetik bilimi alanında küresel bir lider olmak."
            />
            
            <VisionCard 
              title="Misyonumuz"
              icon={<HeartHandshake className="h-6 w-6" />}
              content="Genetik testleri herkes için erişilebilir ve anlaşılır hale getirerek, bireylerin sağlıklı bir yaşam sürmeleri için bilinçli ve bilimsel verilere dayalı kararlar almalarını sağlamak. Danışmanlarımız ve gelişmiş platformumuz sayesinde, bireylerin test sonuçlarını en iyi şekilde değerlendirmelerine ve sağlıklarına dair bilinçli adımlar atmalarına yardımcı oluyoruz."
            />
            
            <VisionCard 
              title="Yaklaşımımız"
              icon={<BrainCircuit className="h-6 w-6" />}
              content="Etna olarak, genetik test sürecini uçtan uca destekleyen kapsamlı bir platform sunuyoruz. Bireylerin ihtiyaçlarını anlayarak en uygun test seçeneklerini belirlemelerine yardımcı oluyor, test sonuçlarını uzman danışmanlarla birlikte değerlendirme imkanı sağlıyoruz. Bilgiye dayalı kararlar almak için gerekli tüm bilimsel altyapıyı sunuyor, her bireyin sağlık yolculuğunu daha bilinçli ve güvenli hale getiriyoruz."
            />
          </div>
        </div>
        
        {/* Our Journey Section with Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">Yolculuğumuz</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Şirketimiz, 2024 yılında genetik testleri geniş çapta erişilebilir hale getirme vizyonuyla kuruldu. Zamanla hizmetlerimizi genişlettik, önemli kilometre taşlarına ulaştık ve sağlık sektöründe fark yarattık.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Container */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 to-primary-600"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="2023"
                title="Kuruluş"
                content="ETNA, genetik testlerin Türkiye'de erişilebilirliğini artırmak amacıyla kuruldu."
                align="left"
              />
              
              <TimelineItem 
                year="2023"
                title="İlk Laboratuvar İş Birliği"
                content="Sapiens Laboratuvarları ile stratejik ortaklık kurularak genetik test hizmetlerimizin kapsamı genişletildi."
                align="right"
              />
              
              <TimelineItem 
                year="2025"
                title="Online Platform Lansmanı"
                content="Kullanıcılarımızın genetik test sonuçlarını kolayca takip edebilecekleri ve uzmanlarımızla iletişim kurabilecekleri dijital platformumuz hayata geçirildi."
                align="left"
              />
              
              <TimelineItem 
                year="2025"
                title="Türkiye Genelinde Hizmet"
                content="Türkiye'nin 81 ilinde genetik test hizmetlerimizi sunmaya başladık, 10.000'den fazla kişiye hizmet verdik."
                align="right"
              />
            </div>
          </div>
        </div>
        
        {/* Sapiens Lab Partnership Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16 items-center">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Sapiens Laboratuvarları ile İş Birliğimiz</h2>
                  <p className="text-gray-700">
                    ETNA, Sapiens Laboratuvarları ile stratejik bir ortaklık kurarak genetik test 
                    hizmetlerinde mükemmelliği hedeflemektedir. Sapiens'in ileri düzey laboratuvar altyapısı 
                    ve deneyimli bilim insanları kadrosu sayesinde, en yüksek kalite standartlarında ve 
                    güvenilir test sonuçları sunabiliyoruz.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Bu işbirliği, müşterilerimize sunduğumuz genetik test portföyünü sürekli genişletmemize ve 
                    en son teknolojik gelişmeleri hizmetlerimize entegre etmemize olanak tanıyor. Sapiens'in 
                    uluslararası standartlardaki laboratuvarları, ISO 15189 ve CAP akreditasyonları ile test 
                    sonuçlarının doğruluğunu ve güvenilirliğini garanti ediyor.
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center max-w-xs">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center">
                      <a href="https://www.sapiens.com.tr/" target="_blank" rel="noopener noreferrer">
                        <img src={SapiensLogo} alt="Sapiens Logo" className="h-8 w-auto" />
                      </a>
                    </div>

           
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mt-1">ISO 15189 & CAP Akredite Laboratuvar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-heading">Değerlerimiz</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              ETNA olarak, tüm faaliyetlerimizde bizi yönlendiren temel değerlerimiz var. Bu değerler, her gün müşterilerimize nasıl hizmet verdiğimizi ve iş yapış şeklimizi belirliyor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Microscope />}
              title="Bilimsel Mükemmellik"
              description="En son bilimsel araştırmaları ve teknolojileri kullanarak genetik test hizmetlerimizde sürekli gelişimi hedefliyoruz."
            />
            
            <ValueCard 
              icon={<UserCheck />}
              title="Müşteri Odaklılık"
              description="Müşterilerimizin ihtiyaçlarını anlamak, onlara kişiselleştirilmiş hizmet sunmak ve en iyi deneyimi yaşatmak için çalışıyoruz."
            />
            
            <ValueCard 
              icon={<ShieldCheck />}
              title="Etik ve Gizlilik"
              description="Genetik verilerinizin gizliliğini en üst düzeyde koruyor, tüm faaliyetlerimizde etik ilkelere bağlı kalıyoruz."
            />
          </div>
        </div>

          {/* Team Section */}
          <div id="ekibimiz" className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Ekibimiz</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <TeamMemberCard 
                name="Kanay"
                title="Yönetim Kurulu Başkanı"
                bio="Stratejik vizyonu ve liderlik deneyimiyle şirketin büyüme yolculuğunu yönlendiren isimdir."
              />

              <TeamMemberCard 
                name="Cem"
                title="Yönetim Kurulu Başkan Yardımcısı"
                bio="Organizasyonel gelişim ve sürdürülebilirlik projelerinde aktif rol üstlenmektedir."
              />

              <TeamMemberCard 
                name="Koray"
                title="CEO & COO, Kurucu"
                bio="Şirketin operasyonel süreçlerini yöneten ve aynı zamanda kurucu ekipte yer alan çok yönlü bir liderdir."
              />

              <TeamMemberCard 
                name="Deniz"
                title="Kurucu Ortak"
                bio="İnovatif yaklaşımıyla şirketin vizyonunu şekillendiren öncü kurucu ortaktır."
              />

              <TeamMemberCard 
                name="Ozan"
                title="Kurucu Ortak"
                bio="Teknoloji ve ürün geliştirme alanlarında uzmanlığı ile kurucu ekipte önemli rol üstlenmektedir."
              />

              <TeamMemberCard 
                name="Görkem"
                title="Kurucu Ortak"
                bio="İş geliştirme ve pazarlama stratejilerinde katkılarıyla şirketin büyümesine öncülük etmektedir."
              />

              <TeamMemberCard 
                name="Derya"
                title="Saha Sorumlusu"
                bio="Saha operasyonlarını yöneten ve müşteri ilişkilerini güçlendiren bir profesyoneldir."
              />

              <TeamMemberCard 
                name="Tuğçe"
                title="İletişim Sorumlusu"
                bio="İletişim stratejileri ve müşteri ilişkileri yönetiminde uzmanlaşmış bir profesyoneldir."
              />
            </div>
          </div>


      </div>
    </div>
  );
};

type VisionCardProps = {
  title: string;
  icon: React.ReactNode;
  content: string;
};

const VisionCard = ({ title, icon, content }: VisionCardProps) => {
  return (
    <Card className="bg-white overflow-hidden h-full transition-all hover:shadow-lg border-l-4 border-l-primary-500">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600">
              {icon}
            </div>
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900 font-heading">{title}</h3>
        </div>
        <p className="text-gray-700">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

type TimelineItemProps = {
  year: string;
  title: string;
  content: string;
  align: "left" | "right";
};

const TimelineItem = ({ year, title, content, align }: TimelineItemProps) => {
  return (
    <div className={`relative flex items-center ${align === 'right' ? 'justify-start md:justify-end' : 'justify-start'}`}>
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 z-10 border-4 border-white`}></div>
      
      <div className={`bg-white rounded-lg shadow-md p-6 md:max-w-md ${align === 'right' ? 'md:mr-12' : 'md:ml-12'}`}>
        <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold bg-primary-100 text-primary-800 rounded-full">
          {year}
        </span>
        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 font-heading text-center mb-3">{title}</h3>
        <p className="text-gray-700 text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

type TeamMemberCardProps = {
  name: string;
  title: string;
  bio: string;
};

const TeamMemberCard = ({ name, title, bio }: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mb-6">
          <div className="rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 h-32 w-32 mx-auto flex items-center justify-center">
            <div className="text-3xl font-bold text-primary-600">
              {name.split(' ').slice(-1)[0].charAt(0)}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 font-heading">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <p className="mt-4 text-gray-700 text-left">
          {bio}
        </p>
      </CardContent>
    </Card>
  );
};

export default About;