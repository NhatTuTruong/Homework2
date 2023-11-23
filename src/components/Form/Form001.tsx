import React from 'react'

import { useFormik } from "formik";
import * as Yup from "yup";

const Form001 = () => {
    const formik = useFormik({
        initialValues: {
          full_name: "",
          email: "",
          password: "",
          confirm_password: ""
        },
        validationSchema: Yup.object({
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
        <div className='form-001 border-none px-2 py-20 rounded-lg'>
              <div className="w-full max-w-sm p-4 backdrop-blur-sm bg-white/30  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up</h5>
                    <div>
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"  />
                        {formik.errors.email && formik.touched.email && (
                            <p className='text-red_b10000'>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                        {formik.errors.password && formik.touched.password && (
                            <p className='text-red_b10000'>{formik.errors.password}</p>
                        )}
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form001