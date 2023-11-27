import React from 'react'

import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
	username: string;
    password: string;
}

const Form001 = () => {

    const queryClient = useQueryClient()

    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .required("Required!"),
          password: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),
        }),
        onSubmit: values => {
             LoginMutation.mutate(values);
      
        console.log(LoginMutation);
        }
      });
      const postUser = (newProduct: User) =>
      fetch('https://training.softech.cloud/api/training/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      }).then((response) => response.json())

       // Mutations
  const LoginMutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
    })


    return (
        <div className='form-001 border-none px-2 py-20 rounded-lg'>
              <div className="w-full max-w-sm p-4 backdrop-blur-sm bg-white/30  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up</h5>
                    <div>
                        <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" placeholder="nhatbui"  />
                        {formik.errors.username && formik.touched.username && (
                            <p className='text-red_b10000'>{formik.errors.username}</p>
                        )}
                    </div>
                    <div>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"  />
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
                {LoginMutation.isSuccess && <span>Login successfully!</span>}
 
                {LoginMutation.isError && <span>Login Fail</span>}
            </div>
        </div>
    )
}

export default Form001