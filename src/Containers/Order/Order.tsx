import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 import Orderpage from '../../components/Orders/orderPage'
import { getRole } from '../../Services/localStorage';

function Order() {

    const [orderData, setOrdertData] = useState([]);


    const OrderList = [
        {
            
                order_Id: 1,
                NIC: "xxx",
                order_Date: "2022-1-12",
                order_Time: "11.30 a.m",
                quantity:1,
                order_status: "Pending"
            
        },
        {
            order_Id: 1,
                NIC: "xxx",
                order_Date: "2022-1-12",
                order_Time: "11.30 a.m",
                quantity:1,
                order_status: "Pending"
        },
        {
            order_Id: 1,
            NIC: "xxx",
            order_Date: "2022-1-12",
            order_Time: "11.30 a.m",
            quantity:1,
            order_status: "Pending"
        }
    ]

    return (
        <div>
            
            <Orderpage orders={OrderList} />
            {console.log(getRole())}
        </div>
    )
}

export default Order