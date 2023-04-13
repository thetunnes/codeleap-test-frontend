import { toast } from "react-toastify";

export function useToast() {
  const notifySuccess = (string: string) => toast(string);
  const notifyError = (string: string) => toast.error(string);

  return {
    notifyError,
    notifySuccess,
  };
}