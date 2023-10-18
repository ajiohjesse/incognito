import { useToast } from '@/app/components/ui/use-toast';
import { QUERY_KEYS } from '@/network/query-keys';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  getSingleMessages,
  getThreadMessages,
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendThreadMessage,
    onSuccess: res => {
      if (res.success) {
        queryClient.invalidateQueries([
          QUERY_KEYS.threadMessages,
          res.data.threadId,
        ]);
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

export const useGetThreadMessages = (threadId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.threadMessages, threadId],
    queryFn: () => getThreadMessages(threadId),
    refetchInterval: 7000,
  });
};
