import { useState,useEffect } from 'react';
import Inventoryhome from "../../../components/Inventory page/Localinventoty/inventorypage";
import {getProducts} from "../../../Services/Product/Product"

function Localinventory() {
   
    const [productData, setProductData] = useState();

    useEffect(()=>{
        getProducts().then((res) =>
            setProductData(res.data)
        );
    },[]);

    const itemList = [
        {
            product_code: 1,
            product_name: "Rice Cooker",
            price: 1000,
            quantity: 10,
            last_updated: "2022-1-8"
        },
        {
            product_code: 2,
            product_name: "Gas Cooker",
            price: 2000,
            quantity: 20,
            last_updated: "2022-1-18"
        },
        {
            product_code: 3,
            product_name: "Induction Cooker",
            price: 3000,
            quantity: 30,
            last_updated: "2022-1-28"
        }
      ]

    return (
        <div>
            {console.log(productData)}
                    <Inventoryhome items={productData}/>   

        </div>
    )
}

export default Localinventory