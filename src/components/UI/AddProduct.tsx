
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'


interface Product {
	title: string;
	price: number;
	description: string;
	categoryId: number;
	images: string[];
}


function AddProduct() {

	const queryClient = useQueryClient()

  const [inputs, setInput] = useState({
		title: '',
		price: 0,
		description: '',
		categoryId: 1,
		images: ''
	})


	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'checkbox') {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setInput((values) => ({ ...values, [target.name]: target.checked }));
    } else {
      const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement; // Kiểm tra kiểu
      setInput((values) => ({ ...values, [target.name]: target.value }));
    }
  };
	const postProduct = (newProduct: Product) =>
		fetch('https://api.escuelajs.co/api/v1/products/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newProduct),
		}).then((response) => response.json())

	// Mutations
	const addProductMutation = useMutation({
		mutationFn: postProduct,
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})

	const handleAddProduct = (event) => {
		event.preventDefault();
		console.log('Current Values:', inputs);
		
		// addProductMutation.mutate({
		// 	title: 'New Product 3',
		// 	price: 480,
		// 	description: 'A description',
		// 	categoryId: 1,
		// 	images: ["https://placeimg.com/640/480/any"]
		// });
	};

	return (
		<div>
			<button disabled={addProductMutation.isLoading} onClick={handleAddProduct}>
				{addProductMutation.isLoading ? <span>Adding Product...</span> : <span>Add Product</span>}
			</button>
			<form onSubmit={handleAddProduct}>
				<label>
					Enter your title:
					<input type="text" name="title" value={inputs.title} onChange={handleChange} />
				</label>
				<label>
					Enter your title:
					<input type="text" name="price" value={inputs.price} onChange={handleChange} />
				</label>
				<br />
				<label>
					Enter your description:
					<input type="text" name="description" value={inputs.description} onChange={handleChange} />
				</label>
				<label>
					Enter your price:
					<input type="text" name="passwords" value={inputs.price} onChange={handleChange} />
				</label>
				<label>
					Enter your categoryId:
					<input type="text" name="categoryId" value={inputs.categoryId} onChange={handleChange} />
				</label>
				<label>
					Enter your price:
					<input type="text" name="images" value={inputs.images} onChange={handleChange} />
				</label>
				<input type="submit" value="Nhận" />
			</form>
			{addProductMutation.isSuccess && <span>Product added successfully!</span>}
			{addProductMutation.isError && <span>Failed to add Product.</span>}
		</div>
	);
}

export default AddProduct