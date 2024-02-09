
import RedirectToLogin from '@/components/RedirectToLogin'
import NewAppForm from '@/components/form/NewAppForm'
import Navbar from '@/components/navbar'
import { getSession } from '@/lib/auth'


const page = async () => {
  const session = await getSession()
  return (
    <>
      {session?.user ? (
        <div>
          <Navbar />
          <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
            <NewAppForm />
          </div>
        </div>
      ) : (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
           <RedirectToLogin />
          </div>
      )}
    </>
  )
}

export default page
