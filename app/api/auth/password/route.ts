import { getUserFromToken } from '@/lib/utils';
import User from '@/network/Models/user';
import { cookies } from 'next/headers';

export async function PUT(req: Request) {
  try {
    const { password } = await req.json();

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

    const updatedUser = await User.findById(user.userId);
    updatedUser.password = password;
    await updatedUser.save();

    return Response.json({
      success: true,
      data: updatedUser,
      message: 'Password changed successfully',
      error: null,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error,
        message: 'Unable to change password',
        data: null,
      },
      { status: 500 },
    );
  }
}
