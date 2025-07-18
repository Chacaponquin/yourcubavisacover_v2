import type { IconProps } from "../domain/props";

export default function Bed({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 35V39"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 35V39"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
