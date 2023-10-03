import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('userToken');

  if (request.nextUrl.pathname.startsWith('/account')) {
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

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (!userCookie) return;

    try {
      await jwtVerify(
        userCookie.value,
        new TextEncoder().encode(process.env.JWT || ''),
      );

      return NextResponse.redirect(new URL('/account', request.url), {
        status: 302,
      });
    } catch {
      return;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:path*', '/auth/:path*'],
};
