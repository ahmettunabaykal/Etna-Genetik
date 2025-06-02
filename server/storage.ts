import {
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  blogPosts, type BlogPost, type InsertBlogPost,
  orders, type Order, type InsertOrder // ✅ Add these
} from "@shared/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";


import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";

type DB = NodePgDatabase<typeof import("@shared/schema")> | NeonDatabase<typeof import("@shared/schema")>;

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  delBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class DatabaseStorage implements IStorage {
  constructor(private db: DB) {}

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }
  async createUser(user: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const [createdUser] = await this.db
      .insert(users)
      .values({ ...user, password: hashedPassword })
      .returning(); // assuming you're using PostgreSQL

    return createdUser;
  }



  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await this.db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db.select().from(contactSubmissions);
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result[0];
  }


  async delBlogPost(id: number): Promise<BlogPost | undefined> {
    // Step 1: Get the post first (so we can return it if deleted)
    const post = await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .then(rows => rows[0]);
  
    if (!post) {
      console.warn(`No post found with ID ${id}`);
      return undefined;
    }
  
    // Step 2: Delete the post
    const result = await this.db
      .delete(blogPosts)
      .where(eq(blogPosts.id, id));
  
    console.log("Delete result:", result);
  
    // Optional: Check if result confirms deletion (depends on DB driver)
    if ('rowCount' in result && result.rowCount === 0) {
      console.warn(`Delete failed for ID ${id}`);
      return undefined;
    }
  
    return post;
  }
  

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async getOrders(): Promise<Order[]> {
    return await this.db.select().from(orders).orderBy(orders.createdAt);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const result = await this.db.insert(orders).values(order).returning();
    return result[0];
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const result = await this.db
      .update(orders)
      .set({ status })
      .where(eq(orders.id, id))
      .returning();
    return result[0];
  }

  async deleteOrder(id: number): Promise<void> {
    await this.db.delete(orders).where(eq(orders.id, id));
  }

  async initializeBlogPostsIfEmpty() {
    const posts = await this.getBlogPosts();

    if (posts.length === 0) {
      const demoPosts: InsertBlogPost[] = [
        {
          title: "Genetik Testler Kanserin Erken Teşhisinde Nasıl Rol Oynar?",
          category: "Bilim",
          date: "15 Haziran 2024",
          summary: "Modern genetik testlerin kanser riskini belirlemedeki rolü ve erken teşhisin önemi hakkında kapsamlı bir bakış.",
          content: "Genetik testler, kanserin erken teşhisinde giderek daha önemli bir rol oynamaktadır...",
          imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "İlaç Sektörü, Hastaneler ve Hekimler için Genetik Testlerin Rolü",
          category: "Bilim",
          date: "2 Eylül 2024",
          summary: "Genetik testler, sağlık hizmetlerinde devrim niteliğinde bir dönüşüm sağlıyor. Tanı süreçlerini kesinleştirerek, kişiye özel tedavi planları oluşturulmasına ve hasta bakımının iyileştirilmesine yardımcı oluyor. Hastaneler, klinikler, hekimler ve laboratuvarlar genetik bilgilerden yararlanarak sundukları hizmetleri geliştirebilirler. Bu noktada, Sapiens Genetik, medikal ve klinik ihtiyaçlara özel yüksek kaliteli çözümler sunmaktadır.",
          content: "Genetik Testlerin Sağlık Hizmetleri İçin Önemi Hastaneler ve klinikler için genetik testler, hasta sonuçlarını iyileştirmek için kritik bir araçtır. Belirli genetik belirteçlerin tespiti sayesinde, sağlık hizmeti sağlayıcıları: Tanıları Geliştirme: Gelişmiş genetik testler daha doğru tanılar sağlar, karmaşık vakalardaki belirsizlikleri azaltır ve hekimlerin daha bilinçli kararlar almasına olanak tanır. Kişiye Özel Bakım: Genetik testler, hastanın genetik yapısına dayalı tedavi planlarının oluşturulmasına yardımcı olarak daha etkili ve kişiye özel bakım sağlar. Erken Teşhis ve Önleme: Genetik taramalar, kanser ve kardiyovasküler hastalıklar gibi rahatsızlıklara yatkınlıkları tespit ederek erken müdahalelere ve daha iyi hasta sonuçlarına olanak tanır. Laboratuvarlar ise, bu verilerin doğru ve kapsamlı analizini sağlayarak, sağlık hizmeti sağlayıcılarının yüksek kaliteli ve bireyselleştirilmiş bakım sunmasına katkıda bulunur. İlaç ve Araştırma Alanında Genetik Testlerin Önemi Klinik hizmetlerin yanı sıra, genetik testler ilaç ve araştırma alanında da önemli bir rol oynar. Genetik bilgiler, ilaç geliştirme, klinik deneyler ve kişiselleştirilmiş tıp girişimlerinde giderek daha fazla kullanılmaktadır. Sapiens Genetik olarak, ilaç şirketlerine aşağıdaki alanlarda destek sunmaktayız; İlaç Hedeflerinin Belirlenmesi: Genetik veriler, hastalıklara neden olan mutasyonları tespit ederek, ilaç geliştirmede daha etkili tedavilerin yolunu açar. Klinik Deneyleri Optimize Etme: Genetik verilerle, klinik deneylerde daha doğru katılımcı seçimi yapılabilir ve bu sayede denemelerin başarısı artırılır. Özel Test Panelleri: İlaç firmaları ve araştırma kurumlarının ihtiyaç duyduğu genetik verileri toplamak için özel olarak tasarlanmış paneller sunarak, inovasyona katkıda bulunuruz. Sapiens Genetik ile çalışan ilaç ve araştırma kuruluşları, süreçlerine genetik bilgileri entegre ederek, ilaç keşfinden klinik uygulamalara kadar her aşamada doğruluk ve etkinlik sağlar. Güvenilir Sonuçlar için Sapiens Genetik Sapiens Genetik, güvenilir ve doğru genetik test hizmetleri sunma konusunda kararlıdır. ISO 15189 akreditasyonu, en yüksek kalite ve tekrarlanabilirlik standartlarına uyduğumuzu garantiler, böylece sağlık hizmeti sağlayıcıları ve araştırmacılar, hasta sonuçlarını iyileştirmek ve bilimsel ilerlemeyi desteklemek için güvenilir verilere ulaşabilirler. Neden Sapiens Genetik’i seçmelisiniz? Global Erişim: Birden fazla bölgedeki sağlık hizmeti sağlayıcıları ve ilaç şirketleri ile iş birliği yaparak, uluslararası standartları karşılayan çözümler sunuyoruz. Geniş Uzmanlık: Hem klinik hem de araştırma ihtiyaçlarına yönelik geniş test portföyümüzle, sağlık profesyonellerine daha iyi bakım sunmaları ve araştırmacıların kişiselleştirilmiş tıp alanında yenilikler yapmaları için genetik içgörüler sağlıyoruz.",
          imageUrl: "https://www.sapiens.com.tr/wp-content/uploads/2024/09/AdobeStock_399180304-scaled.jpeg"
        },
        {
          title: "Kişiselleştirilmiş Tıp ve Genetik: Geleceğin Sağlık Hizmeti",
          category: "Sağlık",
          date: "20 Ağustos 2024",
          summary: "Günümüzde tıp, genetik bilgilerin ışığında hızla evriliyor. Kişiselleştirilmiş tıp, bireyin genetik yapısına dayalı olarak özel tedavi planları geliştirmeyi hedefleyen bir yaklaşımdır. Bu yöntem, hastalıkların teşhis ve tedavisinde devrim yaratmakta olup, daha etkili ve güvenli sağlık hizmetleri sunmanın anahtarı olarak öne çıkmaktadır.",
          content: "Genetik Bilgi Neden Önemli? İnsan genomu, her bireyin genetik kodunu barındıran devasa bir bilgi hazinesidir. Genler, vücudumuzun nasıl çalıştığını belirleyen temel yapı taşlarıdır. Ancak her bireyin genetik yapısı farklı olduğundan, aynı tedavi yöntemi herkeste aynı sonucu vermez. Bu noktada kişiselleştirilmiş tıp devreye girer. Genetik analizler, bir kişinin hastalık geliştirme riskini, ilaçlara vereceği yanıtları ve hangi tedavi yöntemlerinin daha etkili olacağını belirlemek için kullanılır. Kişiselleştirilmiş Tıpta Genetik Testlerin Rolü Kişiselleştirilmiş tıbbın temelini genetik testler oluşturur. Bu testler, hastaların genetik özelliklerini ortaya çıkararak, hastalık risklerini ve tedavi seçeneklerini belirlemede önemli rol oynar. Örneğin, kanser tedavisinde kullanılan hedefe yönelik tedaviler, tümörlerin genetik mutasyonlarına dayanarak belirlenir. Benzer şekilde, kardiyovasküler hastalıklar, nörolojik bozukluklar ve hatta metabolik hastalıklar gibi birçok sağlık sorununda genetik analizler, doğru tedavi yöntemini belirlemeye yardımcı olur. Genetik Bilgi ile Kişiselleştirilmiş Tedavi Genetik veriler, doktorlara hastaların tedaviye nasıl yanıt vereceğine dair kritik bilgiler sunar. Örneğin, bazı hastalar belirli bir ilaca olumlu yanıt verirken, diğerleri ciddi yan etkiler yaşayabilir. Genetik testler sayesinde, ilaçların bireysel genetik yapıya göre nasıl metabolize edildiği ve hangi tedavinin en uygun olacağı öngörülebilir. Bu sayede tedavi, hastaya özel hale getirilir ve yan etkiler en aza indirilir. Geleceğin Sağlık Hizmeti: Kişiselleştirilmiş Tıp Kişiselleştirilmiş tıp, geleceğin sağlık hizmetinin temel taşı olarak kabul edilmektedir. Bu yaklaşım, hastalıkların önlenmesinde de büyük rol oynar. Genetik testler sayesinde hastalık riski yüksek olan bireyler erken dönemde tespit edilerek, koruyucu tedbirler alınabilir. Özellikle kalıtsal hastalıklar söz konusu olduğunda, genetik testler sayesinde erken tanı ve müdahale mümkün hale gelir. Böylece hastalıkların ortaya çıkmadan önce engellenmesi sağlanır. Kişiselleştirilmiş Tıbbın Yaygınlaşması Kişiselleştirilmiş tıbbın yaygınlaşması, sağlık sistemlerinde büyük bir dönüşümü de beraberinde getirecektir. Genetik testlerin maliyetlerinin düşmesi ve bu teknolojilerin daha erişilebilir hale gelmesi, bireysel sağlık yönetimini güçlendirecek ve daha geniş kitlelere ulaşacaktır. Gelecekte, rutin sağlık kontrollerinin bir parçası olarak genetik analizlerin yaygınlaşması beklenmektedir. Sonuç Genetik bilginin sağlık hizmetlerinde artan rolü, kişiselleştirilmiş tıbbın önünü açmıştır. Bireylerin genetik yapısına göre şekillenen tedavi planları, hastalıkların daha etkili bir şekilde tedavi edilmesini sağlarken, yan etkilerin en aza indirilmesine ve tedavi sürecinin kişiye özel olmasına olanak tanır. Kişiselleştirilmiş tıbbın gelecekte daha fazla önem kazanacağı ve sağlık hizmetlerinde devrim niteliğinde değişimlere yol açacağı kesindir. Bu yeni sağlık paradigması, bireylerin kendi genetik yapıları hakkında daha fazla bilgi edinmelerini ve hastalıkları önceden önleyebilme şansını sunarken, tıp dünyasında da büyük bir dönüşümü beraberinde getirmektedir. Kişiselleştirilmiş tıbbın ve genetik testlerin size nasıl fayda sağlayabileceğini öğrenmek için Kişiselleştirilmiş Tıp sayfamızı ziyaret edin. Sunduğumuz hizmetleri keşfedin ve size özel bir sağlık deneyimine ilk adımı atın.",
          imageUrl: "https://www.sapiens.com.tr/wp-content/uploads/2024/09/AdobeStock_334402436-scaled.jpeg"
        },
        {
          title: "Genetik Yapınız Beslenme Şeklinizi Nasıl Etkiler?",
          category: "Sağlık",
          date: "2 Haziran 2024",
          summary: "Nutrigenetik ve kişiselleştirilmiş beslenme planları hakkında bilmeniz gereken her şey bu yazıda.",
          content: "Genetik yapınız, besinleri nasıl metabolize ettiğinizi ve hangi besinlere nasıl tepki verdiğinizi belirleyen faktörlerden biridir...",
          imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          title: "Doğum Öncesi Genetik Testler: Hangi Aşamada, Hangi Test?",
          category: "Aile",
          date: "20 Mayıs 2024",
          summary: "Hamilelik döneminde yapılabilecek genetik testler ve bunların sağladığı bilgiler hakkında uzman görüşü.",
          content: "Doğum öncesi genetik testler, bebeğinizin sağlığı hakkında önemli bilgiler sağlayabilir ve olası genetik bozuklukları erken aşamada tespit etmenize yardımcı olabilir...",
          imageUrl: "https://www.sapiens.com.tr/wp-content/uploads/2024/08/Sapiens-Genetic-Laboratory-Tests-prenatal.jpg"
        }
      ];

      for (const post of demoPosts) {
        await this.createBlogPost(post);
      }
    }
  }
}
