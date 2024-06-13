import React from 'react';
import './Header.css';
import BoschLogo from '../../Images/bosch-logo.png';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Header()
{
    const navigate = useNavigate();

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return(
        <div className='header-part'>
            <React.Fragment>
                <div className='logo'>
                    <img src={BoschLogo} alt='Logo' onClick={() => navigate('/')} className='boschlogo'/>
                    {
                    !isHomePage && <button onClick={() => navigate('/')} className='homebutton'>Home</button>
                    }
                </div>
                
            </React.Fragment>
        </div>
    );
}

export default Header;