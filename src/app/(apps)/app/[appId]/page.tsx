import Card from '@/components/Card'
import Navbar from '@/components/navbar'
import { getAllApps, getApp } from '@/database'

const page = async ({ params }: { params: { appId: number } }) => {
  const app = await getApp(params.appId);

  console.log('allApps', app)
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
      <iframe
            src={app?.app_url}
            className='w-screen h-screen'
            frameBorder="0"
            scrolling="auto"
          />
      </div>
    </>
  )
}

export default page
