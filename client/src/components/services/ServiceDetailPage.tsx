import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export interface ServiceDetailProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  heroImage: string;
  description: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServiceDetailPage = ({ 
  title, 
  subtitle, 
  icon, 
  heroImage, 
  description, 
  benefits,
  process,
  faqs,
  cta
}: ServiceDetailProps) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="group">
            <Link href="/hizmetlerimiz">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Hizmetlerimize Geri Dön
            </Link>
          </Button>
        </div>
        
        {/* Hero Section */}
        <motion.div 
          className="mb-16 flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mr-4">
                {icon}
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 font-heading">{title}</h1>
            </div>
            <h2 className="text-xl text-primary-600 font-heading mb-6">{subtitle}</h2>
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt={title} 
                className="w-full h-[320px] md:h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Benefits Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Bu Genetik Testin Avantajları</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {title} testlerimiz size kapsamlı ve bilimsel olarak doğrulanmış bilgiler sunarak sağlık yolculuğunuzda kritik kararlar almanıza yardımcı olur.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Process Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Test Süreci Nasıl İşler?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {title} testini seçtiğinizde, uzman ekibimiz aşağıdaki adımları izleyerek size en doğru ve güvenilir sonuçları sunar.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            variants={staggerContainer}
          >
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-primary-200 z-0" />
            
            {process.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative z-10"
                variants={fadeIn}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* FAQs Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {title} hakkında merak edilen soruların cevaplarını bu bölümde bulabilirsiniz.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                variants={fadeIn}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 md:p-12 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{cta.title}</h2>
            <p className="mb-8 text-white/90 max-w-3xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/hizmetlerimiz">Diğer Hizmetlerimiz</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/iletisim">Randevu Al</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;