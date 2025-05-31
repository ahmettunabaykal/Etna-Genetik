import { Separator } from "@/components/ui/separator";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading">İletişim</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Sorularınız mı var? Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactForm />

          <div>
            <Card className="shadow-lg overflow-hidden mb-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">İletişim Bilgilerimiz</h3>
                <dl className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg font-medium text-gray-900 font-heading">Adres</dt>
                      <dd className="mt-1 text-base text-gray-500">
                      Maslak Mahallesi , Eski Büyükdere caddesi, İz Plaza Giz, No: 9,<br /> İç Kapı No: 78, Zemin Kat, Sarıyer, İstanbul
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg font-medium text-gray-900 font-heading">Telefon</dt>
                      <dd className="mt-1 text-base text-gray-500">
                      0532 120 75 00 
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg font-medium text-gray-900 font-heading">E-posta</dt>
                      <dd className="mt-1 text-base text-gray-500">
                      info@etnahealth.com.tr
                      </dd>
                    </div>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Çalışma Saatleri</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Pazartesi - Cuma</span>
                    <span className="font-medium text-gray-900">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Cumartesi</span>
                    <span className="font-medium text-gray-900">09:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Pazar</span>
                    <span className="font-medium text-gray-900">Kapalı</span>
                  </li>
                </ul>
                
                <Separator className="my-6" />
                
                <h4 className="text-lg font-medium text-gray-900 font-heading">Bizi Takip Edin</h4>
                <div className="mt-4 flex space-x-4">
                  <a href="https://www.linkedin.com/company/etna-health/" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/etna.health?igsh=MXZhaDg5dmpsdmI2dg==" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
