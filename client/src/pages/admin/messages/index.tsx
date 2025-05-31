import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import type { ContactSubmission } from "@shared/schema";

const MessagesPage = () => {
  const { data: messages, isLoading } = useQuery<ContactSubmission[], Error>({
    queryKey: ['contact-submissions'],
    queryFn: async (): Promise<ContactSubmission[]> => {
      return await apiRequest('GET', '/api/admin/messages');
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact Messages</h1>
      <div className="grid gap-4">
        {messages?.map((message: ContactSubmission) => (
          <Card key={message.id} className="p-6">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <h3 className="font-semibold">{message.firstName} {message.lastName}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="text-sm text-gray-500">{message.email} | {message.phone}</div>
              <div className="text-sm font-medium">Service: {message.service}</div>
              <p className="mt-2 text-gray-700">{message.message}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;