import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Oops! The page you are looking for does not exist.
                            </h1>
                            <p className="my-5 mb-10 text-gray-800">It might have been moved or deleted. Please check the URL and try again. </p>
                            <Link href="/" className="border p-3 mt-5 bg-green-700 rounded shadow text-white font-semibold">
                                Return Home
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="notfound.png" />
            </div>
        </div>
    )
}