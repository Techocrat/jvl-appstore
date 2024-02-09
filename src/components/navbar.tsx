import * as React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { Button } from '@/components/ui/button'
import UserAccountNav from './UserAccountNav'
import Link from 'next/link'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user || null
  return (
    <nav className='bg-white-200 border-b border-gray-300 text-black font-segoe-ui p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h4 className='m-1'>
            <img src='/logo.svg' alt='#' className='w-10 h-10 ml-4 mr-4' />
          </h4>
          <h1 className='text-2xl font-semibold'>Appstore</h1>
        </div>

        {user ? (
          user.role === 'user' ? (
            <>
              <div className='flex items-center pr-10 justify-between'>
                <div className='flex flex-row items-center justify-center space-x-4'>
                  <Link href='/new-app'>
                  <Button className='flex-1 w-32 h-12 bg-green-500 hover:bg-blue-500 text-white font-bold border-b-4 border-blue-700 hover:border-blue-700 rounded'>
                    New App
                  </Button>
                  </Link>

                  <Button className='flex-1 w-32 h-12 bg-green-500 hover:bg-purple-500 text-white font-bold border-b-4 border-purple-700 hover:border-purple-700 rounded'>
                    My Apps
                  </Button>

                  <Button className='flex-1 w-32 h-12 bg-green-500 hover:bg-yellow-500 text-white font-bold border-b-4 border-yellow-700 hover:border-yellow-700 rounded'>
                    All Apps
                  </Button>

                    <UserAccountNav />
                  
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='flex items-center pr-10 justify-between'>
                <div className='flex flex-row items-center justify-center space-x-4'>
                  <Button className='flex-1 w-32 h-12 bg-green-500 hover:bg-violet-500 text-white font-bold border-b-4 border-violet-700 hover:border-violet-700 rounded'>
                    All Apps
                  </Button>

                  <Button className='flex-1 w-32 h-12 bg-green-500 hover:bg-red-500 text-white font-bold border-b-4 border-red-700 hover:border-red-700 rounded'>
                    Logout
                  </Button>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <Button className=' w-32 h-12 bg-green-500 hover:bg-red-500 text-white font-bold border-b-4 border-red-700 hover:border-red-700 rounded'>
              Sign in
            </Button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
