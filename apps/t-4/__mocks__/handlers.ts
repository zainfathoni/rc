import { HttpResponse, http } from "msw";

interface Product {
  id: number;
  title: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 999,
  },
  {
    id: 2,
    title: "iPhone 12",
    price: 549,
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    price: 899,
  },
];

export const dummyJsonHandlers = [
  http.get("https://dummyjson.com/products/", () => {
    return HttpResponse.json({ products });
  }),
];
