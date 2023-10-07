import { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import Card from '../mainbody/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
// import { IoReorderThree } from 'react-icons/IO';
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {


  const [showmenu, setshowmenu] = useState("")
  const [productdata, setProductData] = useState([]);
  const dispatch = useDispatch()
  const values = useSelector(state => state.custom.values)
  const uniqueCategories = [...new Set(productdata.map(item => item.categrie))];


  let getproductDetail = async () => {
    try {
      let response = await axios.get('http://localhost:8080/');
      let dataitem = response.data;
      setProductData(dataitem);
      console.log(dataitem);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    getproductDetail();
  }, []);

  console.log("rp")

  // const search=useSelector(state=>state.custom.search)




  // let [clicksearch,setclicksearch]=useState('nonhit')
  let [countclick, setcountclick] = useState(0)
  let [searchvalue, setsearchvalue] = useState('')

  let search = () => {

    // setclicksearch('hit')
    // console.log(clicksearch)
    setcountclick(++countclick)



  }



  dispatch({

    type: "selectCategry",
    payload: searchvalue,

  })


  return (
    <>
      <div className="header-wraper">


        <div className="navbar">
          <div className='logo'>

            <Link to="/Home"
              style={{ textDecoration: 'none', color: 'none' }}>
              <img src='./images/logo.png ' width='50px' height='50px'></img>

            </Link>
          </div>
          <div className="auth-links">



            <Link to="/Home" style={{ textDecoration: 'none' }}> <li> Home </li></Link>
            <Link to="/aboutus" style={{ textDecoration: 'none' }}> <li> About </li></Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}> <li> Contact </li></Link>
            {/* <li>
                  <select className='drop-down'>
                    <option>Select Categries</option>
                  
                    {
                 productdata.map((item) => (
                     <option key={item._id} value={item.categrie}>{item.categrie}</option>
  ))
}

                  
                  </select>
                  </li> */}
            <div className="serach-box">
              <input type='text'
                placeholder='search your product'
                onChange={(e) => setsearchvalue(e.target.value)}></input>
            </div>


          </div>
          <div className="navbar-icons">


            <Link to="/cart" style={{ textDecoration: 'none' }}><img src='./images/cart.png' ></img></Link>



            <Link to="/signup" style={{ textDecoration: 'none' }}><img src='./images/user.png' ></img></Link>

          </div>
          {showmenu == "show" ? (
            <div className="mobile-menu-links">


              <AiOutlineClose onClick={(e) => setshowmenu("notshow")} className='cross' />

              <Link to="/Home" style={{ textDecoration: 'none' }}> <li onClick={(e) => setshowmenu("notshow")}> Home </li></Link>
              <Link to="/aboutus" style={{ textDecoration: 'none' }}> <li onClick={(e) => setshowmenu("notshow")}> About </li></Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}> <li onClick={(e) => setshowmenu("notshow")}> Contact </li></Link>
              <Link to="/cart" style={{ textDecoration: 'none' }}> <li onClick={(e) => setshowmenu("notshow")}> Cart </li></Link>
              <Link to="/signup" style={{ textDecoration: 'none' }}> <li onClick={(e) => setshowmenu("notshow")}> signup </li></Link>
            </div>
          ) : null
          }

          <div className="mobile-responsive">

            <div className="serach-box">
              <input type='text'
                placeholder='search your product'
                onChange={(e) => setsearchvalue(e.target.value)}></input>
            </div>

            <VscThreeBars onClick={() => setshowmenu("show")} className='icon' />
          </div>



        </div>
        {console.log("search", showmenu)}
      </div>

    </>
  )
}

export default Header;