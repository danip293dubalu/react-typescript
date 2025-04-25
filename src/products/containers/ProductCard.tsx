import classNames from "classnames";
import { Card, CardBody } from "reactstrap";
import { enumPublicState, Product } from "../actions/products";
import { ProductImage } from "../components/ProductImage";
import { ProductBody } from "../components/ProductBody";

export const ProductCard = (product: Product) => {
  const isDisabled = product.list_state === enumPublicState.unpublished;
  return (
    <Card className={classNames("product-item b-0", {})}>
      <ProductImage {...product} />
      <CardBody
        className={classNames("product-item-info p-2", {
          "opacity-25": isDisabled,
          "pointer-events-none": isDisabled,
        })}
      >
        <ProductBody {...product} />
      </CardBody>
    </Card>
  );
};
