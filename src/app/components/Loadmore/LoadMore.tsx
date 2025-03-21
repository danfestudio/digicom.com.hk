import { ChevronDown, Loader } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

function LoadMore({ page, setPage, totalPage, loading, setLoading }: { page: number, setPage: Dispatch<SetStateAction<number>>, totalPage: number, loading: boolean, setLoading: Dispatch<SetStateAction<boolean>> }) {
    return (
        <>
            {
                (page !== totalPage || loading) &&
                <div className='my-10 flex items-center text-center justify-center w-full' >
                    <button className='items-center flex gap-3 bg-green-600 p-3 rounded-md px-4 text-sm text-white font-semibold' onClick={() => {
                        setPage(page + 1)
                        setLoading(true)
                    }}> <span>{!loading ? <ChevronDown /> : <Loader className='animate-spin' />} </span> Load More</button>
                </div>
            }
        </>
    )
}

export default LoadMore