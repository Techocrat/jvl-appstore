import * as React from 'react'
import { getSession } from '@/lib/auth'

import { Button } from '@/components/ui/button'
import UserAccountNav from './UserAccountNav'
import Link from 'next/link'


const Navbar = async () => {
  const session = await getSession()
  const user = session?.user || null
  return (
    <nav className='bg-gray-50 border-b border-gray-300 text-black font-segoe-ui p-4 sticky top-0 z-999'>
      <div className='flex items-center justify-between'>
        <Link href='/home'>
        <div className='flex items-center'>
          <h4 className='m-1'>
            <img src='/logo_b.svg' alt='#' className='w-10 h-10 ml-4 mr-4' />
          </h4>
          <h1 className='text-2xl font-semibold'>Appstore</h1>
        </div>
        </Link>
        {user ? (
          user.role === 'developer' ? (
            <>
              <div className='flex items-center pr-10 justify-between'>
                <div className='flex flex-row items-center justify-center space-x-4'>
                  <Link href='/new-app'>
                  <Button className='flex-1 w-32 h-12 bg-emerald-500 hover:bg-blue-500 text-white font-bold border-b-4 border-blue-700 hover:border-blue-700 rounded'>
                    New App
                  </Button>
                  </Link>
                  
                  <Link href='/my-apps'>
                  <Button className='flex-1 w-32 h-12 bg-emerald-500 hover:bg-purple-500 text-white font-bold border-b-4 border-purple-700 hover:border-purple-700 rounded'>
                    My Apps
                  </Button>
                  </Link>

                  <Link href='/all-apps'>
                  <Button className='flex-1 w-32 h-12 bg-emerald-500 hover:bg-yellow-500 text-white font-bold border-b-4 border-yellow-700 hover:border-yellow-700 rounded'>
                    All Apps
                  </Button>
                  </Link>
                    <UserAccountNav />
                  
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='flex items-center pr-10 justify-between'>
                <div className='flex flex-row items-center justify-center space-x-4'>
                  <Link href='/all-apps'>
                  <Button className='flex-1 w-32 h-12 bg-emerald-500 hover:bg-violet-500 text-white font-bold border-b-4 border-violet-700 hover:border-violet-700 rounded'>
                    All Apps
                  </Button>
                  </Link>
                  <UserAccountNav />
                </div>
              </div>
            </>
          )
        ) : (
          <>
          <Link href='/sign-in'>
            <Button className=' w-32 h-12 bg-emerald-500 hover:bg-red-500 text-white font-bold border-b-4 border-red-700 hover:border-red-700 rounded'>
              Sign in
            </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
