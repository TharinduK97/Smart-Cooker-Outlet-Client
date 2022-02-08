import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../hooks";
import { authenticateUser } from "../../store/loginSlice";
import { isAuthenticated, isUserInventory, isUserSales } from "../../Services/authenticationService";


export interface ILoginPageProps { }

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

const LoginPageProps: React.FunctionComponent<ILoginPageProps> = (props) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: IFormInputs) => {
        //  console.log(data)

        dispatch(authenticateUser(data)).then(
            ()=>{
                if (isAuthenticated() && isUserInventory()) {
       
                    navigate('/inventory');
            
            } else if (isAuthenticated() && isUserSales()) {
       
                navigate('/orders');
        
             }
            else{
            
                setError(true);
                }
            }

        );

    };



    return (
        <div>
            <form className="form-detail" onSubmit={handleSubmit(onSubmit)} >

                <div className="container mx-auto  ">
                    <div className="grid grid-cols-6 gap-4 pt-6 ">

                        <div className="col-start-3 col-span-2 ...  ">
                            <div className="form-control pb-2">
                            {
                            error && <label><p className="text-red-500 pl-1 text-lg ">Either of username or password is incorrect</p></label>
                        }
                                <label className="label">
                                    <span className="label-text text-lg">Username</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" {...register("email")} />
                            </div>

                            <label ><p className="text-red-500 pl-1 text-sm">{errors.email?.message}</p></label>


                        </div>

                        <div className="col-start-3 col-span-2 ...">
                            <div className="form-control pb-2">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered"  {...register("password")} />
                            </div>


                            <label><p className="text-red-500 pl-1 text-sm">{errors.password?.message}</p></label>


                        </div>
                       
                        
                        <div className="col-start-3 col-span-2 ... ">
                            
                        <button className="btn btn-outline " type="submit">Login</button>

                        </div>
                        <br />

                    </div>
                </div>
            </form>

        </div>

    )
}

export default LoginPageProps;