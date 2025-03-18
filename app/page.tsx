import PartnerHighlites from '@/app/component/homepage/Partnerhightlite'
import HeaderSlide from './component/homepage/Homeprofileslide'
import Image from 'next/image'
import ClientList from './component/homepage/clients'
import { Announcements } from './component/homepage/announcements'

function Homepage() {
  const isLoaded = true
  return (
    <div>
      <HeaderSlide />
      <PartnerHighlites />
      <ClientList />
      <section className={`py-20 bg-slate-100 mt-4 ${isLoaded ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-black text-3xl font-bold text-center mb-12"><span className="text-main">M</span>essage From CEO</h2>
      <div className=" md:flex-col justify-between items-center align-items-middle py-8">
        <div className='flex w-1/2 justify-end'>
        <Image src="/user.png" alt='Ceo image' width={100} height={100}/>
        </div>
        <div className='p-4 py-8'>
          <p className='text-black font-serif flex relative'>
          Welcome to Shenzor, a leader in pipeline inspection with 10 years of expertise in Riyadh. We ensure
           pipeline integrity through cutting-edge technology and precise inspections. Committed to 
          safety, efficiency, and reliability, Shenzor delivers trusted solutions to protect critical assets. 
          Thank you for choosing us.
           </p>
        </div>
      </div>
    </div>
  </section>
  <Announcements />
    </div>
  )
}

export default Homepage
