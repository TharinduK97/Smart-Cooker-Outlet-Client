import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Inventoryhome from "../../../components/Inventory page/Localinventoty/inventorypage";
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {  } from "../../../Services/Product";
import { fetchProducts, selectProductLists } from '../../../store/productSlice';

function Localinventory() {

    const dispatch = useAppDispatch();

    const productList = useAppSelector(selectProductLists);

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

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
            <Inventoryhome items={productList.productList} />

        </div>
    )
}

export default Localinventory