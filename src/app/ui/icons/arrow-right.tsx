type SVGProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export default function ArrowRight({ ...svgProps }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      {...svgProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6944 5.0448C11.7439 5.0448 9.96635 3.19396 9.96635 1.16146V0.328125H8.36635V1.16146C8.36635 2.63979 8.98875 4.02646 9.96555 5.0448H0.0943604V6.7115H9.96555C8.98875 7.7298 8.36635 9.1165 8.36635 10.5948V11.4281H9.96635V10.5948C9.96635 8.5623 11.7439 6.7115 13.6944 6.7115H14.4943V5.0448H13.6944Z"
        fill="currentColor"
      />
    </svg>
  );
}
