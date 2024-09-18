import { Product, } from "@/components/models/_product_model";
import axios from "axios";
import { from, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
const API_BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API function
export const getItems = async () => {
  const response = await api.get("/todos");
  return response.data;
};

export function GetProductList(): Observable<Product[]> {
  return from(api.get<Product[]>("/products")).pipe(
    map((response) => response.data),
    catchError((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
  );
}


export function GetSimilarProductList() {
  return from(api.get("https://api.example.com/data")).pipe(
    map((response) => response),
    catchError((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
  );
}

export function GetBannerList() {
  return from(api.get("https://api.example.com/data")).pipe(
    map((response) => response),
    catchError((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
  );
}
