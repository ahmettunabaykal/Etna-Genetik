import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Badge variant="outline" className={`
              ${post.category === 'Bilim' ? 'bg-secondary-100 text-secondary-800' : ''}
              ${post.category === 'Sağlık' ? 'bg-primary-100 text-primary-800' : ''}
              ${post.category === 'Aile' ? 'bg-secondary-100 text-secondary-800' : ''}
            `}>
              {post.category}
            </Badge>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">
              {post.date}
            </p>
          </div>
        </div>
        <Link href={`/blog/${post.id}`} className="block mt-2">
          <p className="text-xl font-semibold text-gray-900 font-heading">
            {post.title}
          </p>
          <p className="mt-3 text-base text-gray-500">
            {post.summary}
          </p>
        </Link>
        <div className="mt-5">
          <Link href={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            Devamını Oku
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide">Blog</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">Genetik Dünyasındaki Son Gelişmeler</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Uzmanlarımızın genetik, sağlık ve bilim alanında hazırladığı güncel yazılar
          </p>
        </div>

        {isLoading ? (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
                <div className="h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-24 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center mt-8 text-red-500">Blog yazıları yüklenirken bir hata oluştu.</div>
        ) : (
          <>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {blogPosts && blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link href="/blog">
                  Tüm Yazıları Görüntüle
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
