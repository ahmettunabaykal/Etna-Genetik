import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define the form schema with zod
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır" }),
  lastName: z.string().min(2, { message: "Soyad en az 2 karakter olmalıdır" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası giriniz" }),
  service: z.string().min(1, { message: "Lütfen bir hizmet seçiniz" }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "KVKK koşullarını kabul etmeniz gerekmektedir",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  // Define form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      terms: false,
    },
  });

  // Mutation for form submission
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const { terms, ...submitData } = data;
      return apiRequest("POST", "/api/contact", submitData);
    },
    onSuccess: () => {
      toast({
        title: "Form başarıyla gönderildi",
        description: "En kısa sürede size dönüş yapacağız.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Hata",
        description: error.message || "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  // Submit handler
  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent className="px-6 py-8">
        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Mesaj Gönder</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Soyad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>İlgilendiğiniz Genetik Test</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Lütfen Seçiniz" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beslenme_genetigi">Beslenme Genetiği</SelectItem>
                      <SelectItem value="spor_genetigi">Spor Genetiği</SelectItem>
                      <SelectItem value="cilt_sagligi">Cilt Sağlığı</SelectItem>
                      <SelectItem value="mikrobiom">Mikrobiyom Analizleri</SelectItem>
                      <SelectItem value="kanser_genetigi">Kanser Genetiği</SelectItem>
                      <SelectItem value="kardiyovaskuler">Kardiyovasküler Testler</SelectItem>
                      <SelectItem value="ekzom_genom">Ekzom & Genom Testleri</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesajınız</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Kişisel verilerimin işlenmesine <a href="#" className="text-primary-600 hover:text-primary-500">KVKK Aydınlatma Metni</a> kapsamında onay veriyorum.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
