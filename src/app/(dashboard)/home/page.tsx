import Navbar from "@/components/navbar"
import { getUsers } from "@/database"
import { getSession } from "@/lib/auth"

const page = async () => {
  const session = await getSession()
  const user = await getUsers()
  console.log('user', user)
  return (
    <>
    <Navbar />
    <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
       <h1 className='text-4xl font-bold'>Welcome {session?.user?.username} !!</h1>
    </div>
    </>
  )
}
export default page
