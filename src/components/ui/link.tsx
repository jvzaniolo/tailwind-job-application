import NextLink from 'next/link';

interface LinkProps extends React.ComponentPropsWithoutRef<typeof NextLink> {
  external?: boolean;
}

export function Link({ external = false, children, ...props }: LinkProps) {
  const externalProps = {
    target: '_blank',
    rel: 'noreferrer',
  };
  return (
    <NextLink
      className="group inline-flex items-center gap-0.5"
      {...props}
      {...(external ? externalProps : {})}
    >
      {external ? (
        <>
          {children} <ExternalIcon />
        </>
      ) : (
        children
      )}
    </NextLink>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        fillRule="evenodd"
        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
