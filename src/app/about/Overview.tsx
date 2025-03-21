import Image from 'next/image'
import React from 'react'

function Overview() {
  return (
    <section className='max-w-5xl mx-auto py-6 pb-20'>
      <div className='py-28  grid place-items-center p-5'>
        <div className='grid gap-20'>
          <h2 className='md:text-5xl text-3xl text-gray-700 font-semibold text-center'>Overview</h2>

          <div className=''>
            <Image alt='values' width={1900} height={1600} src={'/about/About-Overview.png'} className='mx-auto h-full' />
          </div>
        </div>
      </div>

      <div className='py-24 grid place-items-center'>

        <div className='grid text-gray-700 p-5'>
          <h3 className='md:text-4xl text-2xl font-semibold'>Global Reach:</h3>
          <p className='md:text-3xl text-xl mb-10 mt-3 leading-relaxed'>With a global presence and distribution network, Digicom serves
            clients across industries and geographies, delivering excellence
            wherever technology meets opportunity.</p>
          <p className='md:text-3xl text-xl mt-3 leading-relaxed'>Join us in embracing the future of technology with Digicom.
            Explore our website to discover more about our products, services,
            and commitment to innovation. Experience the difference with
            Digicom – where quality, innovation, and customer satisfaction
            converge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview