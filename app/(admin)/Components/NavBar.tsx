import Link from "next/link"
import Image from "next/image"
import Shop from '@/Assets/shopping.png'
import Announancement from '@/Assets/announancements.png'
export default function NavBAr( {username}:{username:{name:string; role:string}} ) {
  return (
    <div className="flex justify-end px-8 pt-4 gap-8">
      {/**Icons */}
      <div className="flex items-center justify-center gap-4">
        <Link href='/messages'>
        <Image src={Shop} alt= 'Messages From User' width={24} height={24}/>
        </Link>
        <Link href='/messages'>
        <Image src={Announancement} alt= 'Announancements' width={24} height={24}/>
        </Link>
      </div>
      {/**user image Role*/}
      <div className="flex gap-2">
          <div className="flex flex-col">
              <span className="text-xsfont-medium">{username.name}</span>
              <p className="text-[10px] text-right text-gray-400">{username.role}</p>
          </div>
          <Image className="rounded-full " src='/user.png' alt="user" width={56} height={16}/>
      </div>
    </div>
  )
}
