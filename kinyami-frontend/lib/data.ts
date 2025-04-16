import { Data, IProductInput } from '@/types'

const products: IProductInput[] = [
  {
    name: 'Classic Leather Jacket',
    slug: 'classic-leather-jacket',
    description: 'A timeless leather jacket made from premium materials.',
    images: [
      '/images/products/leather-jacket-1.jpg',
      '/images/products/leather-jacket-2.jpg',
    ],
    category: 'Fashion',
    brand: 'Kinyami',
    countInStock: 10,
    listPrice: 199.99,
    price: 149.99,
    isPublished: true,
    tags: ['leather', 'jacket', 'fashion'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    avgRating: 4.5,
    numReviews: 12,
    ratingDistribution: [
      { rating: 5, count: 8 },
      { rating: 4, count: 3 },
      { rating: 3, count: 1 },
    ],
    reviews: ['Great quality!', 'Fits perfectly!', 'Highly recommend!'],
    numSales: 25,
    // createdAt: new Date(),
    // updatedAt: new Date(),
  },
  {
    name: 'Eco-Friendly Tote Bag',
    slug: 'eco-friendly-tote-bag',
    description:
      'A stylish and sustainable tote bag made from recycled materials.',
    images: [
      '/images/products/tote-bag-1.jpg',
      '/images/products/tote-bag-2.jpg',
    ],
    category: 'Accessories',
    brand: 'Kinyami',
    countInStock: 50,
    listPrice: 29.99,
    price: 19.99,
    isPublished: true,
    tags: ['eco-friendly', 'bag', 'sustainable'],
    sizes: [],
    colors: ['Beige', 'Green'],
    avgRating: 4.8,
    numReviews: 8,
    ratingDistribution: [
      { rating: 5, count: 6 },
      { rating: 4, count: 2 },
    ],
    reviews: ['Love the design!', 'Perfect for daily use!'],
    numSales: 40,
    // createdAt: new Date(),
    // updatedAt: new Date(),
  },
  {
    name: 'Wireless Earbuds',
    slug: 'wireless-earbuds',
    description: 'High-quality wireless earbuds with noise cancellation.',
    images: [
      '/images/products/earbuds-1.jpg',
      '/images/products/earbuds-2.jpg',
    ],
    category: 'Electronics',
    brand: 'Kinyami',
    countInStock: 30,
    listPrice: 99.99,
    price: 79.99,
    isPublished: true,
    tags: ['electronics', 'earbuds', 'wireless'],
    sizes: [],
    colors: ['White', 'Black'],
    avgRating: 4.2,
    numReviews: 20,
    ratingDistribution: [
      { rating: 5, count: 10 },
      { rating: 4, count: 7 },
      { rating: 3, count: 3 },
    ],
    reviews: [
      'Great sound quality!',
      'Battery lasts long!',
      'Comfortable fit!',
    ],
    numSales: 60,
    // createdAt: new Date(),
    // updatedAt: new Date(),
  },
]

const data: Data = {
  headerMenus: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  carousels: [
    {
      title: 'Welcome to Kinyami',
      buttonCaption: 'Shop Now',

      image: '/images/banner-4.jpg',
      url: '/shop',
      isPublished: true,
    },
    {
      title: 'Quality and Craftsmanship',
      buttonCaption: 'Shop Now',
      image: '/images/banner-2.jpg',
      url: '/shop',
      isPublished: true,
    },
    {
      title: 'Sustainable Materials',
      buttonCaption: 'Shop Now',
      image: '/images/banner-3.avif',
      url: '/shop',
      isPublished: true,
    },
  ],
  products,
}

export default data
