import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const startCount = [1,2,3,4,5];

const schema = yup.object({
    name: yup.string().required('Vui lòng nhập tên của bạn'),
    phoneNumber: yup.number().required('Vui lòng nhập số điện thoại của bạn').positive().integer(),
    email: yup.string().email('Nhập đúng định dạng email').required('Vui lòng nhập email của bạn'),
}).required();
type FormData = yup.InferType<typeof schema>;

const Review = () => {

    const [start, setStart] = useState(1)

    const handleRating = (count: number) => {
        setStart(count)
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: FormData) => console.log(data);
    return (
        <div>
            <div className="raiting flex gap-2 items-center pb-3">
                <p>Mời bạn đánh giá</p>
                <div className="flex items-center">
                    {
                        startCount.map((item : number) => (
                            <svg key={item} onClick={() =>handleRating(item)} className={`w-4 h-4 ${start >= item ? 'text-primary' : ''}  ms-1 cursor-pointer`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))    
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-2 md:grid-cols-1">
                    <div>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray_ddd   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  da" placeholder="Nội dung tiếng việt có dấu ..."></textarea>                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-7 pt-2">
                    <div className="col-span-6 gap-6 grid md:grid-cols-3">
                        <div>
                            <input type="text" {...register("name")} id="first_name" className="bg-gray-50 border border-gray_ddd text-gray-900 text-sm rounded-sm   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  da" placeholder="Tên"  />
                            <p className="mt-2 text-sm text-red_b10000"><span className="font-medium">{errors.name?.message}</span></p>
                        </div>
                        <div>
                            <input type="text" {...register("email")} id="first_name" className="bg-gray-50 border border-gray_ddd text-gray-900 text-sm rounded-sm   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  da" placeholder="Email"  />
                            <p className="mt-2 text-sm text-red_b10000"><span className="font-medium">{errors.email?.message}</span></p>
                        </div>
                        <div>
                            <input type="text" {...register("phoneNumber")} id="first_name" className="bg-gray-50 border border-gray_ddd text-gray-900 text-sm rounded-sm   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  da" placeholder="Số điện thoại"  />
                            <p className="mt-2 text-sm text-red_b10000"><span className="font-medium">{errors.phoneNumber?.message}</span></p>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value='Đánh giá' className="text-white mx-auto cursor-pointer bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Review