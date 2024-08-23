import { twMerge } from "tailwind-merge";

interface ITextComponentProps {
  text: string;
  className?: string;
}

export const TextComponent = ({ text, className }: ITextComponentProps) => {
  return <p className={twMerge("w-1/2 text-left", className)}>{text}</p>;
};