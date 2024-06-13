import Ecuhardware from './Components/ECUHardware/Ecuhardware';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Connector from './Components/BoschConnectors/Connector';
import Mechanics from './Components/ECUMechanics/Mechanics';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <header className='headerbg'>
        <Header/>
      </header>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/ecuhardware' element={<Ecuhardware/>} />
        <Route exact path='/connector' element={<Connector/>} />
        <Route exact path='/mechanics' element={<Mechanics/>} />
      </Routes>
    </>
  );
}

export default App;
