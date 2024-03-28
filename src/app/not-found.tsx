import { AuroraBackground } from '@/components/ui/aurora-background';
import { Link } from '@/components/ui/link';

export default function NotFound() {
  return (
    <>
      <AuroraBackground />
      <main className="prose dark:prose-invert prose-sky prose-a:underline-offset-4 mx-auto flex h-screen max-w-screen-lg flex-col items-center justify-center px-8">
        <h1>
          <strong>404 | </strong>
          <span>Page not found.</span>
        </h1>
        <Link href="/">
          <ArrowLeftIcon />
          Go back
        </Link>
      </main>
    </>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
