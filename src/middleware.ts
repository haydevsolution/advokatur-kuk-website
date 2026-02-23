import { NextResponse } from 'next/server';

// Delete this file to make the site accessible again
export function middleware() {
  return new NextResponse(null, { status: 503 });
}

export const config = {
  matcher: '/(.*)',
};
