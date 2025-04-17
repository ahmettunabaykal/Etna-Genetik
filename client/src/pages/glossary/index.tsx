import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { geneticTerms } from "@/lib/data";

// Genişletilmiş genetik terimler listesi - sürekli geliştirilebilir
const extendedGeneticTerms = [
  ...geneticTerms,
  {
    term: "Kromozom",
    definition: "DNA ve proteinlerden oluşan ve genetik bilgiyi taşıyan hücresel yapılardır. İnsanlarda 46 kromozom (23 çift) bulunur ve bunlardan biri cinsiyet kromozomudur."
  },
  {
    term: "Alel",
    definition: "Belirli bir genin alternatif formlarıdır. Her birey, ebeveynlerinden gelen bir çift alel taşır ve bunlar aynı veya farklı olabilir."
  },
  {
    term: "Fenotip",
    definition: "Bir organizmanın gözlemlenebilir özellikleri veya özelliklerinin tümüdür. Genetik ve çevresel faktörlerin etkileşiminin bir sonucudur."
  },
  {
    term: "Genotip",
    definition: "Bir organizmanın genetik yapısıdır. Tüm genlerinin kombinasyonunu ifade eder."
  },
  {
    term: "SNP (Tek Nükleotid Polimorfizmi)",
    definition: "DNA dizisindeki tek bir nükleotid değişikliğidir. İnsan genomundaki en yaygın genetik varyasyon türüdür ve hastalık riskleri, ilaç yanıtları ve diğer özelliklerin belirlenmesinde rol oynar."
  },
  {
    term: "Transkripsiyon",
    definition: "DNA'dan RNA sentezlenmesi sürecidir. Genetik bilginin aktarılmasının ilk adımıdır."
  },
  {
    term: "Translasyon",
    definition: "mRNA üzerindeki genetik bilginin proteine dönüştürülmesi sürecidir."
  },
  {
    term: "Heterozigot",
    definition: "Belirli bir gen için iki farklı alel taşıyan bir bireyin genetik durumudur."
  },
  {
    term: "Homozigot",
    definition: "Belirli bir gen için aynı iki aleli taşıyan bir bireyin genetik durumudur."
  },
  {
    term: "Rekombinasyon",
    definition: "Genetik materyalin yeniden düzenlenmesi süreci, özellikle eşeyli üreme sırasında ebeveyn DNA'sının karışması."
  },
  {
    term: "Epigenetik",
    definition: "DNA dizisini değiştirmeden gen ekspresyonunu etkileyen değişikliklerdir. Çevresel faktörlerden etkilenebilir ve bazen nesilden nesile aktarılabilir."
  },
  {
    term: "PCR (Polimeraz Zincir Reaksiyonu)",
    definition: "DNA'nın belirli bölgelerini çoğaltmak için kullanılan bir laboratuvar tekniğidir. Genetik testlerde, adli tıpta ve bilimsel araştırmalarda yaygın olarak kullanılır."
  },
  {
    term: "NGS (Yeni Nesil Dizileme)",
    definition: "DNA'yı hızlı, yüksek verimli ve paralel olarak dizileme yöntemidir. Genetik testlerde, kanser araştırmalarında ve daha birçok alanda kullanılır."
  },
  {
    term: "CNV (Kopya Sayısı Varyasyonu)",
    definition: "Genomun belirli bölgelerinin normalden fazla veya az kopya sayısına sahip olması durumudur. Çeşitli genetik hastalıklarla ilişkili olabilir."
  },
  {
    term: "Penetrans",
    definition: "Belirli bir genotipin, ilişkili fenotipe neden olma olasılığıdır. %100 penetrans, mutasyonu taşıyan herkesin hastalık belirtileri göstereceği anlamına gelir."
  }
];

// Terimleri harfe göre gruplandırma fonksiyonu
const groupTermsByFirstLetter = (terms: typeof extendedGeneticTerms) => {
  const grouped: Record<string, typeof extendedGeneticTerms> = {};
  
  terms.forEach(term => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(term);
  });
  
  return grouped;
};

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Terimleri harfe göre grupla
  const groupedTerms = groupTermsByFirstLetter(extendedGeneticTerms);
  
  // Mevcut harfleri al
  const availableLetters = Object.keys(groupedTerms).sort();
  
  // Arama filtreleme işlevi
  const filteredTerms = extendedGeneticTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading mb-4">Genetik Sözlük</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genetik terimlerini anlamak ve genetik test sürecinde karşılaşacağınız kavramlarla ilgili 
            bilgi edinmek için kapsamlı genetik sözlüğümüzü kullanabilirsiniz.
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Terim veya tanım arayın..."
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Alfabe filtresi */}
        {searchTerm === "" && (
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {availableLetters.map((letter, index) => (
                <Button
                  key={letter}
                  variant={activeIndex === index ? "default" : "outline"}
                  className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                  onClick={() => {
                    setActiveIndex(index);
                    const element = document.getElementById(`section-${letter}`);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Arama sonuçları veya alfabetik listeler */}
        {searchTerm ? (
          <div className="space-y-6">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary-600 mb-2">{term.term}</h3>
                      <p className="text-gray-700">{term.definition}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">Aramanızla eşleşen terim bulunamadı.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm("")}
                >
                  Tüm Terimleri Göster
                </Button>
              </div>
            )}
          </div>
        ) : (
          // Alfabetik bölümler
          <div className="space-y-12">
            {availableLetters.map((letter) => (
              <motion.div
                key={letter}
                id={`section-${letter}`}
                className="scroll-mt-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-primary-100 text-primary-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {letter}
                  </div>
                  <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {groupedTerms[letter].map((term, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-primary-600 mb-2">{term.term}</h3>
                          <p className="text-gray-700">{term.definition}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div 
          className="mt-16 text-center p-8 bg-primary-50 rounded-xl border border-primary-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Özel Bir Genetik Terime mi İhtiyacınız Var?</h3>
          <p className="text-gray-600 mb-6">
            Sözlüğümüzde bulamadığınız bir terim veya daha fazla açıklama için uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <a 
            href="/iletisim" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Bizimle İletişime Geçin
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GlossaryPage;