import { NextRequest, NextResponse } from 'next/server';

// Delete this file to make the site accessible again
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  if (host.includes('localhost') || host.includes('127.0.0.1') || host.includes('netlify.app')) {
    return NextResponse.next();
  }
  return new NextResponse(null, { status: 503 });
}

export const config = {
  matcher: '/(.*)',
};
