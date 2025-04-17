import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center mr-3">
                <span className="text-white font-heading font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white font-heading">ETNA<span className="text-primary-400">Genetik</span></span>
            </div>
            <p className="mt-4 text-gray-300">
              Genetik biliminin kişiselleştirilmiş çözümleriyle sağlık geleceğiniz için doğru adımlar atın.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white font-heading mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetlerimiz#wes" className="text-gray-300 hover:text-white transition-colors">
                  Tüm Ekzom Dizileme
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#onkoloji" className="text-gray-300 hover:text-white transition-colors">
                  Tıbbi-Onkoloji Testleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#hemato" className="text-gray-300 hover:text-white transition-colors">
                  Hemato-Onkoloji Testleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#molekuler" className="text-gray-300 hover:text-white transition-colors">
                  Moleküler Yapısal Analiz
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#sito" className="text-gray-300 hover:text-white transition-colors">
                  Sito-FISH Yapısal Analiz
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#prenatal" className="text-gray-300 hover:text-white transition-colors">
                  Doğum Öncesi Testler
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
                <Link href="/hizmetlerimiz#sss" className="text-gray-300 hover:text-white transition-colors">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz#sozluk" className="text-gray-300 hover:text-white transition-colors">
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
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} ETNA Genetik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
