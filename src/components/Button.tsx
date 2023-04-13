import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "empty" | "blue" | "green" | "red";
}
export function Button({ children, color = "empty", ...props }: IButtonProps) {
  return (
    <button
      {...props}
      className={`
    w-max px-8 py-1 self-end
    ${color === "blue" ? "bg-blueLight text-white" : color === "green" ? 
      "bg-greenLight text-white" : color === "red" ? 
      "bg-redLight text-white" : "bg-transparent border border-black text-black"
    }
     rounded-lg disabled:opacity-80 outline-none shadow-md focus:shadow-blueLight
    `}
    >
      {children}
    </button>
  );
}
