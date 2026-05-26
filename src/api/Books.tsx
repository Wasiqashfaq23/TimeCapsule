const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API;
import type { GoogleBooksResponse } from "../Types";
async function fetchBooksByYear(year: number): Promise<GoogleBooksResponse> {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${year}&key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch books for year ${year}: ${response.statusText}`);
  }
  return response.json();
}
export default fetchBooksByYear;
