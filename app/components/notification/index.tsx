'use client';

import useCurrentUser from '@/hooks/useCurrentUser';
import {
  IMessage,
  NotificationBell,
  NovuProvider,
  PopoverNotificationCenter,
} from '@novu/notification-center';
import { useRouter } from 'next/navigation';

const Notification = () => {
  const { user } = useCurrentUser();
  const router = useRouter();

  function handlerOnNotificationClick(message: IMessage) {
    if (message?.cta?.data?.url) {
      router.push(message.cta.data.url);
    }
  }

  if (!user) return null;

  return (
    <NovuProvider
      subscriberId={user.userName}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID || ''}
      styles={{
        layout: {
          root: {
            width: '350px',
            overflow: 'hidden',
          },
        },
        popover: {
          dropdown: {
            width: '350px !important',
            overflow: 'hidden',
          },
        },
      }}
    >
      <PopoverNotificationCenter
        colorScheme={'light'}
        onNotificationClick={handlerOnNotificationClick}
        position='top-end'
      >
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Notification;
