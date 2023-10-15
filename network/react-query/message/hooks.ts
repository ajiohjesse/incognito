import { useToast } from '@/app/components/ui/use-toast';
import { QUERY_KEYS } from '@/network/query-keys';
import { useMutation, useQuery } from 'react-query';
import {
  getSingleMessages,
  getThreads,
  sendSingleMessage,
  sendThreadMessage,
} from './services';

export const useSendSingleMessage = (successCallback?: () => void) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: sendSingleMessage,
    onSuccess: res => {
      if (res.success) {
        toast({
          title: 'Successful',
          description: res.message,
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

export const useSendThreadMessage = (successCallback?: () => void) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: sendThreadMessage,
    onSuccess: res => {
      if (res.success) {
        toast({
          title: 'Successful',
          description: res.message,
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

export const useGetSingleMessages = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.messages],
    queryFn: getSingleMessages,
  });
};

export const useGetThreads = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.threads],
    queryFn: getThreads,
  });
};
