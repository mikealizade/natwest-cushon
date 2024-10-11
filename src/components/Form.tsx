import React, { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { usePostFundData, checkData } from "../hooks/usePostFundData";
import { SelectISA } from "./SelectISA";
import { CustomerType } from "./CustomerType";
import { Amount } from "./Amount";
import { Loader } from "./Loading";
import { Error } from "./Error";
import { Messages } from "./Messages";

export type FormValues = {
  customerType: string;
  isa: string;
  amount: string;
};

export const btnClass =
  "py-[16px] px-[36px] text-white bg-primary font-bold rounded-[30px] disabled:bg-gray-300 disabled:text-gray-700 self-start mt-auto";

export const Form = (): JSX.Element => {
  const {
    products = [],
    loading,
    error,
    //wanted to use env var but was flaky and randomly didnt retrieve data
  } = useFetchProducts(`http://localhost:3000/db/data.json`);
  const {
    postData,
    loading: postLoading,
    error: postError,
  } = usePostFundData();
  const dbData = JSON.parse(localStorage.getItem("isaData") ?? "{}");
  const [formValue, setFormValue] = useState<FormValues>(() => dbData);
  const [isAmountEnabled, setEnableAmount] = useState<boolean>(false);
  const [isIsaEnabled, setEnableIsa] = useState<boolean>(false);
  const [amountValue, setAmountValue] = useState<null | string>(null);
  const [message, setMessage] = useState<string | unknown>("");
  const hasSavedData = checkData();

  const onSelectProdId =
    (id: string): (() => void) =>
    (): void => {
      setFormValue({
        ...formValue,
        isa: formValue.isa === id ? "" : id,
      });
    };

  const onEnableAmount = (): void => {
    setEnableAmount(!isAmountEnabled);
  };

  const onEnableIsa = (): void => {
    setEnableIsa(true);
  };

  const onSumitForm = async (): Promise<void> => {
    const message = await postData(formValue);
    message && setMessage(message);
  };

  const onSetCustomerType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      customerType: e.target.id,
    });
  };

  const onSetAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setAmountValue(amount);
    setFormValue({
      ...formValue,
      amount,
    });
  };

  return (
    <section className="flex flex-col gap-y-4 bg-secondary rounded-[30px] p-[60px] pt-[40px] m-4">
      <h2 className="text-xl2">Select your ISA</h2>
      <Messages message={String(message)} hasSavedData={hasSavedData} />

      <>
        {/* Could use a global error provider */}
        {/* {message && typeof message === "string" && (
          <p className="p-2 px-4 bg-green-200 rounded-lg text-lg">{message}</p>
        )}
        {hasSavedData && (
          <p className="text-lg">
            Welcome back! Here are your previously saved selections.
          </p>
        )} */}
      </>

      {(loading || postLoading) && <Loader />}
      {(error || postError) && <Error error={error || postError} />}

      <>
        <div className="flex flex-col gap-y-16 gap-x-20 justify-between lg:flex-row m-auto lg:m-0">
          <CustomerType
            customerType={formValue.customerType}
            onSetCustomerType={onSetCustomerType}
            onEnableIsa={onEnableIsa}
            isIsaEnabled={formValue.customerType === "direct"}
          />

          <div className="flex flex-col gap-y-6 flex-1">
            {hasSavedData || isIsaEnabled ? (
              <SelectISA
                products={products}
                onSelectProdId={onSelectProdId}
                onEnableAmount={onEnableAmount}
                isDisabled={!formValue.isa}
                selectedId={formValue.isa}
              />
            ) : null}
          </div>

          <div className="flex flex-col gap-y-6 flex-1 justify-between">
            {hasSavedData || isAmountEnabled ? (
              <Amount
                onSetAmountValue={onSetAmountValue}
                onSumitForm={onSumitForm}
                isDisabled={!formValue.amount}
                amountValue={amountValue ?? formValue.amount}
              />
            ) : null}
          </div>
        </div>
      </>
    </section>
  );
};
