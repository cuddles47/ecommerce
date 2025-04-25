import { Product } from '@/products/schemas/product.schema';

export const seedProducts: Partial<Product>[] = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    brand: 'Apple',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/apple-logo.png',
    category: 'Electronics',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/airpods.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/airpods-2.webp',
    ],
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls while working.',
    reviews: [],
    rating: 4.5,
    numReviews: 12,
    price: 89.99,
    countInStock: 10,
  },
  {
    name: 'iPhone 14 Pro 256GB Memory',
    brand: 'Apple',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/apple-logo.png',
    category: 'Electronics',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/iphone.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/iphone-2.webp',
    ],
    description:
      'Introducing the iPhone 14 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
    reviews: [],
    rating: 4.0,
    numReviews: 8,
    price: 999.99,
    countInStock: 7,
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/samsung-logo.png',
    category: 'Electronics',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/samsung.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/samsung-2.webp',
    ],
    description:
      'The Samsung Galaxy S23 Ultra featuring a 200MP camera, S Pen functionality, and Snapdragon 8 Gen 2 processor. Experience extraordinary detail and performance.',
    reviews: [],
    rating: 4.8,
    numReviews: 15,
    price: 1199.99,
    countInStock: 5,
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    brand: 'Sony',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/sony-logo.png',
    category: 'Electronics',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/sony-headphones.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/sony-headphones-2.webp',
    ],
    description:
      'Industry-leading noise cancellation optimized for both wearing styles and ambient sound control. Crystal clear hands-free calling and superior sound quality.',
    reviews: [],
    rating: 4.7,
    numReviews: 23,
    price: 349.99,
    countInStock: 12,
  },
  {
    name: 'MacBook Pro 16-inch M2 Pro',
    brand: 'Apple',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/apple-logo.png',
    category: 'Computers',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/macbook.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/macbook-2.webp',
    ],
    description:
      'The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip — the first to be built on 3-nanometer technology — you get more power and greater efficiency for unparalleled performance.',
    reviews: [],
    rating: 4.9,
    numReviews: 18,
    price: 2499.99,
    countInStock: 3,
  },
  {
    name: 'Amazon Echo Dot (5th Gen)',
    brand: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/amazon-logo.png',
    category: 'Smart Home',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/echo-dot.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/echo-dot-2.webp',
    ],
    description:
      'Our best sounding Echo Dot yet - Enjoy an improved audio experience with deeper bass, crisper vocals, and richer sound in any room.',
    reviews: [],
    rating: 4.2,
    numReviews: 32,
    price: 49.99,
    countInStock: 25,
  },
  {
    name: 'Canon EOS R5 Mirrorless Camera',
    brand: 'Canon',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/canon-logo.png',
    category: 'Cameras',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/canon-camera.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/canon-camera-2.webp',
    ],
    description:
      'Revolutionary 45 Megapixel full-frame CMOS sensor, 8K 30P RAW video recording, and remarkable high-speed 20fps electronic shutter with full AF.',
    reviews: [],
    rating: 4.8,
    numReviews: 9,
    price: 3899.99,
    countInStock: 2,
  },
  {
    name: 'PlayStation 5 Console',
    brand: 'Sony',
    brandLogo: 'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/sony-logo.png',
    category: 'Gaming',
    images: [
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/ps5.webp',
      'https://res.cloudinary.com/modern-ecommerce/image/upload/v1717181120/seeds/ps5-2.webp',
    ],
    description:
      'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.',
    reviews: [],
    rating: 4.6,
    numReviews: 45,
    price: 499.99,
    countInStock: 0,
  }
];