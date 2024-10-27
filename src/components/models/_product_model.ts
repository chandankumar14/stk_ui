export interface Product {
  id: number;
  title: string;
  price: string;
  description: number;
  category: string;
  image:string
}
export interface CartItem {
  id: string;
  title: string;
  image:string,
  price: number;
  quantity: number;
  totalPrice: number;
}
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
export interface RootState {
  cart: CartState;
}