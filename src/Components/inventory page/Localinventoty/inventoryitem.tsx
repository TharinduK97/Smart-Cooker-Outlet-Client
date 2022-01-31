import { Link} from 'react-router-dom';

type itemprops = {
    itemObj: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
    };
}

function Inventoryitem(props: itemprops) {
   
    return (
        <tr >
            <th></th>
            <td>{props.itemObj.product_code}</td>
            <td>{props.itemObj.product_name}</td>
            <td>{props.itemObj.price}</td>
            <td>{props.itemObj.quantity}</td>
            <td>{props.itemObj.last_updated}</td>
            <td>
            <Link  className="link textdec" to={`/inventory/${props.itemObj.product_code}`}>
            <button className="btn btn-ghost">Info</button>
            </Link>

            </td>

        </tr>
    )
}

export default Inventoryitem