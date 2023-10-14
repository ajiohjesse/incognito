import Message from '@/network/Models/message';
import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';

export async function POST(req: Request) {
  try {
    const { reciever, message } = await req.json();

    await connectDB();

    const user = await User.findOne({
      userName: reciever,
    });

    if (!user) {
      return Response.json({
        success: false,
        message: 'User not found',
        data: null,
        error: null,
      });
    }

    const newMessage = new Message({
      reciever,
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
