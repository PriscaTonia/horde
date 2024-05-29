import clsx from "clsx";
import { toast } from "react-toastify";

export const useNotify = () => {
  const notify = (
    message: string,
    type?: "success" | "error" | "info" | "warning",
  ) => {
    return toast[(type = "info")](message, {
      className: clsx("text-black border rounded"),
    });
  };

  return notify;
};
