import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
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
                    <Link className="btn btn-ghost btn-sm rounded-btn" to="/inventory">
                        Local inventory
                    </Link>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                        Global inventory
                    </a>
                    <Link className="btn btn-ghost btn-sm rounded-btn" to="/orders">
                        Orders
                    </Link>

                </div>
            </div>


            <div className="flex-none pr-4">
            <a className="btn btn-ghost btn-sm rounded-btn">
                        Log out
                    </a>

            </div>
        </div>

    )
}

export default Navbar