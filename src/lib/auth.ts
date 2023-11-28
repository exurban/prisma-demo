import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import prisma from "src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"



export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
     clientId: process.env.GOOGLE_CLIENT_ID as string,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
     allowDangerousEmailAccountLinking: true,
    })
   ],
};