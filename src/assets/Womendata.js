import Product_1 from '../assets/product_1.png';
import Product_2 from '../assets/product_2.png';
import Product_3 from '../assets/product_3.png';
import Product_4 from '../assets/product_4.png';
import Product_5 from '../assets/product_5.png';
import Product_6 from '../assets/product_6.png';
import Product_7 from '../assets/product_7.png';
import Product_8 from '../assets/product_8.png';
import Product_9 from '../assets/product_9.png';
import Product_10 from '../assets/product_10.png';
import Product_11 from '../assets/product_11.png';
import Product_12 from '../assets/product_12.png';
import Product_37 from '../assets/product_37.avif';
import Product_38 from '../assets/product_38.avif';
import Product_39 from '../assets/product_39.avif';
import Product_40 from '../assets/product_40.avif';
import Product_41 from '../assets/product_41.avif';
import Product_42 from '../assets/product_42.avif';
import Product_43 from '../assets/product_43.avif';
import Product_44 from '../assets/product_44.avif';
import Product_45 from '../assets/product_45.avif';
import Product_46 from '../assets/product_46.avif';
import Product_47 from '../assets/product_47.avif';
import Product_48 from '../assets/product_48.avif';
import Product_49 from '../assets/product_49.avif';
import Product_50 from '../assets/product_50.avif';
import Product_51 from '../assets/product_51.avif';
import Product_52 from '../assets/product_52.avif';
import Product_53 from '../assets/product_53.avif';
import Product_54 from '../assets/product_54.avif';

const Womendata = [
  {
    id: 1,
    img: Product_1,
    productName: 'Elegant Evening Dress',
    price: '$120.00',
    description: 'A stunning evening dress perfect for formal occasions. Made from high-quality fabric with intricate detailing.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Gucci'
  },
  {
    id: 2,
    img: Product_2,
    productName: 'Casual Summer Dress',
    price: '$45.00',
    description: 'A casual summer dress that is lightweight and comfortable. Perfect for a day out in the sun.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Zara'
  },
  {
    id: 3,
    img: Product_3,
    productName: 'Floral Print Blouse',
    price: '$35.00',
    description: 'A floral print blouse that adds a touch of elegance to any outfit. Made from soft and breathable material.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'H&M'
  },
  {
    id: 4,
    img: Product_4,
    productName: 'High-Waisted Jeans',
    price: '$60.00',
    description: 'High-waisted jeans that offer a flattering fit and timeless style. Made from durable denim.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Levi\'s'
  },
  {
    id: 5,
    img: Product_5,
    productName: 'Cozy Knit Sweater',
    price: '$50.00',
    description: 'A cozy knit sweater that is perfect for chilly days. Made from soft and warm fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Gap'
  },
  {
    id: 6,
    img: Product_6,
    productName: 'Formal Blazer',
    price: '$85.00',
    description: 'A formal blazer that is perfect for business meetings and professional settings. Made from high-quality material.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Calvin Klein'
  },
  {
    id: 7,
    img: Product_7,
    productName: 'Athletic Leggings',
    price: '$40.00',
    description: 'Athletic leggings that are perfect for workouts and yoga sessions. Made from stretchable and breathable fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Nike'
  },
  {
    id: 8,
    img: Product_8,
    productName: 'Stylish Handbag',
    price: '$150.00',
    description: 'A stylish handbag that complements any outfit. Made from premium leather.',
    sizes: ['One Size'],
    brand: 'Michael Kors'
  },
  {
    id: 9,
    img: Product_9,
    productName: 'Comfortable Flats',
    price: '$70.00',
    description: 'Comfortable flats that are perfect for everyday wear. Made from soft and durable material.',
    sizes: ['6', '7', '8', '9', '10'],
    brand: 'Clarks'
  },
  {
    id: 10,
    img: Product_10,
    productName: 'Classic Trench Coat',
    price: '$180.00',
    description: 'A classic trench coat that offers timeless style and protection from the elements. Made from high-quality fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Burberry'
  },
  {
    id: 11,
    img: Product_11,
    productName: 'Leather Boots',
    price: '$130.00',
    description: 'Leather boots that are perfect for both casual and formal occasions. Made from genuine leather.',
    sizes: ['6', '7', '8', '9', '10'],
    brand: 'Timberland'
  },
  {
    id: 12,
    img: Product_12,
    productName: 'Elegant Scarf',
    price: '$30.00',
    description: 'An elegant scarf that adds a touch of sophistication to any outfit. Made from soft and warm fabric.',
    sizes: ['One Size'],
    brand: 'Coach'
  },
  {
    id: 37,
    img: Product_37,
    productName: 'Winter Puffer Jacket',
    price: '$120.00',
    description: 'A warm and stylish puffer jacket for winter. Made from high-quality materials for maximum warmth.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Canada Goose'
  },
  {
    id: 38,
    img: Product_38,
    productName: 'Summer Shorts',
    price: '$25.00',
    description: 'Lightweight and comfortable summer shorts. Perfect for casual wear and outdoor activities.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Old Navy'
  },
  {
    id: 39,
    img: Product_39,
    productName: 'Formal Suit',
    price: '$200.00',
    description: 'A sleek and modern formal suit. Perfect for business and formal occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Hugo Boss'
  },
  {
    id: 40,
    img: Product_40,
    productName: 'Casual Sneakers',
    price: '$60.00',
    description: 'Comfortable and stylish casual sneakers. Ideal for everyday wear.',
    sizes: ['7', '8', '9', '10', '11'],
    brand: 'Vans'
  },
  {
    id: 41,
    img: Product_41,
    productName: 'Leather Jacket',
    price: '$150.00',
    description: 'A classic leather jacket that never goes out of style. Made from premium leather.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Schott'
  },
  {
    id: 42,
    img: Product_42,
    productName: 'Graphic T-Shirt',
    price: '$20.00',
    description: 'A trendy graphic t-shirt made from soft and breathable cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Uniqlo'
  },
  {
    id: 43,
    img: Product_43,
    productName: 'Jogger Pants',
    price: '$35.00',
    description: 'Comfortable jogger pants perfect for workouts and casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Puma'
  },
  {
    id: 44,
    img: Product_44,
    productName: 'Baseball Cap',
    price: '$18.00',
    description: 'A classic baseball cap made from high-quality materials. Perfect for sunny days.',
    sizes: ['One Size'],
    brand: 'New Era'
  },
  {
    id: 45,
    img: Product_45,
    productName: 'Swim Trunks',
    price: '$28.00',
    description: 'Stylish swim trunks perfect for beach and pool days. Made from quick-drying fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Speedo'
  },
  {
    id: 46,
    img: Product_46,
    productName: 'Flannel Shirt',
    price: '$30.00',
    description: 'A cozy flannel shirt ideal for cooler weather. Made from soft and warm fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'LL Bean'
  },
  {
    id: 47,
    img: Product_47,
    productName: 'Dress Pants',
    price: '$40.00',
    description: 'Elegant dress pants suitable for formal occasions. Made from high-quality fabric for a comfortable fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Banana Republic'
  },
  {
    id: 48,
    img: Product_48,
    productName: 'Winter Gloves',
    price: '$22.00',
    description: 'Warm winter gloves made from soft and durable materials. Perfect for cold weather.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'The North Face'
  },
  {
    id: 49,
    img: Product_49,
    productName: 'Rain Jacket',
    price: '$75.00',
    description: 'A waterproof rain jacket to keep you dry during rainy days. Made from breathable materials.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Patagonia'
  },
  {
    id: 50,
    img: Product_50,
    productName: 'Graphic Sweatshirt',
    price: '$32.00',
    description: 'A cozy graphic sweatshirt perfect for casual wear. Made from soft and warm fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Champion'
  },
  {
    id: 51,
    img: Product_51,
    productName: 'Chukka Boots',
    price: '$90.00',
    description: 'Stylish chukka boots made from premium leather. Ideal for both casual and formal wear.',
    sizes: ['7', '8', '9', '10', '11'],
    brand: 'Timberland'
  },
  {
    id: 52,
    img: Product_52,
    productName: 'Running Shorts',
    price: '$25.00',
    description: 'Lightweight running shorts perfect for workouts and outdoor activities. Made from breathable fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Asics'
  },
  {
    id: 53,
    img: Product_53,
    productName: 'Polo Sweater',
    price: '$40.00',
    description: 'A stylish polo sweater perfect for smart casual occasions. Made from soft and comfortable fabric.',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Ralph Lauren'
  },
  {
    id: 54,
    img: Product_54,
    productName: 'Hiking Boots',
    price: '$110.00',
    description: 'Durable hiking boots designed for rough terrains. Made from high-quality materials for maximum comfort and support.',
    sizes: ['7', '8', '9', '10', '11'],
    brand: 'Merrell'
  }
];

export default Womendata;
