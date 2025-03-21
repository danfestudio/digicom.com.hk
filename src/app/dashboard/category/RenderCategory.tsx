import { setSelectedCategory } from '@/redux/features/categorySlice';
import { useAppSelector } from '@/redux/store';
import { ChevronDown, ChevronUp, Edit, Minus, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function RenderCategory({ category, deleteCategory, setShowEditModal, onClick, expandedChildCategory, setExpandedChildCategory, showModal, setShowModal, getAllCategory }: {
    category: any, deleteCategory: any, setShowEditModal: any, onClick?: any, expandedChildCategory: string, setExpandedChildCategory: any, showModal: any, setShowModal: any, getAllCategory: any
}) {

    const dispatch = useDispatch()
    const selectedCategory = useAppSelector((state) => state.categorySlice.value)

    const [isExpanded, setIsExpanded] = useState(false);
    const collapse = () => {
        dispatch(setSelectedCategory(""))
        setIsExpanded(false);
    }

    const expand = () => {
        setIsExpanded(true);
    }

    const handleAddCategory = () => {
        dispatch(setSelectedCategory(category))
        setShowModal(true)
    }

    return (
        <>
            <div className={` `}>
                <div className='flex items-center gap-2 group relative  ml-2'>
                    {
                        isExpanded ?
                            <button className={` ${category.children.length > 0 ? "border bg-blue-200 z-0 rounded-full p-1" : "hidden"}`} onClick={() => {
                                collapse()
                            }}><ChevronUp size={14} /></button>
                            :
                            <button className={` ${category.children.length > 0 ? "border bg-white z-0 rounded-full p-1" : "hidden"}`} onClick={() => {
                                expand()
                            }}><ChevronDown size={14} /></button>
                    }

                    <div className='flex items-center gap-4 group'>
                        <span className='pl-2 py-2'
                            // onClick={handleClick}
                            style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {category.name}
                            <label className='text-xs ml-1 text-gray-400'>{`(${category.children.length})`}</label>
                        </span>
                        <button className='text-xs hover:scale-105 transition-all duration-100 ease-linear text-green-600 font-semibold group-hover:block hidden' onClick={() => {
                            handleAddCategory()
                        }}>
                            Add Child
                        </button>
                        <button className='text-xs hover:scale-105 transition-all duration-100 ease-linear text-blue-500 group-hover:block hidden' onClick={() => {
                            dispatch(setSelectedCategory(category))
                            setShowEditModal(true)
                        }}>
                            <Edit size={12} />
                        </button>
                        <button className='text-xs hover:scale-105 transition-all duration-100 ease-linear text-red-500 group-hover:block hidden' onClick={() => {
                            dispatch(setSelectedCategory(category))
                            deleteCategory(category)
                        }}>
                            <Trash2 size={12} />
                        </button>
                    </div>
                </div>

                {category.children.length > 0 && isExpanded && (
                    <div className='flex flex-col ml-5 rounded-bl-lg border-b border-l -mt-3 pt-3.5 mb-5 pb-4'>

                        {category.children.map((child: any, index: number) => (
                            <div key={index} className={`relative  ${isExpanded === true ? "ml-8" : "ml-5"}`}>
                                {/* <div className='absolute h-10 -top-5 left-1 rounded-bl-lg w-6 border-l border-b'></div> */}
                                <RenderCategory
                                    deleteCategory={deleteCategory}
                                    key={child._id}
                                    category={child}
                                    // onClick={handleClick}
                                    expandedChildCategory={expandedChildCategory}
                                    setExpandedChildCategory={setExpandedChildCategory}
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    setShowEditModal={setShowEditModal}
                                    getAllCategory={getAllCategory}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default RenderCategory