import { useToast } from '@/app/components/ui/use-toast';
import { userStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import {
  loginService,
  registerService,
  updatePasswordService,
} from './services';

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
          duration: 1000,
        });
        setUser({
          userName: res.data.userName,
          userId: res.data._id,
        });

        router.refresh();
      } else {
        toast({
          title: 'Failed',
          description: res.message,
        });
      }
    },
  });
};

export const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  const setUser = useSetRecoilState(userStore);

  return useMutation({
    mutationFn: registerService,
    onSuccess: res => {
      if (res.success) {
        toast({
          title: 'Successful',
          description: res.message,
          duration: 1000,
        });
        setUser({
          userName: res.data.userName,
          userId: res.data._id,
        });

        router.refresh();
      } else {
        toast({
          title: 'Failed',
          description: res.message,
        });
      }
    },
  });
};

export const useUpdatePassword = (successCallback?: () => void) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: updatePasswordService,
    onSuccess: res => {
      if (res.success) {
        toast({
          title: 'Successful',
          description: res.message,
          duration: 1000,
        });

        if (successCallback) successCallback();
      } else {
        toast({
          title: 'Failed',
          description: res.message,
        });
      }
    },
  });
};
