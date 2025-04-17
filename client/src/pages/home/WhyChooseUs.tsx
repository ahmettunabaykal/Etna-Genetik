import { User, FlaskConical, Lock, Apple, Dna, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Neden Bizi Seçmelisiniz?</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">
            Genetik Alanında Öncü Yaklaşım
          </p>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            En son teknoloji, kişiye özel hizmetler ve bilimsel yaklaşım ile sağlığınızı en iyi şekilde desteklemek için buradayız.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <Apple className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">Kişiselleştirilmiş Bakım</h3>
            <p className="text-gray-600 text-center">
              Her birey farklıdır ve sağlık çözümlerimiz de öyle olmalı. Genetik yapınıza uygun olarak size özel takip ve tedavi ve günlük yaşam rutini planları oluşturlmasında katkı sağlıyoruz.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <FlaskConical className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">İleri Laboratuvar Teknolojisi</h3>
            <p className="text-gray-600 text-center">
              Laboratuvarlarımız en son teknolojiye sahiptir ve en hassas testleri gerçekleştirmek için sürekli olarak geliştirilmektedir.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <User className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">Uzman Kadro</h3>
            <p className="text-gray-600 text-center">
              Alanında uzman araştırmacılarımızla sağlık yolculuğunuzda size rehberlik ediyoruz.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <Dna className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">Genetik Analiz</h3>
            <p className="text-gray-600 text-center">
              DNA'nızdaki tek bir noktadan içerdiği üç milyar çift şifrenin tamamına kadar geniş bir yelpazede analiz seçeneği sunuyoruz.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">Bilimsel ve Kanıta Dayalı Yaklaşım</h3>
            <p className="text-gray-600 text-center">
              En güncel bilimsel araştırmalara ve kılavuzlara dayanmaktadır. Sunduğumuz her hizmet, bilimsel literatüre ve kanıtlara dayanır.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-heading">Gizlilik ve Güvenlik</h3>
            <p className="text-gray-600 text-center">
              Genetik verileriniz en üst düzey güvenlik protokolleri ile korunur ve etik standartlara uygun şekilde işlenir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
