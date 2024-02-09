import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-emerald-100'>
      <h1 className='text-4xl font-bold'>Welcome {session?.user?.username}</h1>
    </div>
  )
}
export default page
