import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import './Ecuhardware.css';
import MG1 from '../../Images/mg1.png';
import EDC from '../../Images/edc.png';
import ME1 from '../../Images/me1.png';
import MD1 from '../../Images/md1.png';
import VC1 from '../../Images/vc1.png';
import VE1 from '../../Images/ve1.png';
import VCCU from '../../Images/vccuve1.png';

function Ecuhardware()
{
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return(
        <div className="App">
            <nav className="navbar">
                <ul className="navMenu">
                    <h4>Gasoline</h4>
                    <li><button className="hwbutton" onClick={() => handleImageClick(MG1)}>
                    <NavLink to="#" className="navLink">
                        MG1
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbutton" onClick={() => handleImageClick(EDC)}>
                    <NavLink to="#" className="navLink">
                        EDC
                    </NavLink>
                    </button>
                    </li>
                    <h4>Diesel</h4>
                    <li><button className="hwbutton" onClick={() => handleImageClick(ME1)}>
                    <NavLink to="#" className="navLink">
                        ME1
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbutton" onClick={() => handleImageClick(MD1)}>
                    <NavLink to="#" className="navLink">
                        MD1
                    </NavLink>
                    </button>
                    </li>
                    <h4>Vehicle Control Unit</h4>
                    <li><button className="hwbutton" onClick={() => handleImageClick(VC1)}>
                    <NavLink to="#" className="navLink">
                        VC1
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbutton" onClick={() => handleImageClick(VE1)}>
                    <NavLink to="#" className="navLink">
                        VE1
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbutton" onClick={() => handleImageClick(VCCU)}>
                    <NavLink to="#" className="navLink">
                        VCCU
                    </NavLink>
                    </button>
                    </li>
                </ul>
            </nav>
            <div className="image-container">
                {selectedImage && <img src={selectedImage} alt={selectedImage}/>}
            </div>
            
        </div>
    );
}

export default Ecuhardware;