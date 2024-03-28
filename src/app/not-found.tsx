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
        <Link href="/">Navigate to the Home page</Link>
      </main>
    </>
  );
}
