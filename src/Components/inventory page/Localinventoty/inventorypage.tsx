import React, { useState } from "react";
import Inventoryitem from '../Localinventoty/inventoryitem';

type inventoryitems = {
    items: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
    }[];

    
}


function Inventoryhome(props:inventoryitems) {
    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-end-6 ...">

               
                    <div className="overflow-x-auto">
                        <table className="table w-full table-compact">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Last Updated</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                            {props.items.map(item =>
                                {
                                    return(
                                            <Inventoryitem itemObj={item} key={item.product_code+1} />   
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

export default Inventoryhome