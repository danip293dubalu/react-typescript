import { Product } from "../actions/products";

export const ProductBody = (product: Product) => {
  const pathToDetail = "/";
  return (
    <div>
      <div className="product-item-name font-bold text-balance mb-0">
        <a href={pathToDetail}>{product.name}</a>
        <p>{product.list_price}</p>
      </div>
    </div>
  );
};
