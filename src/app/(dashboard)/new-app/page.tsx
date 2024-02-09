import NewAppForm from '@/components/form/NewAppForm'
import Navbar from '@/components/Navbar'
import { getSession } from '@/lib/auth'


const page = async () => {
  const session = await getSession()
  return (
    <>
    <Navbar />
      {session?.user?.role === 'developer' ? (
        <div>
          <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
            <NewAppForm />
          </div>
        </div>
      ) : (
        <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
           <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
            <span className='text-4xl font-bold'> You are not authorized to view this page !!  </span>
            </div>
          </div>
      )}
    </>
  )
}

export default page
