'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

const UserAccountNav = () => {
  return (
    <Button
      onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`,
      })}
      className='flex-1 w-32 h-12 bg-emerald-500 hover:bg-red-500 text-white font-bold border-b-4 border-red-700 hover:border-red-700 rounded'
    >
      Logout
    </Button>
  )
}

export default UserAccountNav
