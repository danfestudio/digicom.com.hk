import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { Info, X } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppSelector } from '@/redux/store'

function EditFolderModal({ showModal, setShowModal, getMedia, folderForEdit }: { showModal: any, setShowModal: any, getMedia: any, folderForEdit: any }) {

    const selectedFolder = useAppSelector((state) => state.mediaSlice.selectedFolder)

    const [folderName, setFoldername] = useState<string>(folderForEdit?.folder_name)

    const addFolder = async () => {
        try {
            let result = await axios.put('media/folder/' + folderForEdit?._id, {
                folder_name: folderName,
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
                <h1 className='font-semibold text-xl'>Edit Folder</h1>

                <div className='mt-4'>

                    <label className='font-semibold text-sm opacity-60'>Folder Name</label>
                    <input value={folderName} onChange={(e: ChangeEvent<HTMLInputElement>) => {
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

export default EditFolderModal