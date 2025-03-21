"use client";
import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from '../../axios/axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { AppDispatch } from '@/redux/store';
import { setToken, setUserDetails } from '@/redux/features/authSlice';
import Link from 'next/link';

function Login() {
    const param = useSearchParams()

    const email = param.get('key')

    const initialValues = {
        email: "",
        password: "",
    }


    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const login = async (values: any) => {
        try {
            let result = await axios.post('user/login', values)
            if (result?.data?.success) {
                // if (result.data.user.role === "SUPERADMIN" || result.data.user.role === "ADMIN" || result.data.user.role === "SCHOOL") {
                toast.success('Welcome Admin ')
                typeof window !== 'undefined' && localStorage.setItem('_kh_token_', result.data.data.token)

                dispatch(setToken(JSON.stringify(result.data.data.token)))

                dispatch(setUserDetails(JSON.stringify(result.data.data)))

                typeof window !== 'undefined' && window.location.replace('/dashboard')
            } else {
                toast.error(result.data.message || "Failed to Login! Please check Email and Password")
            }
        } catch (ERR: any) {
            toast.error(ERR?.response?.data?.message || "Failed to Login! Please check Email and Password")
            console.log(ERR)
        }
    }



    return (
        <>
            {
                email === 'ap-7879' ?
                    <div className='grid place-items-center min-h-screen'>
                        <div className='max-w-md shadow w-full p-10 rounded-md'>
                            <span className='text-2xl font-bold'>Log In</span>
                            <div className='mt-5 text-sm'>
                                <Formik initialValues={initialValues}
                                    onSubmit={(values, action) => {
                                        login(values)
                                    }}
                                >
                                    {(props) => (
                                        <Form>
                                            <div className=' flex flex-col mb-5 '>
                                                <label className=' font-bold'>Email</label>
                                                <Field
                                                    required
                                                    className="rounded border bg-gray-50 p-3 focus:outline-none mt-2"
                                                    name='email'
                                                    id='email'
                                                    placeholder='Your Email'
                                                />
                                            </div>

                                            <div className=' flex flex-col mb-5 '>
                                                <label className=' font-bold'>Password</label>
                                                <Field
                                                    type="password"
                                                    required
                                                    className="rounded border bg-gray-50 p-3 focus:outline-none mt-2"
                                                    name='password'
                                                    id='password'
                                                />
                                            </div>

                                            <button type='submit' className='bg-black text-white w-full p-3 font-bold'>
                                                Log In
                                            </button>
                                        </Form>
                                    )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div >
                    :
                    <div className="flex max-w-7xl mx-auto items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                        <div className="w-full lg:w-1/2">
                            <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                            <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                            <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 ">The Page Doesnot Exist</h1>
                            <p className="py-4 text-base text-gray-800 ">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                            <p className="py-2 text-base text-gray-800 ">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link href={'/'} className=" my-5 text-center lg:w-auto rounded-md  px-16 py-5 bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">Go back to Homepage</Link>
                        </div>
                    </div>

            }
        </>
    )
}

export default Login