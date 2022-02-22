import { Link} from 'react-router-dom';

type itemprops = {
    num:number
    itemObj: {
        id: string;
        productName: string;
        description:string;
        price: number;
        quantity: number;
        image:Array<any>;
    };
}

function Inventoryitem(props: itemprops) {
   
    return (
        <tr >
            <th></th>
            <td>{props.num}</td>
            <td>{props.itemObj.productName}</td>
            <td>{props.itemObj.price}</td>
            <td>{props.itemObj.quantity}</td>
            {/* <td>{props.itemObj.last_updated}</td> */}
            <td>
            <Link  className="link textdec" to={`/inventory/${props.itemObj.id}`}>
            <button className="btn btn-ghost">Info</button>
            </Link>

            </td>

        </tr>
    )
}

export default Inventoryitem