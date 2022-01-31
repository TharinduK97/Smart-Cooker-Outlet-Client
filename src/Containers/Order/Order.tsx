import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 import Orderpage from '../../components/Orders/orderPage'

function Order() {

    const [orderData, setOrdertData] = useState([]);

    // useEffect(() => {
    //     // getProducts().then((res) =>
    //     //     setProductData(res.data)
    //     );
    // }, []);

    const OrderList = [
        {
            
                order_Id: 1,
                outlet_Id: 2,
                staff_Id: 3,
                NIC: "xxx",
                order_Date: "2022-1-12",
                order_Time: "11.30 a.m",
                quantity:1,
                order_status: "Pending"
            
        },
        {
            order_Id: 1,
                outlet_Id: 2,
                staff_Id: 3,
                NIC: "xxx",
                order_Date: "2022-1-12",
                order_Time: "11.30 a.m",
                quantity:1,
                order_status: "Pending"
        },
        {
            order_Id: 1,
            outlet_Id: 2,
            staff_Id: 3,
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

        </div>
    )
}

export default Order