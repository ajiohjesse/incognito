import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { userId, password } = await req.json();

    await connectDB();
    const user = await User.findOne({
      userId,
    });

    if (!user) {
      return Response.json({ success: false, message: 'User not found' });
    }

    if (user.password !== password) {
      return Response.json({
        success: false,
        message: 'Password is incorrect',
      });
    }

    try {
      const token = await new SignJWT({ userId: user.userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('365d')
        .sign(new TextEncoder().encode(process.env.JWT || ''));

      cookies().set('userToken', token);

      return Response.json({
        success: true,
        message: 'Login successful',
        data: user,
      });
    } catch (error) {
      return Response.json({
        success: false,
        error,
        message: 'unable to set token',
      });
    }
  } catch (error) {
    return Response.json({ success: false, error, message: 'Login failed' });
  }
}
