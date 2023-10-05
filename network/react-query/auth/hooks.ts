import { useToast } from '@/app/components/ui/use-toast';
import { userStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { loginService } from './services';

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setUser = useSetRecoilState(userStore);

  return useMutation({
    mutationFn: loginService,
    onSuccess: res => {
      if (res.success) {
        toast({
          title: 'Successful',
          description: res.message,
          variant: 'success',
          duration: 1000,
        });
        setUser({
          userId: res.data.userId,
        });

        router.push('/account');
      } else {
        toast({
          title: 'Failed',
          description: res.message,
          variant: 'destructive',
        });
      }
    },
  });
};
