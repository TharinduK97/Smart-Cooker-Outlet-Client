import { Link} from 'react-router-dom';

type orderprops = {
    order: {
        user_code: number;
        created_At:string;
        quantity: number;
        order_status: string;
        product_Code: number;
        outlet_code: number;
        order_Id: number;
    }
}

function Inventoryitem(props: orderprops) {
  
    return (

        <tr >
            
            <td>{props.order.order_Id}</td>
            <td>{props.order.outlet_code}</td>
            <td>{props.order.quantity}</td>
            <td>{props.order.created_At}</td>
            <td>{props.order.quantity}</td>
            <td>{props.order.user_code}</td>
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