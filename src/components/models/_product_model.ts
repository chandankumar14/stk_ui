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

export interface CategoryLayout {
  category_id: number;
  category_name: string;
  category_layout: string;
  category_banner1: string;
  productList: categoryProduct[];
}

export interface categoryProduct {
  product_id: number;
  product_name: string;
  product_image: string;
  category_id: number;
  product_description: string;
}
