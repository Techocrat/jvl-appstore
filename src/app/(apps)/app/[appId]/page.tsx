import Navbar from '@/components/Navbar'
import { getApp } from '@/database'
import { getSession } from '@/lib/auth'

const page = async ({ params }: { params: { appId: number } }) => {
  const session = await getSession()
  const app = await getApp(params.appId)
  return (
    <>
      <Navbar />
      {session?.user ? (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
          <iframe
            src={app?.app_url}
            className='w-screen h-screen'
            frameBorder='0'
            scrolling='auto'
          />
        </div>
      ) : (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
          <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
            <span className='text-4xl font-bold'>
              {' '}
              You are not authorized to view this page !!{' '}
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default page
