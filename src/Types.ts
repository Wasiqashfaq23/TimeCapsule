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
export interface WikiPage {
  title: string;
  description?: string;
  content_urls?: {
    desktop: { page: string };
    mobile: { page: string };
  };
}
export interface OnThisDayEvent {
  year: number;
  text: string;
  pages: WikiPage[];
}
export interface OnThisDayResponse {
  selected?: OnThisDayEvent[];
  events?: OnThisDayEvent[];
  births?: OnThisDayEvent[];
  deaths?: OnThisDayEvent[];
  holidays?: OnThisDayEvent[];
}
export type EventCategory = keyof Required<OnThisDayResponse>;
