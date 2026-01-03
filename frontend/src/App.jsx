import CreateTrip from './Modules/CreateTrip.jsx'
import Login from "./Modules/Login"
import './App.css'
import ItineraryScreen from './Modules/ItineraryScreen.jsx'
import Mainlanding from './Modules/Mainlanding.jsx'

function App() {

  return (
    <>
      <CreateTrip />
      <ItineraryScreen />
      <Mainlanding/>
      <Login />
    </>
  )
}

export default App
