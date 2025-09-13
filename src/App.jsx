import {Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CheckOut from './pages/checkout/CheckOut.jsx'
import Orders from './pages/Orders.jsx'
import Tracking from './pages/Tracking.jsx'
import './App.css'

 //all the pages in our website : Routes
 //Route : Add page to our website
 //path : url path of the page == index shorthand
 //element : which ele of component to display
 //Link [to] : go to other page without reloading and faster

function App() {
  return (
    <Routes>   
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />              
      <Route path="orders" element={<Orders />} />                            
      <Route path="tracking" element={<Tracking/>} />                            
    </Routes>
  )
}

export default App
