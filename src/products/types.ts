export type LoadingStatus = "idle" | "loading" | "success" | "failure";

export type ProductReview = {
  customer: string;
  review: string;
  score: number;
};

export type ProductSales = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type ProductDetails = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: ProductReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: ProductSales[];
};
