import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Inventoryhome from "../../../components/Inventory page/Localinventoty/inventorypage";
import { getProducts } from "../../../Services/Product";
import {  } from "../../../Services/Product";

function Localinventory() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProducts().then((res) =>
            setProductData(res.data)
        );
    }, []);

    

    return (
        <div>
            <div className="container mx-auto pb-8  ">
                <div className="grid grid-cols-8 gap-6 pt-6 ">

                    <div className="col-start-2 col-end-3 ">
                    <Link to="/addnewproduct" className="btn btn btn-outline  ">
                            Add new Product
                    </Link>
                    </div>
                </div>
            </div>
            <Inventoryhome items={productData} />

        </div>
    )
}

export default Localinventory