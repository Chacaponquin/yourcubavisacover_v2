import type { IconProps } from "../domain/props";

export default function Star({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
        fill="inherit"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
