import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../Services/authenticationService';

function Mainpage() {
    const navigate = useNavigate();

    useEffect(()=>{
        if (! isAuthenticated()) {
       
            navigate('/login');
        }else{
            navigate('/inventory');
        }
    })
    

   return(
       <div></div>
   )
}

export default Mainpage;