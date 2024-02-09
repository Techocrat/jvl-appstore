import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <div
      className='
      flex 
      min-h-screen
      flex-col 
      justify-center
      px-6
      py-6 
      sm:px-6 
      lg:px-0
      lg:py-0
      sm:py-6
      bg-emerald-100
    '
    >
      <div className='lg:w-full lg:flex lg:flex-row justify gap-12 lg:h-screen '>
        <div className='lg:bg-emerald-700 lg:flex lg:flex-col lg:justify-center lg:w-1/3'>
          <Image
            height='16'
            width='16'
            className='mx-auto w-48 h-48'
            src='/logo.svg'
            alt='Logo'
          />
          <h2
            className='
                mt-6 
                text-center 
                text-4xl 
                font-bold 
                tracking-tight 
                text-white
              '
          >
            APPSTORE
          </h2>
        </div>

        <div className='lg:flex lg:flex-col lg:justify-center lg:w-2/3 '>
          <h2
            className='
              mt-6 
              text-center 
              text-3xl 
              font-bold 
              tracking-tight 
              text-emerald-700
            '
          >
            Welcome to Appstore
          </h2>
          <div className='flex justify-center mt-6'>
            <Link href='/sign-in'>
            <Button variant="outline" className='w-32 bg-emerald-600  hover:bg-emerald-700 text-white'>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
