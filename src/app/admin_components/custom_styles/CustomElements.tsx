import { XCircle } from 'lucide-react'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function CustomElements({ showElements, setShowElements, setSelectedElements, selectedElements }: {
  showElements: any, setShowElements: any, setSelectedElements: any, selectedElements: any
}) {

  const elementsRender = [
    {
      name: "text",
      image: "/text.png",
    },
    {
      name: "image",
      image: "/image.png",
    },
    // {
    //   name: "timeline",
    //   image: "",
    // },
  ]

  return (
    <div className='z-50 flex fixed min-h-screen  w-full border top-0 left-0'>
      <div className='bg-white w-full max-w-sm pb-4 h-screen overflow-auto'>
        <div className='flex w-full bg-white p-3 justify-between gap-5 sticky top-0 z-50 items-center'>
          <label className='font-semibold'>
            Elements
          </label>
          <button onClick={() => {
            setShowElements(false)
          }}><XCircle /> </button>
        </div>

        <div className='grid gap-5 mt-4 px-4 '>
          {
            elementsRender.map((value: any, index: number) => (
              <div role='button' key={index} onClick={() => {
                setSelectedElements([...selectedElements, {
                  ...value,
                  id: value.name + uuidv4(),
                  styles: {
                    1440: {
                    },
                    1024: {
                    },
                    768: {
                    },
                    425: {
                    },
                  }
                }])
                setShowElements(false)
              }} className='w-full hover:bg-blue-50 rounded overflow-hidden shadow  border-dashed flex items-center gap-4'>
                <img src={value.image} className='max-h-[60px]' />
                <span className='capitalize font-semibold opacity-70'>{value.name}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div role='button' onClick={() => {
        setShowElements(false)
      }} className='opacity-25 bg-gray-900 w-full min-h-screen '></div>

    </div >
  )
}

export default CustomElements