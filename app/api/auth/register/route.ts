import User from '@/network/Models/user';
import connectDB from '@/network/connectDB';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { userName, password } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({
      userName,
    });

    if (existingUser) {
      return Response.json({
        success: false,
        message: 'Username already exists',
        data: null,
        error: null,
      });
    }

    const user = new User({
      userName,
      password,
    });

    await user.save();

    const token = await new SignJWT({ userName: user.userName })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('365d')
      .sign(new TextEncoder().encode(process.env.JWT || ''));

    cookies().set('userToken', token);

    return Response.json({
      success: true,
      data: user,
      message: 'New account created',
      error: null,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
      message: 'Registration failed',
      data: null,
    });
  }
}
