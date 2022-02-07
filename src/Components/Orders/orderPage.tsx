import React, { useState } from "react";
import Orderitem from './orderitem';
type orders = {
    orders: {
        order_Id: number;
        NIC: string;
        order_Date: string;
        order_Time: string;
        quantity:number;
        order_status:string;
    }[];

    
}


function Oderpage(props:orders) {
    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-end-6 ...">

               
                    <div className="overflow-x-auto">
                        <table className="table w-full table-compact">
                            <thead>
                                <tr>
                                    
                                    <th>Order Code</th>
                                    <th>NIC</th>
                                    <th>Order Date</th>
                                    <th>Order Time</th>
                                    <th>Quantity</th>
                                    <th>order_status</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                            {props.orders.map(order =>
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