import React from 'react'
import Overview from './Overview'
import History from './History'
import InvestorRelations from './InvestorRelations'
import Link from 'next/link'
import Image from 'next/image'

function Page() {

    return (
        <div>
            <div className=' grid place-items-center p-16 bg-black bg-opacity-80'>
                <h1 className='md:text-5xl text-3xl font-semibold text-white'>
                    About Us
                </h1>
                <div className='flex flex-wrap justify-center items-center gap-5 mt-10'>
                    <Link href={'/about#history'} className='py-3 bg-white font-semibold px-10 border rounded-lg'>History</Link>
                    <Link href={'/about#overview'} className='py-3 bg-white font-semibold px-10 border rounded-lg'>Overview</Link>
                    {/* <Link href={'/about#investor-relations'} className='py-3 bg-white font-semibold px-10 border rounded-lg'>Investor Relations</Link> */}
                </div>
            </div>

            <div className='bg-black p-10 py-28'>
                <Image alt='values' width={1020} height={200} src={'/about/WebsiteAboutUs-1.png'} className='mx-auto p-3' />
            </div>

            <div className='pt-20' id='history'><History /></div>
            <div className='pt-20' id='overview'><Overview /></div>
            {/* <div className='pt-20' id='investor-relations'><InvestorRelations /></div> */}
        </div>
    )
}

export default Page