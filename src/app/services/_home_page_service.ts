import axios from "axios";
import { from, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
const API_BASE_URL = "http://localhost:8000//api/v1/"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API function
export const getItems = async () => {
  const response = await api.get("/items");
  return response.data;
};

// Another example API function
export const getItemById = async (id: any) => {
  const response = await api.get(`/items/${id}`);
  return response.data;
};

// Function to post data
export const createItem = async (itemData: any) => {
  const response = await api.post("/items", itemData);
  return response.data;
};

/** Get Category List API call******** */

export const getCategoryList = async () => {
  const response = await api.get("category_list");
  return response;
};

export function fetchData(): Observable<any> {
  return from(api.get("https://api.example.com/data")).pipe(
    map((response) => response),
    catchError((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
  );
}
