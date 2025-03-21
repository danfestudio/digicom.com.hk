"use client";
import axios from '../../axios/axios';
import { Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

function InvestorRelations() {

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
      .max(500, 'Please Limit Your Message to 500 Characters!')
      .required('Required'),
  });

  const addContact = async (values: any, actions: any) => {
    try {
      let result = await axios.post('/contact', values)
      if (result.data.success) {
        actions.resetForm()
        toast.success('Thankyou for reaching out, Your Message Has Been Delivered')
      } else toast.error("Failed")
    } catch (ERR) {
      console.log(ERR)
    }
  }

  return (
    <div className=' bg-white grid place-items-center'>
      <div className='h-40 grid place-items-center w-full text-white text-4xl bg-black text-center'>
        <h2>Investor/Dealership Inquiry</h2>
      </div>
      <div className='max-w-6xl w-full mx-auto p-20'>

        <div className=''>
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
              fullname: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, actions) => {
              // setFinalCategory(tempCategory)
              addContact(values, actions)
            }}>
            {(props) => (
              <Form className='grid gap-5'>
                <div className='grid md:grid-cols-10 xl:grid-cols-12 gap-4 items-center '>
                  <label className='font-semibold text-lg md:col-span-2 lg:col-span-1 xl:col-span-2 min-w-max  md:text-right'>Full Name</label>
                  <div className='xl:col-span-10  lg:col-span-8 md:col-span-7'>
                    <Field type='text' name="fullname" className='inputfield' />
                    {props.errors.fullname && props.touched.fullname ? <div className='text-red-600 text-right'>{props.errors.fullname}</div> : null}
                  </div>

                </div>
                <div className='grid md:grid-cols-10 xl:grid-cols-12 gap-4 items-center '>
                  <label className='font-semibold text-lg md:col-span-2 lg:col-span-1 xl:col-span-2 min-w-max  md:text-right'>Email</label>
                  <div className='xl:col-span-10  lg:col-span-8 md:col-span-7'>
                    <Field type='email' name="email" required className='inputfield ' />
                    {props.errors.email && props.touched.email ? <div className='text-red-600 text-right'>{props.errors.email}</div> : null}
                  </div>

                </div>
                <div className='grid md:grid-cols-10 xl:grid-cols-12 gap-4   '>
                  <label className='font-semibold text-lg md:col-span-2 lg:col-span-1 xl:col-span-2 min-w-max  md:text-right'>Message</label>
                  <div className='w-full xl:col-span-10  lg:col-span-8 md:col-span-7'>
                    <Field as='textarea' rows={8} name="message" required className='inputfield ' />
                    <div className='text-black text-right'>Max 500. characters</div>
                    {props.errors.message && props.touched.message ? <div className='text-red-600 text-right'>{props.errors.message}</div> : null}
                  </div>
                </div>
                <div className='grid md:grid-cols-10 xl:grid-cols-12 gap-4   '>
                  <label className='font-semibold text-lg md:col-span-2 lg:col-span-1 xl:col-span-2 min-w-max  md:text-right'></label>
                  <div className='w-full xl:col-span-10  lg:col-span-8 md:col-span-7'>
                    <button className='p-4 bg-gray-200 rounded-lg'>Send Inquiry</button>
                  </div>
                </div>

                <div>

                </div>
              </Form>
            )}

          </Formik>

        </div>
      </div>
    </div>
  )
}

export default InvestorRelations