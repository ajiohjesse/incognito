import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showPasswordToggle, ...props }, ref) => {
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className='relative'>
        <input
          type={isPasswordVisible ? 'text' : type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type='button'
            className='absolute right-2 top-[50%] -translate-y-[50%]'
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <EyeOff width={16} height={16} />
            ) : (
              <Eye width={16} height={16} />
            )}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
