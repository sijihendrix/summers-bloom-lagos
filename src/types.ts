export interface imageProps {
  id: number;
}

export interface CardProps {
  image: { [key: string]: any };
  carousel?: boolean;
}

export interface CarouselWheelProps {
  images: { [key: string]: any };
}

export interface ImageSearchProps {
  searchText: (text: string) => void;
}
export interface ContainerProps {
  component: () => JSX.Element;
}

export interface SocialIconsProps {
  children: React.SVGProps<SVGSVGElement>;
}

export interface NavProps {
  gallery?: boolean;
}

export interface GalleryProps extends ImageSearchProps {
  images: { [key: string]: any };
  isLoading: boolean;
}
