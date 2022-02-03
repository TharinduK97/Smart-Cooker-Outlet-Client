import { useEffect, useState } from "react";
import Inventoryviewpage from "../../../components/Inventory page/Localinventoty/inventoryviewpage";
import { getSingleProduct } from "../../../Services/Product";
import { useParams } from "react-router-dom";

function Inventoryview() {

    const [productData, setProductData] = useState({});
    const  {id} = useParams();

    useEffect(() => {
        getSingleProduct(id).then((res) =>
            setProductData(res.data)
        );
    }, []);

    return (
        <div>
               <Inventoryviewpage product={productData}/>
        </div>
    )
}

export default Inventoryview