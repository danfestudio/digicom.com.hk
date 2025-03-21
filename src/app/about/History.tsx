import Image from 'next/image'
import React from 'react'

function History() {
  return (
    <section className='max-w-5xl mx-auto text-gray-700'>

      <div className='mb-20'>
        <h2 className='md:text-5xl text-3xl font-semibold text-center'>History</h2>
        <p className='text-xl mt-10 text-gray-600'>Established in 1998, DIGICOM, headquartered in the vibrant city of Hong Kong, stands as a trailblazer
          in the technology industry. With a rich history spanning over two decades, we have evolved into a
          comprehensive provider of cutting-edge networking solutions, consumer electronics, and popular
          household appliances.</p>
      </div>
      <div className='mt-20'>
        <h2 className='md:text-5xl text-3xl font-semibold text-center'>Our Values</h2>

        <div className='grid md:grid-cols-2 gap-10 items-center  md:py-20 py-10'>
          <div className=''>
            <Image alt='values' width={400} height={600} src={'/about/WebsiteAboutUs-2.png'} className='mx-auto md:h-96' />
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>We are authentic</h3>
            <p className='text-xl font-light mt-3'>We are a company of honest individuals who
              believe extraordinary outcomes are the result
              of uncommon and inquisitive thinking and
              open collaboration.</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 items-center  md:py-20 py-10'>
          <div>
            <h3 className='text-3xl font-semibold'>We are about trust</h3>
            <p className='text-xl font-light mt-3'>We inspire confidence in colleagues,
              customers and partners by always acting
              with integrity, fairness, respect, and reliability.</p>
          </div>
          <div className=''>
            <Image alt='values' width={400} height={600} src={'/about/WebsiteAboutUs-3.png'} className='mx-auto' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 items-center  md:py-20 py-10'>
          <div className=''>
            <Image alt='values' width={400} height={600} src={'/about/WebsiteAboutUs-3-1.png'} className='mx-auto' />
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>We deliver excellence</h3>
            <p className='text-xl font-light mt-3'>We are driven by our craft. We pride
              ourselves on executioner excellence,
              measurably delivering beyond expectations.
            </p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 items-center  md:py-20 py-10'>
          <div>
            <h3 className='text-3xl font-semibold'>We make a meaningful difference</h3>
            <p className='text-xl font-light mt-3'>We deliver the greatest net positive
              impact for all customers, partners, and
              shareholders. We take accountability for
              driving to a positive purpose.
            </p>
          </div>
          <div className=''>
            <Image alt='values' width={400} height={600} src={'/about/WebsiteAboutUs-4.png'} className='mx-auto' />
          </div>
        </div>

        <p className='text-xl font-light mt-3'>We at Digicom are guided by the vision -
          <b>
            “To provide consumer with high quality products
            and services at an affordable price with reliability
            and innovative technology”
          </b>
        </p>
      </div>
    </section>
  )
}

export default History