import { Link } from 'react-router-dom';

function Mainpage() {
    

    return (
        <div>

            <Link to="/login" >login</Link>
            <br />

            <Link to="/inventory" > <button >inventory</button></Link>

        </div>
    )
}

export default Mainpage