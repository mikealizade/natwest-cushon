import React from "react";
import { btnClass } from "./Form";
import { Product } from "../hooks/useFetchProducts";
import { Products } from "./Products";

type SelectISAProps = {
  products: Product[];
  onSelectProdId: (id: string) => () => void;
  onEnableAmount: () => void;
  isDisabled: boolean;
  selectedId: string;
};

export const SelectISA = ({
  products,
  onSelectProdId,
  onEnableAmount,
  isDisabled,
  selectedId,
}: SelectISAProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-6 flex-1">
      <>
        <h3 className="text-subHeader text-lg">Please select an ISA.</h3>
        <Products
          products={products}
          onSelectProdId={onSelectProdId}
          selectedId={selectedId}
        />
        <button
          className={btnClass}
          type="button"
          disabled={isDisabled}
          onClick={onEnableAmount}
        >
          Select ISA
        </button>
      </>
    </div>
  );
};
