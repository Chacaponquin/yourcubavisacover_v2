import type { IconProps } from "../domain/props";

export default function Bag({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12.6001V41.0001C6 42.1047 6.89543 43.0001 8 43.0001H40C41.1046 43.0001 42 42.1047 42 41.0001V12.6001H6Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M42 12.6L36.3333 5H11.6667L6 12.6V12.6"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5554 19.2002C31.5554 23.3976 28.1727 26.8002 23.9999 26.8002C19.8271 26.8002 16.4443 23.3976 16.4443 19.2002"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
