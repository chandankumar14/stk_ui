export interface PRODUCT {
  product_id: number;
  product_name: string;
  product_size: string;
  image: string;
  sku_code: string;
  quantity: number;
  price: string | any;
  in_stock: boolean;
  product_image: string;
  product_description: string;
  category_id: number;
  isDeleted: boolean;
}

export interface CATEGORY_LAYOUT {
  category_id: number;
  category_name: string;
  category_layout: string;
  category_banner1: string;
  productList: PRODUCT[];
}

export interface Product {
  id: number;
  title: string;
  price: string;
  description: number;
  category: string;
  image:string
}

export interface cartItem{
  items:[],
  totalPrice:number |any,
  totalQuantity:number
}

