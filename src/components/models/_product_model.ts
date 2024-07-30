export interface ProductProps {
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
