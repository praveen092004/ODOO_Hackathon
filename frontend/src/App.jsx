import CreateTrip from './Modules/CreateTrip.jsx'
import Login from "./Modules/Login"
import './App.css'
import ItineraryScreen from './Modules/ItineraryScreen.jsx'
import Mainlanding from './Modules/Mainlanding.jsx'

import { Route, Routes } from "react-router";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Mainlanding />} />
        <Route path="/createtrip" element={<CreateTrip />} />
        <Route path="/itineraryscreen" element={<ItineraryScreen />} />
      </Routes>
      
    
      
    </div>
  )
}

export default App
