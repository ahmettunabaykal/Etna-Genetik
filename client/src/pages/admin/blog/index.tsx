import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

const BlogPostForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    summary: "",
    content: "",
    imageUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      date: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Input
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <Input
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
      />
      <Textarea
        placeholder="Summary"
        value={formData.summary}
        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
      />
      <Textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="min-h-[200px]"
      />
      <Button type="submit" className="w-full">Create Post</Button>
    </form>
  );
};

const BlogPostsPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: posts, isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ['blog-posts'],
    queryFn: () => apiRequest('GET', '/api/admin/blog'), // ✅ protected
  });

  const createPost = useMutation({
    mutationFn: (data: any) => apiRequest('POST', '/api/admin/blog', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    }
  });

  const deletePost = useMutation({
    mutationFn: (id: number) => apiRequest('DELETE', `/api/admin/blog/${id}`), // ✅ fixed path
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({
        title: "Deleted",
        description: "Blog post deleted successfully",
      });
    },
    onError: (err) => {
      console.error("Deletion failed", err);
      toast({
        title: "Error",
        description: "Failed to delete the blog post",
        variant: "destructive",
      });
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-500">Failed to load blog posts. Please login again or check your token.</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Post</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <BlogPostForm onSubmit={(data) => createPost.mutate(data)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {posts?.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <h3 className="font-semibold">{post.title}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="text-sm text-gray-500">{post.category}</div>
              <p className="mt-2 text-gray-700">{post.summary}</p>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deletePost.mutate(post.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;
