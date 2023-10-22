import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { userName, password } = await req.json();

    await connectDB();
    const user = await User.findOne({
      userName,
    });

    if (!user) {
      return Response.json({
        success: false,
        message: 'User not found',
        data: null,
        error: null,
      });
    }

    if (user.password !== password) {
      return Response.json({
        success: false,
        message: 'Password is incorrect',
        data: null,
        error: null,
      });
    }

    try {
      const token = await new SignJWT({
        userName: user.userName,
        userId: user._id,
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('365d')
        .sign(new TextEncoder().encode(process.env.JWT || ''));

      cookies().set('IncognitoUser', token);

      return Response.json({
        success: true,
        message: 'Login successful',
        data: user,
        error: null,
      });
    } catch (error) {
      return Response.json({
        success: false,
        error,
        message: 'unable to set token',
        data: null,
      });
    }
  } catch (error) {
    return Response.json({
      success: false,
      error,
      message: 'Login failed',
      data: null,
    });
  }
}
