import React, { useState } from "react";
import type { FormEvent} from "react";
import {Link} from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPageProps: React.FunctionComponent<ILoginPageProps> = (props) =>  {

    const [state, setstate] = useState({


        email: "",
        password: "",
        errors: {
            email: "",
            password: "",
        },
        isvalid: false
    });

    // const formValChange = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const validEmailRegex = RegExp(
    //         /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //     );
    //     const { name , value } = event.target as typeof event.target & {
    //         name :{value :String}
    //         value:{value :String}
    //     };

    //     let errors = { ...state.errors };
    //     switch (name) {

    //         case "email":
    //             // if (!validEmailRegex.test(value)) {
    //             //     errors.email = "Email is not valid!";
    //             // } else {
    //             //     errors.email = "";
    //             //     setstate({
    //             //         ...state,
    //             //         email: value,
    //             //     });
    //             // }
    //             errors.email = "";
    //             setstate({
    //                 ...state,
    //                 email: value,
    //             });
    //             break;

    //         case "password":
    //             if (value.length < 3) {
    //                 errors.password = "Password must be 6 characters long!";
    //             } else {
    //                 errors.password = "";
    //                 setstate({
    //                     ...state,
    //                     password: value,
    //                 });
    //             }
    //             break;


    //         default:
    //             break;
    //     }

    //     setstate({
    //         ...state,
    //         errors,
    //         [name]: value,
    //     });
    // };


    // const { errors } = state;

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     errors.email == "" && errors.password == "" ? state.isvalid = true : state.isvalid = false;
    //     // console.log(state.isvalid);

    // }

    return (
        <form className="form-detail" >
            <div className="container mx-auto ">

                <div className="grid grid-cols-6 gap-4">



                    <div className="col-start-3 col-span-2 ...">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="username" name="email" className="input input-bordered" />
                        </div>

                            <br />
                        <div className="alert alert-warning">
                            <div className="flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                </svg>
                                <label>{state.errors.email}</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-3 col-span-2 ...">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name="password" />
                        </div>
                        <br />
                        <div className="alert alert-warning">
                            <div className="flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                </svg>
                                <label>{state.errors.password}</label>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-start-3 col-end-4 ...">
                        <button className="btn btn-outline btn-wide " type="submit">Login</button>
                    </div>

                    {/* <Link to="/inventory" type="button" className="btn btn-outline-primary">Inventory</Link> */}
                </div>
            </div>
        </form>
    )
}

export default LoginPageProps;