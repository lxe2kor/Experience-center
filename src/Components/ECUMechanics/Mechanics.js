import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Mechanics.css';

import summ from '../../Images/ecusummary.png';
import HR from '../../Images/housingroadmap.png';
import HO from '../../Images/housingoverview.png';
import PCB from '../../Images/pcbhousing.png';
import pinH from '../../Images/pinheader.png';
import EPAover from '../../Images/epaoverview.png';
import EPAmount from '../../Images/epamounting.png';
import EPB from '../../Images/epb.png';
import ecuEnv from '../../Images/envcond.png';
import VM from '../../Images/vehiclemoint.png';
import EnvCond from '../../Images/mountenvcond.png';
import pcbtech from '../../Images/pcbtech.png';
import BuildConc from '../../Images/buildupconcept.png';
import compepa from '../../Images/compepaepb.png';
import ska from '../../Images/ska.png';
import epl from '../../Images/epl.png';

function Mechanics()
{
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return(
        <div className="Mech-App">
            <nav className="navbarMech">
                <ul className="navMenuMech">
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(summ)}>
                    <NavLink to="#" className="navLinkMech">
                        Summary
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(HR)}>
                    <NavLink to="#" className="navLinkMech">
                        Housing Roadmap
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(HO)}>
                    <NavLink to="#" className="navLinkMech">
                        Housing Overview
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(PCB)}>
                    <NavLink to="#" className="navLinkMech">
                        PCB & Housing Sizes
                    </NavLink>
                    </button>
                    </li>
                    
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(pinH)}>
                    <NavLink to="#" className="navLinkMech">
                        Common Pin headers
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(EPAover)}>
                    <NavLink to="#" className="navLinkMech">
                        EPA Overview
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(EPAmount)}>
                    <NavLink to="#" className="navLinkMech">
                        EPA Mounting Options
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(EPB)}>
                    <NavLink to="#" className="navLinkMech">
                        EPB
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(ecuEnv)}>
                    <NavLink to="#" className="navLinkMech">
                        ECU Environmental Condition
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(VM)}>
                    <NavLink to="#" className="navLinkMech">
                        Vehicle Mounting
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(EnvCond)}>
                    <NavLink to="#" className="navLinkMech">
                        Environmental Conditions
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(pcbtech)}>
                    <NavLink to="#" className="navLinkMech">
                        PCB Technologies
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(BuildConc)}>
                    <NavLink to="#" className="navLinkMech">
                        General Housing Buildup Concepts
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(compepa)}>
                    <NavLink to="#" className="navLinkMech">
                        Comparison EPA-EPB
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(ska)}>
                    <NavLink to="#" className="navLinkMech">
                        ECU Mechanics-SKA
                    </NavLink>
                    </button>
                    </li>
                    <li><button className="hwbuttonMech" onClick={() => handleImageClick(epl)}>
                    <NavLink to="#" className="navLinkMech">
                        ECU Mechanics-EPL
                    </NavLink>
                    </button>
                    </li>
                </ul>
            </nav>
            <div className="image-containerMech">
                {selectedImage && <img src={selectedImage} alt={selectedImage}/>}
            </div>
            
        </div>
    );
}

export default Mechanics;