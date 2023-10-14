import Thread from '@/network/Models/thread';
import ThreadMessage from '@/network/Models/thread-message';
import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';

export async function POST(req: Request) {
  try {
    const { sender, reciever, message, reqThreadId } = await req.json();
    let threadId = reqThreadId || null;

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

    if (!threadId) {
      const previousThread = await Thread.findOne({
        participants: [sender, reciever],
      });

      if (previousThread) {
        threadId = previousThread._id;
      } else {
        const newThread = new Thread({
          participants: [sender, reciever],
        });

        newThread.save();
        threadId = newThread._id;
      }
    }

    const newMessage = new ThreadMessage({
      reciever,
      sender,
      threadId,
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
