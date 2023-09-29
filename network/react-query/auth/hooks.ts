import { useToast } from '@/app/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { loginService } from './services';

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: loginService,
    onSuccess: data => {
      if (data.success) {
        toast({
          title: 'Successful',
          description: data.message,
          variant: 'success',
          duration: 1000,
        });

        router.push('/account');
      } else {
        toast({
          title: 'Failed',
          description: data.message,
          variant: 'destructive',
        });
      }
    },
  });
};
