import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export interface ILoginPageProps {}

interface IFormInputs {
    email: string
    password: string
  }

  const schema = yup.object({
    email: yup.string().required('Email is required')
    .email('Email is invalid'),
    password: yup.string().required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  }).required();

const LoginPageProps: React.FunctionComponent<ILoginPageProps> = (props) =>  {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: IFormInputs) => console.log(data);

    
   

    return (
        <div>
  <form className="form-detail" onSubmit={handleSubmit(onSubmit)} >
            <div className="container mx-auto  ">

                <div className="grid grid-cols-6 gap-4 ">


                    <div className="col-start-3 col-span-2 ... ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="email"  className="input input-bordered" {...register("email")} />
                        </div>

                            <br />
                        
                            <label><p className="text-red-500">{errors.email?.message}</p></label>
                            
                         
                    </div>

                    <div className="col-start-3 col-span-2 ...">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"  {...register("password")} />
                        </div>
                        <br />
                        
                                <label><p className="text-red-500">{errors.password?.message}</p></label>
                         
                        
                    </div>

                    <div className="col-start-3 col-end-4 ...">
                        <button className="btn btn-outline btn-wide " type="submit">Login</button>
                    </div>

                   <br />

                </div>
            </div>
        </form>
    
        </div>
      
    )
}

export default LoginPageProps;