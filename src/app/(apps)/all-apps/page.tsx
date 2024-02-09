import Card from '@/components/Card'
import RedirectToLogin from '@/components/RedirectToLogin'
import Navbar from '@/components/navbar'
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
        <RedirectToLogin />
      )}
    </>
  )
}

export default page
