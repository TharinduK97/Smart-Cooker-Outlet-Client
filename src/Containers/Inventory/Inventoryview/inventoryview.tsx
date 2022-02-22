import { useEffect, useState } from "react";
import Inventoryviewpage from "../../../components/Inventory page/Localinventoty/inventoryviewpage";
import { getSingleProduct } from "../../../Services/Product";
import { useParams } from "react-router-dom";
import { string } from "yup/lib/locale";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchSingleProduct, selectProduct } from "../../../store/productViewSlice";

function Inventoryview() {

    
    const  {id} = useParams();
   
    const dispatch = useAppDispatch();

    const product = useAppSelector(selectProduct);
    

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
      }, [dispatch]);
      
    return (
        <div>
           
               <Inventoryviewpage product={product.product}
               
               
               />
        </div>
    )
}

export default Inventoryview