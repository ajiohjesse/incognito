import { getUserFromToken } from '@/lib/utils';
import Message from '@/network/Models/message';
import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { receiver, message } = await req.json();
    const cookieStore = cookies();
    const token = cookieStore.get('userToken');

    const user = await getUserFromToken(token?.value);

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

    if (user && dbReceiver.userName === user.userName) {
      return Response.json({
        success: false,
        message: 'Cannot send message to yourself',
        data: null,
        error: null,
      });
    }

    const newMessage = new Message({
      receiver,
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
    const token = cookieStore.get('userToken');

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

    const messages = await Message.find().sort({ createdAt: -1 });

    return Response.json({
      success: true,
      data: messages,
      message: 'Success',
      error: null,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error,
        message: 'Unable to fetch messages',
        data: null,
      },
      { status: 500 },
    );
  }
}
