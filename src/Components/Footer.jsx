import React from 'react'
import "../Components/Footer.css"
const Footer = () => {
  return (
    <>

      <section style={{ backgroundColor: "#fff1f6" }}  >

        <div className='container' style={{ display: "flex", gap: "50px", paddingBottom: "4rem", paddingTop: "4rem" }} >
          {/* part1 */}
          <div className='part1' >

            <div>
              <img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/customer_logo.svg" alt="" />
              </div>
            
            <p style={{
              flexWrap: "wrap",
              width: "300px"
            }} >Enjoy professional, hygienic and safe salon treatments without ever stepping out of your home. Whether it's a haircut, beard grooming, or waxing – with Billu Salon at home, our stylist reaches you in 30 minutes and you get the BEST services tailored to your preferences, all while relaxing in your personal space. Amazing offers starting from just ₹99!</p>
          </div>



          {/* part2 */}
          <div style={{display :"block",
            width:"300px",
            flex:"wrap"
          }} >
            <h5>Quick Links</h5>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES & CATEGORIES</li>
            <li>CONTACT US</li>
            <li>SALON BUSINESS MANAGEMENT SOLUTION (POS)</li>
          </div>
          {/* part3 */}
          <div>
            <h5>Customer Assistance</h5>
            <br />
            <a href="mailto:care@piyushshekhawat16@gmail.com" className='email'>piyushshekhawat16@gmail.com</a>
          </div>
          {/* part4 */}
          <div>
            <h5 style={{flexWrap: "wrap",
              width: "300px"}} >Explore the Billu Customer App</h5>
              <br />
              <div
              style={{display:"flex",  gap:"10px"}}
              >
            <a href="https://play.google.com/store/apps/details?id=com.billu.care"><img style={{objectFit: "contain", borderRadius: "6px" }} src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/google-play.svg" alt="" /></a>
            <a href="https://apps.apple.com/in/app/billu-customer/id1559235086"><img style={{  objectFit: "contain", borderRadius: "6px" }} src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/apple-app-store.svg" alt="" /></a>
</div>
          </div>
        </div>
       

        <hr />

        <p style={{ textAlign: "center", paddingBottom: "26px",  paddingTop:"12px", fontSize:"12px", color:"#555",  }} >Copyright 2020 ©    <span style={{ color: "#e91e8c" }} > Billu Personal care Private Limited.</span> All rights reserved</p>

      </section>


    </>
  )
}

export default Footer