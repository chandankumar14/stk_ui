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

export function fetchData(): Observable<any> {
  return from(api.get("https://api.example.com/data")).pipe(
    map((response) => response),
    catchError((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
  );
}
