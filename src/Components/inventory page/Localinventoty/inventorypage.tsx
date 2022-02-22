import React, { useState } from "react";
import Inventoryitem from '../Localinventoty/inventoryitem';

type inventoryitems = {
    items: {
        id: string;
        productName: string;
        description:string;
        price: number;
        quantity: number;
        image:Array<any>;
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
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price Per Unit</th>
                                    <th>Quantity</th>
                                   
                                    
                                </tr>
                            </thead>
                            <tbody>
                               
                            {props.items.map((item:any,index:any) =>
                                {
                                    return(
                                            <Inventoryitem itemObj={item} key={index} num={index+1} />   
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