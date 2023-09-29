import { cn } from '@/lib/utils';

const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={cn(
          'h-4 w-4 animate-spin rounded-full border-t-2 border-primary',
          className,
        )}
      ></div>
    </div>
  );
};

export default Spinner;
