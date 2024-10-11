import { Product } from "../hooks/useFetchProducts";

type ProductsProps = {
  products: Product[];
  onSelectProdId: (id: string) => () => void;
  selectedId: string;
};

export const Products = ({
  products,
  onSelectProdId,
  selectedId,
}: ProductsProps): JSX.Element => {
  return (
    <ul className="flex flex-col gap-y-2">
      {products.map(({ id, name, isActive }: Product) => (
        <li key={id}>
          <label
            className={`text-lg flex items-center gap-x-2 ${
              !isActive ? "text-gray-500" : ""
            }`}
          >
            <input
              type="checkbox"
              id={id}
              name="selected-isa"
              onChange={onSelectProdId(id)}
              disabled={!isActive}
              checked={id === selectedId}
              className="disabled:cursor-not-allowed "
            />
            {name} {!isActive && <span className="text-sm">unavailable</span>}
          </label>
        </li>
      ))}
    </ul>
  );
};
