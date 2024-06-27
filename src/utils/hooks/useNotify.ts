import clsx from "clsx";
import { toast } from "react-toastify";

export const useNotify = () => {
  const notify = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info",
  ) => {
    if (!message) return; // Avoid calling toast with an empty or undefined message
    return toast[type](message, {
      className: clsx("text-black border rounded"),
    });
  };

  return notify;
};
