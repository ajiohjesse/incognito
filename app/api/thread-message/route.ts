import { getUserFromToken } from '@/lib/utils';
import Thread from '@/network/Models/thread';
import ThreadMessage from '@/network/Models/thread-message';
import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { sender, receiver, message, threadId } = await req.json();
    let thread = threadId || null;

    await connectDB();

    const dbReceiver = await User.findOne({
      userName: receiver,
    });

    if (!dbReceiver) {
      return Response.json({
        success: false,
        message: 'User not found',
        data: null,
        error: null,
      });
    }

    if (dbReceiver.userName === sender) {
      return Response.json({
        success: false,
        message: 'Cannot send message to yourself',
        data: null,
        error: null,
      });
    }

    if (!thread) {
      const previousThread = await Thread.findOne({
        participants: [sender, receiver],
      });

      if (previousThread) {
        thread = previousThread._id;
      } else {
        const newThread = new Thread({
          participants: [sender, receiver],
        });

        newThread.save();
        thread = newThread._id;
      }
    }

    const newMessage = new ThreadMessage({
      receiver,
      sender,
      threadId: thread,
      message,
    });

    await newMessage.save();

    return Response.json({
      success: true,
      data: newMessage,
      message: 'Message sent',
      error: null,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
      message: 'Message not sent',
      data: null,
    });
  }
}

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('IncognitoUser');

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

    const threads = await Thread.find({
      participants: { $in: [user.userId, user.userName] },
    });

    return Response.json({
      success: true,
      data: threads,
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
