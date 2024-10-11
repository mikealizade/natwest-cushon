import { useState, useEffect } from "react";

export type Product = {
  id: string;
  name: string;
  isActive: boolean;
};

export const useFetchProducts = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
};
