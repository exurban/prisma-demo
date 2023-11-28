'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import LoadingDots from 'src/components/loading-dots'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AuthForm() {
  const router = useRouter()

  // return <button onClick={() => signIn('google')}>Sign in with Google.</button>
  return (
    <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <button
        onClick={() => signIn('google', { callbackUrl: '/protected' })}
        className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
      ></button>
    </div>
  )
}
