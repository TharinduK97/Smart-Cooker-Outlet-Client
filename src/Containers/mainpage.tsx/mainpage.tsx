import { Link } from 'react-router-dom';

function Mainpage() {
    

    return (
        <div>

            <Link to="/login" >Go to the About Page!</Link>
            <br />

            <Link to="/inventory" > <button >Go to layout, with a number</button></Link>

        </div>
    )
}

export default Mainpage