import { BadgeHelp, Headphones, LucideProps, ScrollText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Support() {

  const iconstyles: LucideProps = {
    size: 80,
    strokeWidth: "1px",
  }

  const items = [
    {
      name: "Customer Support",
      description: "Contact us via email, and phone call",
      link: "/customersupport",
      img: '/support/Headset.png'
    },
    {
      name: "Warranty",
      description: "Local warranty policy protection is provided ",
      link: "/warranty",
      img: '/support/Protect.png'
    },
    {
      name: "User Guides",
      description: "Find and Download Your Digicom Product's User Guides",
      link: "/userguides",
      img: '/support/Document.png'
    },
    {
      name: "FAQs",
      description: "Search for help about Digicom",
      link: "/faqs",
      img: '/support/FAQ.png'
    },
  ]

  return (
    <div className='pb-32 px-3 container mx-auto'>
      <div className='flex justify-center items-center mb-10'>
        <label className='font-bold text-3xl text-center'>Support</label>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
        {
          items.map((value: any, index: number) => (
            <Link href={value?.link} key={index} className='flex flex-col items-center gap-5 bg-white p-5 rounded-3xl'>
              <div className='text-gray-400'>
                <Image alt={value.name} src={value?.img} height={80} width={80} priority />
              </div>
              <div className='font-bold sm:text-xl'>{value.name}</div>
              <div className='text-gray-500 text-sm sm:text-base font-semibold'>{value.description}</div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Support