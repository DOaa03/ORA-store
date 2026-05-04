import collection1product1 from "@/assets/collection-1 product-1.jpeg";
import collection1product2 from "@/assets/collection-1 product-2.jpeg";
import collection1product3 from "@/assets/collection-1 product-3.jpeg";
import collection1product4 from "@/assets/collection-1 product-4.jpeg";
import collection2product1 from "@/assets/collection-2-product-1.jpeg";
import collection2product2 from "@/assets/collection-2-product-2.jpeg";
import collection2product3 from "@/assets/collection-2-product-3.jpeg";
import collection2product4 from "@/assets/collection-2-product-4.jpeg";
import collection3product1 from "@/assets/collection-3-product-1.jpeg";
import collection3product2 from "@/assets/collection-3-product-2.jpeg";
import collection3product3 from "@/assets/collection-3-product-3.jpeg";
import collection3product4 from "@/assets/collection-3-product-4.jpeg";
import collection3product5 from "@/assets/collection-3-product-5.jpeg";
import collection4product1 from "@/assets/collection-4-product-1.jpeg";
import collection4product3 from "@/assets/collection-4-product-2.jpeg";
import collection4product2 from "@/assets/collection-4-product-3.jpeg";
import collection4product4 from "@/assets/collection-4-product-4.jpeg";
import collection5product1 from "@/assets/collection-5-product-1.jpeg";
import collection5product2 from "@/assets/collection-5-product-2.jpeg";
import collection6product1 from "@/assets/collection-6-product-1.jpeg";
import collection6product2 from "@/assets/collection-6-product-2.jpeg";
import collection6product3 from "@/assets/collection-6-product-3.jpeg";
import collection6product4 from "@/assets/collection-6-product-4.jpeg";

export type Category = "collection1" | "collection2" | "collection3" | "collection4" | "collection5" | "collection6";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  description: string;
  badge?: string;
};



export const products: Product[] = [
  {
    id: "ora-001",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection1",
    price: 2400,
    oldPrice: 2900,
    image: collection1product1,
    images: [collection1product1, collection1product2, collection1product3, collection1product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أزرق & سبائك الفولاذ المقاوم للصدأ",
    badge: "Bestseller",
  },
  {
    id: "ora-002",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection1",
    price: 3200,
    image: collection1product2,
    images: [collection1product1, collection1product2, collection1product3, collection1product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أزرق & سبائك الفولاذ المقاوم للصدأ",
    badge: "New",
  },
  {
    id: "ora-003",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection1",
    price: 1850,
    image: collection1product3,
    images: [collection1product1, collection1product2, collection1product3, collection1product4],
    description: "An indulgent piece in deep midnight velvet. Tailored for presence, designed for comfort.",
    badge: "Limited",
  },
  {
    id: "ora-004",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection1",
    price: 680,
    image: collection1product4,
    images: [collection1product1, collection1product2, collection1product3, collection1product4],
    description: "18k gold-plated drop earrings, hand-set with a single faceted stone. A modern heirloom.", 
    
  },
  {
    id: "ora-005",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection2",
    price: 1450,
    image: collection2product1,
    images: [collection2product1, collection2product2, collection2product3, collection2product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أبيض مع حزام جلد أسود",
    badge: "Limited",
  },
  {
    id: "ora-006",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection2",
    price: 320,
    image: collection2product2,
    images: [collection2product1, collection2product2, collection2product3, collection2product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أسود مع حزام جلد أسود",
    badge: "New",
  },
  {
    id: "ora-007",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection2",
    price: 2950,
    image: collection2product3,
    images: [collection2product1, collection2product2, collection2product3, collection2product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أسود مع حزام جلد أسود",
    badge: "Limited",
  },
  {
    id: "ora-008",
    name: "ساعة كوارتز كلاسيكية من زارا للرجال",
    category: "collection2",
    price: 920,
    image: collection2product4,
    images: [collection2product1, collection2product2, collection2product3, collection2product4],
    description: "ساعة كوارتز كلاسيكية من زارا للرجال – ع dial أبيض مع حزام جلد أسود",
    badge: "Bestseller",
  },
  {
    id: "ora-009",
    name: "Pearl Constellation Necklace",
    category: "collection3",
    price: 920,
    image: collection3product1,
    images: [collection3product1, collection3product2, collection3product3, collection3product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",
    badge: "New",
  },
  {
    id: "ora-010",
    name: "Pearl Constellation Necklace",
    category: "collection3",
    price: 920,
    image: collection3product2,
    images: [collection3product1, collection3product2, collection3product3, collection3product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",    
    
  },
  {
    id: "ora-011",
    name: "Pearl Constellation Necklace",
    category: "collection3",
    price: 920,
    image: collection3product3,
    images: [collection3product1, collection3product2, collection3product3, collection3product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",
    
  },
  {
    id: "ora-012",
    name: "Pearl Constellation Necklace",
    category: "collection3",
    price: 920,
    image: collection3product4,
    images: [collection3product1, collection3product2, collection3product3, collection3product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",
    
  },
  {
    id: "ora-013",
    name: "Pearl Constellation Necklace",
    category: "collection3",
    price: 920,
    image: collection3product5,
    images: [collection3product1, collection3product2, collection3product3, collection3product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",  
    
  },
  {
    id: "ora-014",
    name: "Pearl Constellation Necklace",
    category: "collection4",
    price: 920,
    image: collection4product1,
    images: [collection4product1, collection4product2, collection4product3, collection4product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",  
  },
  {
    id: "ora-015",
    name: "Pearl Constellation Necklace",
    category: "collection4",
    price: 920,
    image: collection4product2,
    images: [collection4product1, collection4product2, collection4product3, collection4product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",  
    
  },
  {
    id: "ora-016",
    name: "Pearl Constellation Necklace",
    category: "collection4",
    price: 920,
    image: collection4product3,
    images: [collection4product1, collection4product2, collection4product3, collection4product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",
    
  },
  {
    id: "ora-017",
    name: "Pearl Constellation Necklace",
    category: "collection4",
    price: 920,
    image: collection4product4,
    images: [collection4product1, collection4product2, collection4product3, collection4product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",
    
  },
  {
    id: "ora-018",
    name: "Pearl Constellation Necklace",
    category: "collection5",
    price: 920,
    image: collection5product1,
    images: [collection5product1, collection5product2],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.", 
    
  },
  {
    id: "ora-019",
    name: "Pearl Constellation Necklace",
    category: "collection5",
    price: 920,
    image: collection5product2,
    images: [collection5product1, collection5product2],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",  
    
  },
  {
    id: "ora-020",
    name: "Pearl Constellation Necklace",
    category: "collection6",
    price: 920,
    image: collection6product1,
    images: [collection6product1, collection6product2, collection6product3, collection6product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.", 
    
  },
  {
    id: "ora-021",
    name: "Pearl Constellation Necklace",
    category: "collection6",
    price: 920,
    image: collection6product2,
    images: [collection6product1, collection6product2, collection6product3, collection6product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.", 
    
  },
  {
    id: "ora-022",
    name: "Pearl Constellation Necklace",
    category: "collection6",
    price: 920,
    image: collection6product3,
    images: [collection6product1, collection6product2, collection6product3, collection6product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.",  
    
  },
  {
    id: "ora-023",
    name: "Pearl Constellation Necklace",
    category: "collection6",
    price: 920,
    image: collection6product4,
    images: [collection6product1, collection6product2, collection6product3, collection6product4],
    description: "Freshwater pearls suspended on a delicate gold chain. Quietly extraordinary.", 
      },
];

export const categories = ["All", "collection1", "collection2", "collection3", "collection4", "collection5", "collection6"] as const;

export const getProductsByCategory = (category: Category) => {
  return products.filter((product) => product.category === category);
};
