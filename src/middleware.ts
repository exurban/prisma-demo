import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;
  const secret = process.env.NEXTAUTH_SECRET;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }


  const session = await getToken({
    req,
    secret,
  });

  if (!session && path === "/protected") {
    console.log('not signed in')
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    console.log('signed in. redirecting to protected')
    return NextResponse.redirect(new URL("/protected", req.url));
  }
  console.log('no redirect')
  return NextResponse.next();
}