export interface imageProps {
  id: number;
}

export interface CardProps {
  image: { [key: string]: any };
}

export interface ImageSearchProps {
  searchText: (text: string) => void;
}
