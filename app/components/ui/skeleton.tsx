import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={cn('block animate-pulse rounded-md bg-muted/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
