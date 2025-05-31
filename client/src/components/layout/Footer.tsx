import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import EtnaLogo from "@assets/EtnaLogo.jpeg";
import SapiensLogo from "@assets/sapiens-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <img 
                src={EtnaLogo} 
                alt="ETNA Genetik Logo" 
                className="h-20" 
              />
            </div>
            <p className="mt-4 text-gray-300">
              Genetik biliminin kişiselleştirilmiş çözümleriyle sağlık geleceğiniz için doğru adımlar atın.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/etna-health/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/etna.health?igsh=MXZhaDg5dmpsdmI2dg==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white font-heading mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetlerimiz/beslenme-genetigi" className="text-gray-300 hover:text-white transition-colors">
                  Beslenme Genetiği
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/mikrobiom-analizi" className="text-gray-300 hover:text-white transition-colors">
                  Mikrobiom Analizi
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/spor-genetigi" className="text-gray-300 hover:text-white transition-colors">
                  Spor Genetiği
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/kisisellestirilmis-tip" className="text-gray-300 hover:text-white transition-colors">
                  Kişiselleştirilmiş Tıp
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/kanser-genetigi" className="text-gray-300 hover:text-white transition-colors">
                  Kanser Genetiği
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/kardiyovaskuler-testler" className="text-gray-300 hover:text-white transition-colors">
                  Kardiyovasküler Testler
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white font-heading mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda#ekibimiz" className="text-gray-300 hover:text-white transition-colors">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda#laboratuvarimiz" className="text-gray-300 hover:text-white transition-colors">
                  Laboratuvarımız
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda#kalite" className="text-gray-300 hover:text-white transition-colors">
                  Kalite Belgelerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda#kariyer" className="text-gray-300 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white font-heading mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-gray-300 hover:text-white transition-colors">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/genetik-sozluk" className="text-gray-300 hover:text-white transition-colors">
                  Genetik Sözlük
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="text-gray-300 hover:text-white transition-colors">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-gray-300 hover:text-white transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ETNA. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center">
            <p className="text-gray-400 mb-4 md:mb-0"></p>
            <div>     

                <div className="flex items-center">
                  <div className="bg-white p-2 rounded">
                  <a href="https://www.sapiens.com.tr/" target="_blank" rel="noopener noreferrer">
                            <img src={SapiensLogo} alt="Sapiens Logo" className="h-8 w-auto" />
                          </a>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
