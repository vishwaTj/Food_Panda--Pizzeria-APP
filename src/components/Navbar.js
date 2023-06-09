import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import { useCart } from "./ContextReducer";
import logo from "../Pizzeria.png";

const Navbar = () => {
  let data = useCart(); 
  const navigate = useNavigate();
  const [cartView,setCartView] = useState(false);

  const handleLogout=()=>{
     localStorage.removeItem("authToken");
     navigate("/");
  };



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navcolour">
        <div className="container-fluid">
        <img src={logo} alt="pizzeria logo" to="/" style={{objectFit:"fill", height:"100px", width:"130px", cursor:"pointer"}}>
          
        </img>
          {/* <Link className="navbar-brand fs-1 fst-italic" to="/">
            Food Panda
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/myOrder"
                  >
                    {" "}
                    My Orders{" "}
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

              {(!localStorage.getItem("authToken")) ?
                <div className="d-flex">
                  <Link
                    className="btn bg-white text-warning mx-1"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="btn bg-white text-warning mx-1"
                    aria-current="page"
                    to="/createuser"
                  >
                    SignUp
                  </Link>
               </div> 
               :
                <div>
                  <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true);}}>
                    My Cart {" "}
                    <Badge pill bg="danger">{data.length}</Badge>
                  </div>
                  {cartView ? <Modal onClose={()=>setCartView(false)}><Cart /></Modal>:null}

                  <div className="btn bg-white text-danger mx-2" 
                    onClick={handleLogout}>
                     Logout
                   </div>
                </div> 
              }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
