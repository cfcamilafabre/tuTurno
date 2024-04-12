import './App.css'
import Home from './views/Home/Home'
import Navbar from './components/NavBar/Navbar'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from '../src/views/Register/Register'
import Login from '../src/views/Login/Login'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <MyAppointments />
      <Register />
      <Login />
    </>
  )
}


export default App
