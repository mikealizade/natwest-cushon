import { useState } from "react";
import { FormValues } from "../components/Form";

export type Product = {
  id: string;
  name: string;
  isActive: boolean;
};

const saveData = (data: FormValues): void => {
  setTimeout(() => {
    window.localStorage.setItem("isaData", JSON.stringify(data));
  }, 1500);
};

export const fetchData = (): Product[] => {
  const data = window.localStorage.getItem("isaData") || "";
  return JSON.parse(data);
};

export const checkData = (): string | null =>
  window.localStorage.getItem("isaData");

const postFormData = (formData: FormValues): Promise<unknown> => {
  //mock post to DB
  const p = new Promise((resolve, reject) => {
    saveData(formData);
    setTimeout(() => {
      resolve("Saved successfully");
    }, 1000);
  });

  return p;
};

export const usePostFundData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (formData: FormValues) => {
    try {
      const response = await postFormData(formData);
      return response;
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};
