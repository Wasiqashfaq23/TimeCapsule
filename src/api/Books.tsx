const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API;

async function fetchBooksByYear(year: number): Promise<JsonWebKey> {

const response = await fetch(
  `https://www.googleapis.com/books/v1/volumes?q=${year}&key=${API_KEY}`
);
console.log(response)
return response.json();
} 

export default fetchBooksByYear;