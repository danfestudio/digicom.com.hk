import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { Info, X } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppSelector } from '@/redux/store'

function CreateFolderModal({ showModal, setShowModal, getMedia }: { showModal: any, setShowModal: any, getMedia: any }) {

    const selectedFolder = useAppSelector((state) => state.mediaSlice.selectedFolder)

    const [folderName, setFoldername] = useState<string>()

    const addFolder = async () => {
        try {
            let result = await axios.post('media/folder', {
                folder_name: folderName,
                folder: selectedFolder._id,
            })

            if (result.data.success) {
                toast.success(`${folderName} Added Successfully`)
                getMedia()
                setShowModal(false)
            }

        } catch (ERR: any) {
            toast.error(ERR.response.data.message)
            console.log(ERR)
        }
    }

    return (
        <Modal showModal={showModal} setShowModal={setShowModal} classname='max-w-md'>
            <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                <X size={20} />
            </button>
            <div className='flex flex-col '>
                <h1 className='font-semibold text-xl'>Create Folder</h1>

                <div className='mt-4'>
                    {
                        selectedFolder &&
                        <div className='flex items-center justify-center gap-2 text-sm bg-blue-800 rounded p-1 mb-3 text-center text-white'> <Info size={15} /> Folder will be created inside {selectedFolder.folder_name}</div>
                    }
                    <label className='font-semibold text-sm opacity-60'>Folder Name</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFoldername(e.target.value)
                    }} type='text' required className='inputfield mt-2' />

                    <div className='flex gap-2 mt-2 justify-end'>
                        <button className='btn-primary text-sm' onClick={() => {
                            addFolder()
                        }}>Create</button>
                        <button className='btn-danger text-sm' onClick={() => {
                            setShowModal(false)
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CreateFolderModal