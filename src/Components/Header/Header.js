import React from 'react';
import './Header.css';
import BoschLogo from '../../Images/bosch-logo.png';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Header()
{
    const navigate = useNavigate();

    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    return(
        <div className='header-part'>
            <React.Fragment>
                <div className='logo'>
                    <img src={BoschLogo} alt='Logo' onClick={() => navigate('/home')} className='boschlogo'/>
                    {
                    !isHomePage && <button onClick={() => navigate('/home')} className='homebutton'>Home</button>
                    }
                </div>
                
            </React.Fragment>
        </div>
    );
}

export default Header;