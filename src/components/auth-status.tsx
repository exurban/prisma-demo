import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export default async function AuthStatus() {
  const session = await getServerSession(authOptions)
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-800 text-sm">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  )
}
