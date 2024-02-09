import Card from '@/components/Card'
import RedirectToLogin from '@/components/RedirectToLogin'
import Navbar from '@/components/navbar'
import { getUsersApp } from '@/database'
import { getSession } from '@/lib/auth'

const page = async () => {
  const session = await getSession()
  const userId = BigInt(session?.user?.id || 0);
  const usersApp = await getUsersApp(userId)
  
  return (
    <>
      <Navbar />
      {session?.user ? (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
          {usersApp?.map(app => {
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
      ) : (
        <RedirectToLogin />
      )}
    </>
  )
}

export default page
