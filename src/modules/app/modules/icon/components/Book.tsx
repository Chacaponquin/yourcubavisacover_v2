import type { IconProps } from "../domain/props";

export default function Book({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
