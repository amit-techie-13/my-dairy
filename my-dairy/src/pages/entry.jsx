
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pic from '../assets/pic2.jpg'
import SignUp from '../pages/signup'
import Login from '../pages/login'
function Entry() {


  return (
    <>
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat'style={{backgroundImage:`url(${pic})`}}> 
 
<h1 className="text-4xl font-bold bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-200 bg-clip-text text-transparent mb-6">Samarooh – Everything You Need to Celebrate Is just a ckick away.</h1>
<div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl w-[400px]">
  <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='login' element={<Login/>}/>
  </Routes>
    </div>
    </div>
    </>
  )
}

export default Entry