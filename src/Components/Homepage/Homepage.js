import React from "react";
import './Homepage.css';
import { useNavigate } from "react-router-dom";

function Homepage()
{
    const navigate = useNavigate();

    return(
        <div className="home-page">
            <div className="home-header">
                <h1>Welcome to Bosch Experience Center</h1>
            </div>
            <main>
                <section className="features">
                <div className="feature">
                    <h2>ECU Hardware</h2>
                    <p>
                    Please click below to know more about ECU Hardwares.
                    </p>
                    <button onClick={() => navigate('/ecuhardware')}>Learn More</button>
                </div>
                <div className="feature">
                    <h2>Bosch Connectors</h2>
                    <p>
                        Please click below to know more about Bosch Connectors.
                    </p>
                    <button onClick={() => navigate('/connector')}>Learn More</button>
                </div>
                <div className="feature">
                    <h2>ECU Mechanics</h2>
                    <p>
                        Please click below to know more about ECU Mechanics.
                    </p>
                    <button onClick={() => navigate('/mechanics')}>Learn More</button>
                </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage;