import React, { useState, KeyboardEvent } from 'react'

function Modal({ children, showModal, setShowModal, classname, onClose }: {
  children: any,
  showModal: any,
  classname?: any,
  setShowModal: any,
  onClose?: any,
}) {

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      handleCloseAction()
    }
  };

  const [closeModal, setCloseModal] = useState<boolean>(false)

  const handleCloseAction = () => {
    setShowModal(false)
    if (onClose) {
      onClose()
    }

    setTimeout(() => {
      setCloseModal(true)
    }, 300)
  }

  return (
    <div
      onKeyDown={handleKeyPress}
      tabIndex={0}
      className={`relative ease-in-out duration-300 z-50 ${closeModal ? 'hidden' : ""} ${showModal ? 'opacity-100' : "opacity-0"}  `}
      role="dialog"
      aria-modal="true">
      <div
        role='button'
        onClick={() => {
          handleCloseAction()
        }}
        className="fixed cursor-default inset-0 bg-black bg-opacity-60 transition-opacity text-left shadow-xl" />

      <div className={`fixed transition-all  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-h-screen overflow-auto mx-auto ${classname} w-full bg-white p-8 rounded`}>
        {/* <div className={` ${showModal ? 'w-full  opacity-100 translate-y-0 sm:scale-100' : "translate-y-4 sm:translate-y-0 sm:scale-95 opacity-100"} ${classname} relative transform rounded-md text-left bg-white p-4 transition-all mx-auto `}> */}
        {children}
        {/* </div> */}
      </div>

    </div>
  )
}

export default Modal