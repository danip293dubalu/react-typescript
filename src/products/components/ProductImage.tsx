import classNames from "classnames";
import { enumPublicState, Product } from "../actions/products";

export const ProductImage = ({ name, type, photos, list_state }: Product) => {
  const isDisabled = list_state === enumPublicState.unpublished;
  return (
    <div
      className={classNames(
        "product-img card-img-top overflow-hidden position-relative",
        {
          "opacity-25": isDisabled,
          "pointer-events-none": isDisabled,
        }
      )}
    >
      <div
        className="d-flex aling-items-center justify-content-center position-absolute inset-0 pointer-events-none"
        style={{ zIndex: "1" }}
      >
        <img
          className="img-fluid img-animate"
          alt={name}
          decoding="async"
          //   style={{ transform: "rotate(-30deg)" }}
          src={photos[0]}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
