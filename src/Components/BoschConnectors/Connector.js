import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Connector.css';

import eucon26 from '../../Images/26peucon.png';
import eucon38 from '../../Images/38peucon.png';
import eucon46 from '../../Images/46peucon.png';
import ems56pv from '../../Images/56pvems.png';
import dasy from '../../Images/93pdasy.png';
import airbag124 from '../../Images/124pairbag.png';
import engine154 from '../../Images/124pengine.png';
import vehicle154 from '../../Images/154pvehicle.png';
import airbag156 from '../../Images/156airbagsealed.png';
import ems192 from '../../Images/192pems.png';
import ems196 from '../../Images/196pems.png';
import ems228 from '../../Images/228pems.png';
import ems284 from '../../Images/284pems.png';
import ems336 from '../../Images/336pems.png';
import HC from '../../Images/highcurrent.png';
import kom1 from '../../Images/kompakt1.png';
import kom4 from '../../Images/kompakt4.png';
import kommini from '../../Images/kommini.png';
import bak from '../../Images/bak6.png';
import gpc from '../../Images/GPC.png';
import tra2p from '../../Images/trap2p.png';
import tra7p from '../../Images/trap7p.png';
import traslim from '../../Images/trapslim.png';
import epu5p from '../../Images/5peps.png';
import epu8p from '../..//Images/8peps.png';
import bmtcb from '../../Images/bmt0.5cb.png';
import bmtl from '../../Images/bmt0.5cl.png';
import bcb from '../../Images/bcb0.6cb.png';
import bmk from '../../Images/bmk0.6.png';
import matrixcb from '../../Images/matrix1.2cb.png';
import matrixl from '../../Images/matrix1.2l.png';
import btc15 from '../../Images/btc1.5.png';
import btl15 from '../../Images/btl1.5.png';
import btc28 from '../../Images/btc2.8.png';
import btl28 from '../../Images/btl2.8.png';
import bdk28 from '../../Images/bdk2.8.png';
import btc48 from '../../Images/btc4.8.png';
import btl48 from '../../Images/btl4.8.png';

function Connector()
{
    const [selectedDropdown, setSelectedDropdown] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDropdownClick = (dropdownId) => {
        setSelectedDropdown(dropdownId);
        setSelectedImage(null);
    };
    
    const handleImageSelect = (imageId) => {
        setSelectedImage(imageId);
    };

    return(
        <>
            <nav className="navbarcon">
                <ul className="navMenucon">
                    <li>       
                    <button onClick={() => handleDropdownClick('High Pole Connectors')} className="conbutton">
                    <NavLink to="#" className="navLinkcon">
                        High Pole Connectors
                    </NavLink>
                    </button>                
                    </li>
                    <li><button onClick={() => handleDropdownClick('Low Pole Connectors')} className="conbutton">
                    <NavLink to="#" className="navLinkcon">
                        Low Pole Connectors
                    </NavLink>
                    </button>
                    </li>
                    <li><button onClick={() => handleDropdownClick('Terminal Pole Connectors')} className="conbutton">
                    <NavLink to="#" className="navLinkcon">
                        Terminal Pole Connectors
                    </NavLink>
                    </button>
                    </li>
                </ul>
            </nav>
            <div className="Dropdown container">
                {selectedDropdown === 'High Pole Connectors' && (
                    <ul className="dropdown">
                        <li>
                        <button onClick={() => handleImageSelect(eucon26)} className="dropbutton">26P EuCon</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(eucon38)} className="dropbutton">38P EuCon</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(eucon46)} className="dropbutton">46P EuCon</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems56pv)} className="dropbutton">56P-V EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(dasy)} className="dropbutton">93P DASy</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(airbag124)} className="dropbutton">124P Airbag 12 sealed</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(engine154)} className="dropbutton">154P engine orientated</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(vehicle154)} className="dropbutton">154P vehicle orientated</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(airbag156)} className="dropbutton">156P Airbag 12 unsealed</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems192)} className="dropbutton">192P EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems196)} className="dropbutton">196P EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems228)} className="dropbutton">228P EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems284)} className="dropbutton">284P EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(ems336)} className="dropbutton">336P EMS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(HC)} className="dropbutton">High Current</button>
                        </li>
                    </ul>
                    )}

                {selectedDropdown === 'Low Pole Connectors' && (
                    <ul className="dropdown">
                        <li>
                        <button onClick={() => handleImageSelect(kom1)} className="dropbutton">Kompakt 1</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(kom4)} className="dropbutton">Kompakt 4</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(kommini)} className="dropbutton">Kompakt Mini</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(bak)} className="dropbutton">BAK 6</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(gpc)} className="dropbutton">Glow Plug Connector</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(tra2p)} className="dropbutton">Trapez 2p/5P</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(tra7p)} className="dropbutton">Trapez 7P</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(traslim)} className="dropbutton">Trapez Slim Line Mini</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(epu5p)} className="dropbutton">5P EPS</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(epu8p)} className="dropbutton">8P EPS</button>
                        </li>
                    </ul>
                    )}

                {selectedDropdown === 'Terminal Pole Connectors' && (
                    <ul className="dropdown">
                        <li>
                        <button onClick={() => handleImageSelect(bmtcb)} className="dropbutton">BMT 0.5 Clean Body</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(bmtl)} className="dropbutton">BMT 0.5 Lance</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(bcb)} className="dropbutton">BCB 0.6</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(bmk)} className="dropbutton">BMK 0.6</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(matrixcb)} className="dropbutton">Matrix 1.2 Clean Body</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(matrixl)} className="dropbutton">Matrix 1.2 Lance</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btc15)} className="dropbutton">BTC 1.5</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btl15)} className="dropbutton">BTL 1.5</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btc28)} className="dropbutton">BTC 2.8</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btl28)} className="dropbutton">BTL 2.8</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(bdk28)} className="dropbutton">BDK 2.8</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btc48)} className="dropbutton">BTC 4.8</button>
                        </li>
                        <li>
                        <button onClick={() => handleImageSelect(btl48)} className="dropbutton">BTL 4.8</button>
                        </li>
                    </ul>
                    )}
            </div>
            <div className="image-container-con">
                {selectedImage && (
                    <img className="imagecon" src={selectedImage} alt={selectedImage} />
            )}
            </div>
        </>
    );
}

export default Connector;