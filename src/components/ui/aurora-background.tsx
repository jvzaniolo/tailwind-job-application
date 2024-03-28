import { cn } from '@/utils';

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter',
          '[--aurora:repeating-linear-gradient(100deg,theme(colors.blue.500)_10%,theme(colors.indigo.300)_15%,theme(colors.blue.300)_20%,theme(colors.violet.200)_25%,theme(colors.blue.400)_30%)]',
          '[--dark-gradient:repeating-linear-gradient(100deg,theme(colors.black)_0%,theme(colors.black)_7%,theme(colors.transparent)_10%,theme(colors.transparent)_12%,theme(colors.black)_16%)]',
          '[--white-gradient:repeating-linear-gradient(100deg,theme(colors.white)_0%,theme(colors.white)_7%,theme(colors.transparent)_10%,theme(colors.transparent)_12%,theme(colors.white)_16%)]',
          '[background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%]',
          'after:absolute after:inset-0 after:animate-aurora after:mix-blend-difference',
          'after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%]',
          'dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]',
          // Radial Gradient
          '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,theme(colors.transparent)_70%)]',
        )}
      />
    </div>
  );
}
