export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  imageUrl?: string | null;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Mouse', price: 29.99, stock: 120, imageUrl: '' },
  { id: 2, name: 'Phone case', price: 15.0, stock: 0, imageUrl: '' },
  { id: 3, name: 'Standing Desk', price: 199.99, stock: 20, imageUrl: '' },
  { id: 4, name: 'Wireless Keyboard', price: 29.99, stock: 120, imageUrl: '' },
  { id: 5, name: 'Screens', price: 15.0, stock: 0, imageUrl: '' },
  { id: 6, name: 'Tablet', price: 199.99, stock: 40, imageUrl: '' },
  { id: 7, name: 'Laptop Case', price: 29.99, stock: 120, imageUrl: '' },
  {
    id: 8,
    name: 'sneakers',
    price: 1500,
    stock: 3,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0587/3274/0775/files/R_1500x.jpg?v=latest',
  },
  { id: 9, name: 'Use Cable', price: 199.99, stock: 40, imageUrl: '' },
  { id: 10, name: 'Bag', price: 399.99, stock: 15, imageUrl: '' },
  { id: 11, name: 'Shoes', price: 200, stock: 14, imageUrl: '' },
  { id: 12, name: 'Shirt', price: 195.99, stock: 60, imageUrl: '' },
  { id: 13, name: 'Key chain', price: 50, stock: 2, imageUrl: '' },
];
