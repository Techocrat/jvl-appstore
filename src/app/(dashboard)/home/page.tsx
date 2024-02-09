import Navbar from '@/components/Navbar'
import { getSession } from '@/lib/auth'

const page = async () => {
  const session = await getSession()
  return (
    <>
    <Navbar />
    <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
      { session?.user?.username ? ( <h1 className='text-4xl font-bold'>Welcome {session?.user?.username} !!</h1> ) : (<h1 className='text-4xl font-bold'>Please sign in to continue!!</h1>) }  
    </div>
    </>
  )
}
export default page
