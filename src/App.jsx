import './App.css'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'
import Status from './component/status/Status'
import Tickets from './component/ticket/Tickets'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <Nav></Nav>
      <Tickets></Tickets>
      <Footer></Footer>
      <ToastContainer />
    </>

  )
}

export default App
