import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { nanoid } from 'nanoid';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    await connectDB();

    const user = new User({
      userId: nanoid(4),
      password: password,
    });

    await user.save();

    return Response.json({ success: true, data: user });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
