import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import { getAllApps } from '@/database'
import { getSession } from '@/lib/auth'

const page = async () => {
  const allApps = await getAllApps()
  const session = await getSession()
  return (
    <>
      <Navbar />
      {session?.user ? (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allApps?.map(app => {
            return (
              <Card
                id={app?.id}
                appname={app?.name}
                description={app?.description}
                appurl={app?.app_url}
                organization={app?.organization}
              />
            )
          })}
        </div>
        </div>
      ) : (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
            <span className='text-4xl font-bold'> You are not authorized to view this page !!  </span>
            </div>
      )}
    </>
  )
}

export default page
