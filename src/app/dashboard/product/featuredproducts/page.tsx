
"use client"
import Skeleton from '@/app/components/SkeletonLoader/Skeleton'
import { Table } from '@/app/components/Table/Table'
import Title from '@/app/components/Title'
import { ArrowDown, ArrowLeft, ArrowUp, PenSquare, Plus, RefreshCcw, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import AddFeaturedCategoryModal from './AddFeaturedCategoryModal'
import axios from '../../../../axios/axios'
import toast from 'react-hot-toast'
import { ColumnDef } from '@tanstack/react-table'
import Swal from 'sweetalert2'
import AddFeaturedProductModal from './AddFeaturedProductModal'
import { debounce } from 'lodash'
import EditFeaturedCategoryModal from './EditFeaturedCategoryModal'
import { startLoading } from '@/redux/features/loaderSlice'
import { useDispatch } from 'react-redux'

function FeaturedProducts() {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [featuredCategoryLimit, setFeaturedCategoryLimit] = useState<number>(10)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [featuredCategoryPage, setFeaturedCategoryPage] = useState<number>(1)
  const [selectedCategory, setSelectedCategory] = useState<any>('')

  const [featuredCategories, setFeaturedCategories] = useState<any>([])

  const [addFeaturedCategoryModal, setAddFeaturedCategoryModal] = useState<boolean>(false)
  const [editFeaturedCategoryModal, setEditFeaturedCategoryModal] = useState<boolean>(false)

  const [addFeaturedProductModal, setAddFeaturedProductModal] = useState<boolean>(false)
  const [keyword, setKeyword] = useState()

  const getAllCategory = async () => {
    try {
      let result = await axios.get('featured-product/', {
        params: {
          limit: featuredCategoryLimit,
          page: featuredCategoryPage,
          search: keyword
        }
      })
      if (result.data.success) {
        setFeaturedCategories(result.data.data.data)
        setTotalPages(result.data.data.totalPage)
      }
    } catch (ERR) {
      toast.error('Failed to Fetch Categories')
      console.log(ERR)
    }
  }

  const makeActive = async (data: any) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          let result = await axios.put('featured-product/' + data._id, {
            is_active: data.is_active === true ? false : true
          })
          if (result.data.success) {
            getAllCategory()
          }
        }
      })


    } catch (ERR) {
      console.log(ERR)
    }
  }
  const handleInputChangeDebounced = debounce((value) => {
    setKeyword(value)
  }, 800);

  useEffect(() => {
    getAllCategory()
  }, [featuredCategoryPage, featuredCategoryLimit, keyword])


  type Item = {
    _id: string;
    feature_name: string;
    createdAt: Date;
    startDate: Date;
    endDate: Date;
    content: any;
    is_active: boolean;
    original: any
  }

  const deleteCategory = async (id: string) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          let result = await axios.delete('featured-product/' + id)
          if (result.data.success) {
            getAllCategory()
          }
        }
      })


    } catch (ERR) {
      console.log(ERR)
    }
  }

  const movePlace = async (value: any, place: number) => {
    try {
      setIsLoading(true)
      let result = await axios.put('featured-product/update-category-order/' + value?._id, {
        order: place,
      })
      if (result.data.success) {
        setIsLoading(false)
        toast.success('Position Changed Successfully')
        getAllCategory()
      }

    } catch (ERR) {
      setIsLoading(false)
      console.log(ERR)
    }
  }

  const cols = useMemo<ColumnDef<Item>[]>(
    () => [
      {
        header: 'Order Action',
        cell: (row) => (
          <div className='flex gap-2'>
            <button title='Move Down' className='btn-outline !p-1' onClick={() => movePlace(row.cell.row.original, 1)}>
              <ArrowDown size={16} />
            </button>
            <button title='Move Up' className='btn-outline !p-1' onClick={() => movePlace(row.cell.row.original, -1)}>
              <ArrowUp size={16} />
            </button>
          </div >
        ),
      },
      {
        header: 'Category Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'feature_name',
      },
      {
        header: 'Products',
        cell: (row) => row.renderValue(),
        accessorKey: 'products',
      },
      {
        header: 'order',
        cell: (row) => row.renderValue(),
        accessorKey: 'order',
      },
      {
        header: 'Status',
        cell: (row) => (
          <div className='flex gap-2'>
            {
              row.cell.row.original?.is_active === true
                ?
                <label className='btn-success hover:shadow-none'>Active</label>
                :
                <label className='btn-danger hover:shadow-none'>InActive</label>
            }
          </div >
        ),
      },
      {
        header: 'Actions',
        cell: (row) => (
          <div className='flex gap-2 overflow-auto'>
            <button
              title='Edit'
              className='btn-primary !p-2'
              onClick={() => {
                setEditFeaturedCategoryModal(true)
                setSelectedCategory(row.cell.row.original)
              }}
            ><PenSquare size={16} /></button>
            <button title='Status Change' className='btn-success !p-2' onClick={() => makeActive(row.cell.row.original)}>
              <RefreshCcw size={16} />
            </button>
            <button title='Add Featured Products' className='btn-primary !p-2' onClick={() => {
              setAddFeaturedProductModal(true)
              setSelectedCategory(row.cell.row.original)
            }}>
              <Plus size={16} />
            </button>
            <button title='Delete' className='btn-danger !p-2' onClick={() => deleteCategory(row.cell.row.original._id)}>
              <Trash2 size={16} />
            </button>

          </div >
        ),
      },
    ],
    []
  );

  return (
    <div className='rounded p-4 mx-auto'>

      {
        addFeaturedCategoryModal &&
        <AddFeaturedCategoryModal setShowModal={setAddFeaturedCategoryModal} showModal={addFeaturedCategoryModal} getAllCategory={getAllCategory} />
      }
      {
        editFeaturedCategoryModal &&
        <EditFeaturedCategoryModal setShowModal={setEditFeaturedCategoryModal} showModal={editFeaturedCategoryModal} getAllCategory={getAllCategory} categoryData={selectedCategory} />
      }

      {
        addFeaturedProductModal &&
        <AddFeaturedProductModal selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setShowModal={setAddFeaturedProductModal} showModal={addFeaturedProductModal} getAllCategory={getAllCategory} />
      }

      <Link href={'/dashboard/product'} className=' flex items-center gap-3 btn-outline w-fit text-xs font-semibold'><ArrowLeft size={16} />Go Back</Link>
      <div className='mb-4 flex justify-between items-center text-center flex-wrap mt-5'>
        <Title title='Featured Product'></Title>
      </div>
      <hr className='mb-4' />
      <div className='flex gap-2 items-center card mb-5 justify-between'>
        <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
          handleInputChangeDebounced(e.target.value)
        }} placeholder='Search Featured Category' />
        <button className='btn-primary min-w-max text-sm' onClick={() => {
          setAddFeaturedCategoryModal(true)
        }}>Add Featured Category</button>
      </div>

      {
        isLoading ?
          <Skeleton />
          :
          <div className='card'>
            {
              featuredCategories.length === 0 ?
                <div className='px-5 pb-4'>
                  <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                </div>
                :
                <div className=''>
                  <Table data={featuredCategories} columns={cols} showFooter limit={featuredCategoryLimit} totalPage={totalPages} setlimit={setFeaturedCategoryLimit} page={featuredCategoryPage} setPage={setFeaturedCategoryPage} />
                </div>
            }
          </div>
      }
    </div>
  )
}

export default FeaturedProducts