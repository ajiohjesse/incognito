import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('userToken');

  if (!userCookie) {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 });
  }

  try {
    await jwtVerify(
      userCookie.value,
      new TextEncoder().encode(process.env.JWT || ''),
    );
  } catch {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account/:path*',
};
