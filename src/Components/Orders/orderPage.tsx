import React, { useState } from "react";
import Orderitem from './orderitem';
type orderprops = {
    orders: {
        created_At: string;
        order_Id: number;
        order_status: string;
        outlet_code: number;
        product_Code: number;
        quantity: number;
        user_code: number;
    }[];

}


function Oderpage(props:orderprops) {
    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-end-6 ...">

               
                    <div className="overflow-x-auto">
                        <table className="table w-full table-compact">
                            <thead>
                                <tr>
                                    
                                    <th>Order Code</th>
                                    <th>Outlet </th>
                                    <th>Product </th>
                                    <th>Order Date</th>
                                    <th>Quantity</th>
                                    <th>Customer</th>
                                    <th>Order Status</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                            {props.orders.map((order) =>
                                {
                                    return(
                                            <Orderitem order={order} key={order.order_Id+1} />   
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Oderpage