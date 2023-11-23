import React from 'react'

import { useFormik } from "formik";
import * as Yup from "yup";

const Form001 = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("Required!"),
            lastName: Yup.string()
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div className='form-004 border-none px-2 py-20 rounded-lg'>
            <div className="w-full max-w-sm p-4  rounded-full shadow sm:p-6 md:p-8 ">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <h3 className="text-2xl font-medium text-white">Create New Acount</h3>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 end-1 flex items-center ps-3.5 pointer-events-none">
                            </div>
                            <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} id="email" className="bg-gray  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="first name..." />
                            {formik.errors.firstName && formik.touched.firstName && (
                                <p className='text-red_b10000'>{formik.errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} id="email" className="bg-gray  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="last name..." />
                            {formik.errors.lastName && formik.touched.lastName && (
                                <p className='text-red_b10000'>{formik.errors.lastName}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} id="email" className="bg-gray  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email..." />
                        {formik.errors.email && formik.touched.email && (
                            <p className='text-red_b10000'>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} id="password" placeholder="••••••••" className="bg-gray  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {formik.errors.password && formik.touched.password && (
                            <p className='text-red_b10000'>{formik.errors.password}</p>
                        )}
                    </div>
        
                    <div className='grid md:grid-cols-2 gap-3'>
                    <button type="submit" className="w-full text-white bg-gray hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Method</button>
                    <button type="submit" className="w-full text-white bg-bluer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                    </div>
               
                </form>
            </div>
        </div>
    )
}

export default Form001