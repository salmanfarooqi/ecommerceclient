// import RouterComponent from "./RouterComponent.jsx"

import { useEffect } from "react"
import RouterComponent from "./RouterComponent.jsx"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login.jsx"
import Registration from "./pages/auth/Registration.jsx"


// import Cart from "./components/Header/cart/Cart.jsx"

function App() {
  // let user= ""
  // useEffect(()=>{
  //   user = useSelector(state=> state.custom.user)
  //   console.log("user" , user)
    
  // }, [])
  // const [count, setCount] = useState(0)


  return (
    <>
   
  <Routes>

 <Route path="/login" element={<Login/>} />
 <Route path="/register" element={<Registration/>} />
  </Routes>
     : 
   <RouterComponent/>
 
        
  </>
  )
}

export default App


