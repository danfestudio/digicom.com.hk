'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])

  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="relative">
          <div className="">
            <h1 className="mb-10 text-gray-800 font-bold text-2xl">
              Oops! Something went wrong!
            </h1>
            {/* <p className="my-5 mb-10 text-gray-800">Sorry about that! It might have been moved or deleted. Please check the URL and try again. </p> */}
            <Link href="/" className="border p-3 mt-5 bg-green-700 rounded shadow text-white font-semibold">
              Return Home
            </Link>
          </div>

        </div>
        <div>
          <img className='h-52 object-contain' src="/erroricon.png" />
        </div>
      </div>
      {/* <h2>Something went wrong!</h2>
        <button
          onClick={
            () => reset()
          }
        >
          Try again
        </button> */}
    </div>
  )
}