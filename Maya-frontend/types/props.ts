export interface Props {
  products: {
    _id: string;
    productName: string;
    price: number;
    gender: string;
    sort: string;
    searchQuery: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        _ref: string;
      };
    };
  }[];
  searchQuery: string;
}
export interface SlugProps {
  slug: any;
  current: string;
  product: {
    _id: string;
    description: string;
    productName: string;
    price: number;
    gender: string;
    sort: string;
    slug: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
}
