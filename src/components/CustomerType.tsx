import React from "react";
import { btnClass } from "./Form";

type CustomerTypeProps = {
  customerType: string;
  onSetCustomerType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnableIsa: () => void;
  isIsaEnabled: boolean;
};

export const CustomerType = ({
  customerType,
  onSetCustomerType,
  onEnableIsa,
  isIsaEnabled,
}: CustomerTypeProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-6 flex-1 justify-between">
      <h3 className="text-subHeader text-lg">Are you a direct customer?</h3>
      <div className="flex gap-x-8">
        <label>
          <input
            id="direct"
            name="customerType"
            type="radio"
            className="p-4 rounded-lg"
            checked={customerType === "direct"}
            onChange={onSetCustomerType}
          />{" "}
          Yes
        </label>
        <label>
          <input
            id="employer"
            name="customerType"
            type="radio"
            className="p-4 rounded-lg"
            checked={customerType === "employer"}
            onChange={onSetCustomerType}
          />{" "}
          No
        </label>
      </div>

      <button
        className={btnClass}
        type="button"
        disabled={!isIsaEnabled}
        onClick={onEnableIsa}
      >
        Submit
      </button>
    </div>
  );
};
