import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Orderpage from '../../components/Orders/orderPage'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOrders, selectOrderLists } from '../../store/orderSlice';

function Order() {

    const dispatch = useAppDispatch();

    const orderList = useAppSelector(selectOrderLists);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    console.log(orderList.orderList);

    return (
        <div>

            <Orderpage orders={orderList.orderList} />

        </div>
    )
}

export default Order