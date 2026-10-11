import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
   <nav style={{}}   >
        <ul>
             <a class="" href="/">
      <img  src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/customer_logo.svg" alt="" width="120" height="40" class="d-inline-block align-text-top"/> </a> 

            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES & CATEGORIES</li>
            <li>CONTACT US</li>
            <li>SALON BUSINESS MANAGEMENT SOLUTION (POS)</li>
       
    <a
  href="#"
  style={{
    display: "inline-block",
 marginLeft: "60px",
    backgroundColor: "black",
    color: "white",
    fontSize : "small",
    textDecoration: "none",
    padding: "8px 48px",
    borderRadius: "6px"
  }}
>
  SALON PARTNER
</a>
        </ul>
    </nav>
</>
  )
}

export default Navbar