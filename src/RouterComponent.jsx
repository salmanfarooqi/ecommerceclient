import Header from "./components/Header/Header.jsx"

import Cart from "./components/Header/cart/Cart.jsx"
import Footer from "./components/footer/Footer.jsx"
// import MainBody from "./components/mainbody/MainBody.jsx"
import Card from "./components/mainbody/card/Card.jsx"
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import ProductDetail from "./components/mainbody/productDetail/ProductDetail.jsx"
import EcommerceProvider from "./usecontext/Ecommerceprovider.jsx"

// import SignUp from "./components/mainbody/SignuUp/SIgnUp.jsx"
import SignUp from "./components/mainbody/SignuUp/SignUp.jsx"
import ContactUs from "./components/mainbody/ContactUs/ContactUs.jsx"
import Home from "./pages/Home/Home.jsx"
import Admin from "./components/Admin/Admin.jsx"
// import Product from "./components/Admin/products/Product.jsx"
import AddProduct from "./components/Admin/product/AddProduct.jsx"
import Registration from "./pages/auth/Registration.jsx"
import CancelOrderRecord from "./components/Admin/orders/cancelOrders/cancelorderRecord.jsx"
// import COmpleteOrderRecords from "./components/Admin/orders/completedOrders/CompleteOrderRecords.jsx"
import CompleteOrderRecords from "./components/Admin/orders/completedOrders/CompleteOrderRecords.jsx"
import PendingOrdersRecords from "./components/Admin/orders/pendingOrder/PendingOrdersRecords.jsx"
import Product from "./components/Admin/product/Product.jsx"
import AboutUs from "./pages/aboutus/AboutUs.jsx"
import Login from "./components/login/Login.jsx"
import UpdateProduct from "./components/Admin/product/Updateproduct.jsx"
// import Login from "./components/login/Login.jsx"

function RouterComponent() {
  return (
    <>
    
    {/* <Router> */}
    <EcommerceProvider>
 
   <Header/>
   {/* <Footer/> */}
  
 
      <Routes>

    
      {/* Your routes, header, home components, etc. */}
      <Route path="/Home" element={<Home/>} />
      <Route path="/" element={<Home/>} />
   
     
      
        <Route path="/cart" element={<Cart/>} />
        <Route path="/productDetail/:id" element={<ProductDetail/>}  />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />

        {/* admin router */}

        {/* <Route path="/admin" element={<Admin/>} /> */}
        <Route path="/admin" element={<Admin/>} />
        {/* <Route path='/product' element={<Product/>} /> */}
        <Route path='/addproduct' element={<AddProduct/>} />
        {/* <Route path="/register" element={<Registration/>} /> */}
        <Route path="/CancelOrdersRecord" element={<CancelOrderRecord />} />
        <Route path="/CompletOrdersRecords" element={<CompleteOrderRecords />} />
        <Route path="/PendingOrdersRecords" element={<PendingOrdersRecords />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/updateproduct/:id" element={<UpdateProduct/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="/login" element={<Login/>} /> */}
        
        {/* admin routes */}
      </Routes>
    {/* </Router> */}
    {/* <Footer/> */}
    </EcommerceProvider>
    </>
  )
}

export default RouterComponent;