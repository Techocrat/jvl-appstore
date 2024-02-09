'use client'

import { useRouter } from 'next/navigation'

const RedirectToLogin = () => {
  const router = useRouter()
  router.push('/sign-in')
  return null
}

export default RedirectToLogin
