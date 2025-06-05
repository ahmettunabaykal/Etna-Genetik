import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Blog = () => {
  const [category, setCategory] = useState<string>("all");
  
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
    queryFn: async () => {
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to fetch blog posts');
      return res.json();
    },
  });
  
  
  // Filter blog posts by category if needed
  const filteredPosts = blogPosts?.filter(post => 
    category === "all" || post.category.toLowerCase() === category.toLowerCase()
  );
  
  const renderBlogCard = (post: BlogPost) => (
    <Card key={post.id} className="overflow-hidden shadow hover:shadow-md transition-shadow">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      <CardContent className="p-6">
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
          <h2 className="text-xl font-semibold text-gray-900 font-heading">
            {post.title}
          </h2>
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
      </CardContent>
    </Card>
  );
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 font-heading">Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Genetik bilimi, sağlık ve wellness alanlarında en güncel bilgiler, araştırmalar ve uzman görüşleri
          </p>
        </div>
        
        <div className="mb-12">
          <Tabs defaultValue="all" onValueChange={setCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-xl mx-auto">
              <TabsTrigger value="all">Tümü</TabsTrigger>
              <TabsTrigger value="bilim">Bilim</TabsTrigger>
              <TabsTrigger value="sağlık">Sağlık</TabsTrigger>
              <TabsTrigger value="aile">Aile</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-24 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center mt-8 text-red-500">Blog yazıları yüklenirken bir hata oluştu.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts?.map(post => renderBlogCard(post))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
