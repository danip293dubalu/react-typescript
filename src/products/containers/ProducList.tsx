import { useEffect, useState } from "react";
import { getProducts, Product } from "../actions/products";
import { ProductCard } from "./ProductCard";

interface IProductListContainer {
  children: React.ReactNode;
}

export const ProductListContainer = (props: IProductListContainer) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {};

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ offset: 0, limit: 10 });
        setProducts(data.results);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>cargando...</div>;
  if (error) return <div>error al cargar products</div>;
  return (
    <div>
      {products.map((p) => (
        <ProductCard {...p} />
      ))}
    </div>
  );
};
