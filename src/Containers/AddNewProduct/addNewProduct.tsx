import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { addNewProduct } from "../../Services/Product";
import { data } from "autoprefixer";
import { render } from "react-dom";
import { storage } from "../../Services/FireBase";



interface IFormInputs {
    ProductName: string
    ProductDescription: string
    ProductPrice: number
    ProductQuantity: number
    ProductImage: File | string
}

const schema = yup.object({
    ProductName: yup.string().required().min(6, 'Product Name must be at least 6 characters')
        .max(40, 'Product Name must not exceed 40 characters'),
    ProductDescription: yup.string().required().min(6, 'Product Description must be at least 6 characters')
        .max(200, 'Product Description must not exceed 40 characters'),
    ProductPrice: yup.number().positive().required().max(10000000),
    ProductQuantity: yup.number().positive().integer().required().max(100000),
    ProductImage: yup.mixed().test("fileSize", "The file is too large", (value) => {
        if (!value.length) return true 
        return value[0].size <= 2000000
    }),
}).required();


var fileType = new File([''], '', {
    type: 'image'
});

function AddNewProduct() {

    const [image, setImage] = useState<File>(fileType);

    let  today 		= new Date();
	let  dd 		= String(today.getDate()).padStart(2, '0');
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); 
	let  yyyy 		= today.getFullYear();
    let date =` ${yyyy}-${mm}-${dd}`;

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });



    const onSubmit = async (data: IFormInputs) => {
        console.log(data.ProductName)
        let productobj = {
            "product_name": data.ProductName,
            "price": data.ProductPrice,
            "quantity": data.ProductQuantity,
            "last_updated": date,
            "productDescription": data.ProductDescription,
            "productImage": ""
        }

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        await uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        productobj.productImage = url;
                        // console.log(productobj);

                        addNewProduct(productobj)
                            .then(function (response) {
                                // console.log(response);
                                response.status == 201?
                                alert("Product Added")
                                
                                :

                                alert("Try Again")
                                // return response;
                            })
                            .catch(function (response) {
                                console.log(response);
                            });

                        
                    });
            }
        );

    }

    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div>
            <form className="form-detail" onSubmit={handleSubmit(onSubmit)} >
                <div className="container mx-auto  ">

                    <div className="grid grid-cols-6 gap-4 p-10 card bg-base-200 ">


                        <div className="col-start-3 col-span-2 ...  ">

                            <div className="form-control pb-2">
                                <label className="label">
                                    <span className="label-text text-lg">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product Name" className="input input-bordered"  {...register("ProductName")} />
                            </div>
                            <label ><p className="text-red-500 pl-1 text-sm">{errors.ProductName?.message}</p></label>

                            <div className="form-control pb-2">
                                <label className="label">
                                    <span className="label-text text-lg">Product Description</span>
                                </label>
                                <textarea className="textarea h-24 textarea-bordered" placeholder="Product Description" {...register("ProductDescription")} ></textarea>
                            </div>
                            <label ><p className="text-red-500 pl-1 text-sm">{errors.ProductDescription?.message}</p></label>

                            <div className="form-control pb-2">
                                <label className="label">
                                    <span className="label-text text-lg">Product Price</span>
                                </label>
                                <input type="number" placeholder="Product Price" className="input input-bordered" {...register("ProductPrice")} />
                            </div>
                            <label ><p className="text-red-500 pl-1 text-sm">{errors.ProductPrice?.message}</p></label>

                            <div className="form-control pb-2">
                                <label className="label">
                                    <span className="label-text text-lg">Product Quantity</span>
                                </label>
                                <input type="number" placeholder="Product Quantity" className="input input-bordered" {...register("ProductQuantity")} />
                            </div>
                            <label ><p className="text-red-500 pl-1 text-sm">{errors.ProductQuantity?.message}</p></label>

                            < div className="form-control pt-4">

                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg  file:border-0
      file:text-sm file:font-semibold
      file:bg-white file:text-stone-800
      hover:file:bg-zinc-100"

                                        {...register("ProductImage")}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            <br />
                            <div className="col-start-3 col-span-2 ... ">

                                <button className="btn btn-outline " type="submit">Add New</button>

                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewProduct