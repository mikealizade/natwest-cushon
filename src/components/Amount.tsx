import React from "react";
import { btnClass } from "./Form";

type AmountProps = {
  isDisabled: boolean;
  onSetAmountValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSumitForm: () => void;
  amountValue: string;
};

export const Amount = ({
  onSetAmountValue,
  onSumitForm,
  isDisabled,
  amountValue,
}: AmountProps): JSX.Element => {
  return (
    <>
      <h3 className="text-subHeader text-lg">
        Please enter the amount to invest.
      </h3>
      <input
        id="ammount"
        type="number"
        min="1"
        placeholder="Enter amount"
        className="p-4 rounded-lg"
        onChange={onSetAmountValue}
        value={amountValue}
      />
      <button
        className={btnClass}
        type="button"
        disabled={isDisabled}
        onClick={onSumitForm}
      >
        Submit Amount
      </button>
    </>
  );
};
