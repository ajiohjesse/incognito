import { getUserFromToken } from '@/lib/utils';
import connectDB from '@/network/connectDB';
import Thread from '@/network/Models/thread';
import ThreadMessage from '@/network/Models/thread-message';
import { cookies } from 'next/headers';

export async function GET(
  request: Request,
  context: { params: { threadId: string } },
) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('IncognitoUser');

    const threadId = context.params.threadId;

    const user = await getUserFromToken(token?.value);

    if (!user) {
      return Response.json(
        {
          success: false,
          data: null,
          message: 'Unauthorized',
          error: user,
        },
        { status: 401 },
      );
    }

    await connectDB();

    const thread = await Thread.findById(threadId);
    const messages = await ThreadMessage.find({
      threadId,
    });

    return Response.json({
      success: true,
      data: {
        thread,
        messages,
      },
      message: 'Success',
      error: null,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error,
        message: 'Unable to fetch threads',
        data: null,
      },
      { status: 500 },
    );
  }
}
