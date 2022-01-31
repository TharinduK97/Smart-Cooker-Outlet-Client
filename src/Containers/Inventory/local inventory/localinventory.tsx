import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Inventoryhome from "../../../components/Inventory page/Localinventoty/inventorypage";
import { getProducts } from "../../../Services/Product/Product"

function Localinventory() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProducts().then((res) =>
            setProductData(res.data)
        );
    }, []);

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