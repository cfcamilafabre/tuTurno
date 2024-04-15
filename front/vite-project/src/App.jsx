import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Navbar from './components/NavBar/Navbar'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from '../src/views/Register/Register'
import Login from '../src/views/Login/Login'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />}/>
        <Route path='/myappointments' element={<MyAppointments />} />
      </Routes>
    </>
  )
}


export default App
