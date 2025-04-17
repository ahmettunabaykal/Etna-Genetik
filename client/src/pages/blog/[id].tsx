import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { useRoute, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, ArrowLeft, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

const BlogPostDetail = () => {
  const [_, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : 0;
  
  const [readingTime, setReadingTime] = useState("5 dk");
  
  // Fetch all blog posts
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });
  
  // Find the current post
  const post = blogPosts?.find(post => post.id === postId);
  
  // Find related posts (same category)
  const relatedPosts = blogPosts?.filter(p => 
    p.id !== postId && p.category === post?.category
  ).slice(0, 3);
  
  // Calculate reading time based on content length
  useEffect(() => {
    if (post) {
      const wordsPerMinute = 200;
      const wordCount = post.content.split(/\s+/).length;
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      setReadingTime(`${minutes} dk`);
    }
  }, [post]);
  
  // If loading or error
  if (isLoading) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-8"></div>
            <div className="h-96 bg-gray-300 rounded mb-8"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog yazısı bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız blog yazısı bulunamadı veya bir hata oluştu.</p>
          <Button asChild>
            <Link href="/blog">Blog'a Geri Dön</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Blog'a Geri Dön
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Badge variant="outline" className={`
              ${post.category === 'Bilim' ? 'bg-secondary-100 text-secondary-800' : ''}
              ${post.category === 'Sağlık' ? 'bg-primary-100 text-primary-800' : ''}
              ${post.category === 'Aile' ? 'bg-amber-100 text-amber-800' : ''}
            `}>
              {post.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm ml-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm ml-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readingTime} okuma</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading leading-tight">{post.title}</h1>
          <p className="mt-4 text-xl text-gray-600">{post.summary}</p>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-[400px] object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
        
        {/* Share and Save buttons */}
        <div className="flex justify-between mb-10">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Paylaş
          </Button>
          <Button variant="outline" className="gap-2">
            <Bookmark className="h-4 w-4" />
            Kaydet
          </Button>
        </div>
        
        {/* Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {/* Create paragraphs from content */}
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph || "Genetik bilimi, sağlık hizmetlerinde giderek daha önemli bir rol oynuyor. İnsan genomu hakkında edindiğimiz bilgiler, kişiselleştirilmiş tıp yaklaşımlarına olanak tanıyor ve hastalıkların önceden tespit edilmesine, önlenmesine ve tedavi edilmesine katkıda bulunuyor."}
            </p>
          ))}
          
          {/* Sample longer content to make page look substantial */}
          <h2 className="text-2xl font-bold text-gray-900 font-heading my-6">Genetik Testlerin Önemi</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Genetik testler, DNA'nızın belirli bölgelerindeki değişiklikleri tespit eden ve genetik durumlarla ilgili riskleri değerlendiren güçlü araçlardır. Bu testler, sağlık geçmişiniz ve aile öykünüzle birlikte değerlendirilerek, doktorunuzun size özel sağlık planları oluşturmasına yardımcı olabilir.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Etna Genetik olarak sunduğumuz çeşitli test seçenekleri, farklı ihtiyaçlara yönelik kapsamlı genetik bilgiler sağlamaktadır. Bu testler arasında kanser riskinizi değerlendiren testler, metabolik bozuklukları tespit eden testler ve ilaç yanıtlarınızı tahmin eden farmakogenetik testler yer almaktadır.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 font-heading my-6">Kişiselleştirilmiş Yaklaşımın Avantajları</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Genetik testlerden elde edilen bilgiler, sağlık durumunuzu ve hastalık riskinizi daha iyi anlamanıza yardımcı olabilir. Bu bilgiler, yaşam tarzı değişiklikleri yapmanıza, belirli durumlar için düzenli taramalar planlamanıza ve ilaç tedavilerinizi optimize etmenize olanak tanır.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Uzman genetik danışmanlarımız, test sonuçlarınızı anlamanıza ve bu bilgileri sağlık kararlarınızda nasıl kullanabileceğinizi belirlemenize yardımcı olur. Genetik bilgilerinizin gizliliğine önem veriyoruz ve en yüksek etik standartlara bağlı kalıyoruz.
          </p>
          
          <div className="my-10 p-6 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="text-xl font-bold text-primary-800 mb-3">Bilmekte Fayda Var</h3>
            <p className="text-primary-700">
              Genetik testler, risk faktörlerini belirlemenize yardımcı olabilir, ancak kesin teşhis araçları değildir. Test sonuçlarınızı her zaman sağlık profesyonelleriyle birlikte değerlendirmeniz önemlidir.
            </p>
          </div>
        </div>
        
        <Separator className="mb-12" />
        
        {/* Related posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Card key={relatedPost.id} className="overflow-hidden shadow hover:shadow-md transition-shadow">
                  <img className="h-40 w-full object-cover" src={relatedPost.imageUrl} alt={relatedPost.title} />
                  <CardContent className="p-4">
                    <Badge variant="outline" className={`
                      ${relatedPost.category === 'Bilim' ? 'bg-secondary-100 text-secondary-800' : ''}
                      ${relatedPost.category === 'Sağlık' ? 'bg-primary-100 text-primary-800' : ''}
                      ${relatedPost.category === 'Aile' ? 'bg-amber-100 text-amber-800' : ''}
                    `}>
                      {relatedPost.category}
                    </Badge>
                    <Link href={`/blog/${relatedPost.id}`} className="block mt-2">
                      <h3 className="text-lg font-semibold text-gray-900 font-heading line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <div className="mt-3">
                      <Link href={`/blog/${relatedPost.id}`} className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center">
                        Devamını Oku
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Genetik Testlerimiz Hakkında Daha Fazla Bilgi Edinin</h2>
            <p className="mb-6 text-white/90">
              Etna Genetik'in sunduğu çeşitli test seçenekleri ve kişiselleştirilmiş sağlık çözümleri hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="secondary">
                <Link href="/hizmetler">Hizmetlerimiz</Link>
              </Button>
              <Button asChild className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;