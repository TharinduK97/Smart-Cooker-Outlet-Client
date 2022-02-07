import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, isUserInventory, isUserSales } from "../../Services/authenticationService";
import { removeTokens } from "../../Services/localStorage";


function Navbar() {

    const navigate = useNavigate();

    const onLogOut = () => {
        removeTokens();
        navigate('/login');
    };
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div className="flex-none px-2 mx-2">
                <Link to="/">
                    <span className="text-lg font-bold">
                        Smart Cookers
                    </span>
                </Link>

            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                   
                    {isAuthenticated() && isUserInventory()  ?
                        <Link className="btn btn-ghost btn-sm rounded-btn" to="/inventory">
                        Local inventory
                    </Link>
                        : <p></p>}
                
                    {isAuthenticated() && isUserSales() ?
                        <Link to="/orders" className="btn btn-ghost btn-sm rounded-btn" >
                            Orders
                        </Link>
                        : <p></p>}
                </div>
            </div>


            <div className="flex-none pr-4">
            {  isAuthenticated() ?
                     <a className="btn btn-ghost btn-sm rounded-btn" onClick={onLogOut}
                     >
                         Log out
                     </a>
                        : <p></p>}
                

            </div>
        </div>

    )
}

export default Navbar