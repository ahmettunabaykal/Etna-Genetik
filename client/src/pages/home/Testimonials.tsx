import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  content: string;
  rating: number;
  photo?: string;
}

const TestimonialCard = ({ name, location, content, rating, photo }: TestimonialProps) => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {photo ? (
          <img
            src={photo}
            alt={`${name} photo`}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0" />
        )}
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900 font-heading">{name}</h4>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="mt-4 flex text-primary-500">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-primary-500' : 'fill-none'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayşe Y.",
      location: "İstanbul",
      content: "\"ETNA'nın kapsamlı kanser riski testi sayesinde erken bir aşamada risk faktörlerim tespit edildi. Önleyici tedbirler alarak sağlığımı korumak için harekete geçebildim.\"",
      rating: 5,
      photo: "/musteri_2.jpg"
    },
    {
      name: "Mehmet K.",
      location: "Ankara",
      content: "\"Nadir bir genetik hastalığın teşhisinde ETNA'nın WES testi hayat kurtarıcı oldu. Uzman danışmanlarının desteği ile süreci çok daha kolay atlattık.\"",
      rating: 5,
      photo: "/musteri_1.jpg"
    },
    {
      name: "Dr. Zeynep A.",
      location: "İzmir",
      content: "\"Hekim olarak hastalarımı ETNA'ya yönlendiriyorum. Sonuçların doğruluğu, detayı ve rapor kalitesi tedavi planlamasında büyük fark yaratıyor.\"",
      rating: 4.5,
      photo: "/musteri_3.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Müşteri Deneyimleri</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">Müşterilerimizin Yorumları</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Genetik testlerimizle hayat kurtaran ve hayat değiştiren sonuçları keşfedin.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              content={testimonial.content}
              rating={testimonial.rating}
              photo={testimonial.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
