import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

	const schema = yup.object({
		name: yup.string().required('Vui lòng nhập tên của bạn'),
		phoneNumber: yup.number().required('Vui lòng nhập số điện thoại của bạn').positive().integer(),
		email: yup.string().email('Nhập đúng định dạng email').required('Vui lòng nhập email của bạn'),
	}).required();
type FormData = yup.InferType<typeof schema>;

const Subscribe = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: FormData) => console.log(data);
	return (
		<div className="description rounded-lg p-6" >
			<p className="mb-2 text-lg  text-gray ">Đăng ký</p>
			<div className='rounded-md bg-primary p-4'>
				<form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-5">
						<input {...register("name")} type="text" id="username-success" className="bg-green-50  text-green-900 placeholder-green-700 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Họ và tên" />
						<p className="mt-2 text-sm text-white"><span className="font-medium">{errors.name?.message}</span></p>
					</div>
					<div className="mb-5">
						<input {...register("phoneNumber")} type="text" id="username-error" className="bg-red-50  text-red-900 placeholder-red-700 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Số điện thoại" />
						<p className="mt-2 text-sm text-white"><span className="font-medium">{errors.phoneNumber?.message}</span></p>
					</div>
					<div className="mb-5">
						<input {...register("email")} type="text" id="username-error" className="bg-red-50  text-red-900 placeholder-red-700 text-sm rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Địa chỉ email" />
						<p className="mt-2 text-sm text-white"><span className="font-medium">{errors.email?.message}</span></p>
					</div>
					<div >
						<input type="submit" id="username-error" value="Subscribe email list" className="bg-gray  text-white text-2xl rounded-md cursor-pointer hover:bg-white hover:text-primary  block w-full p-2.5 mt-2" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Subscribe