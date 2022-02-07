import { Link} from 'react-router-dom';

type orderprops = {
    order: {
        order_Id: number;
        outlet_Id: number;
        staff_Id: number;
        NIC: string;
        order_Date: string;
        order_Time: string;
        quantity:number;
        order_status:string;
    }
}

function Inventoryitem(props: orderprops) {
   
    return (
        <tr >
            
            <td>{props.order.order_Id}</td>
            <td>{props.order.NIC}</td>
            <td>{props.order.order_Date}</td>
            <td>{props.order.order_Time}</td>
            <td>{props.order.quantity}</td>
            <td>{props.order.order_status}</td>
            <td>
            {/* <Link  className="link textdec" to={`/orders/${props.order.order_Id}`}>
            <button className="btn btn-ghost">Info</button>
            </Link> */}

            </td>

        </tr>
    )
}

export default Inventoryitem