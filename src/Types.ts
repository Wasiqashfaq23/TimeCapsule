export interface GoogleBooksResponse {
  kind: string;
  totalItems: number;
  items?: BookVolume[]; 
}
export interface BookVolume {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    categories?: string[];
    pageCount?: number;  
    imageLinks?: {
      thumbnail?: string;
    };
  };
}