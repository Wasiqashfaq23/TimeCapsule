export interface NumbersDateResponse {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

export interface NumbersYearResponse {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

export interface BookByYear {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
}