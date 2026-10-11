import React from 'react'
import "../Components/Menu.css"
const Menu = (props) => {
  return (
    <>


    <div  style={{ objectFit:"cover", padding:"10px"}} >
      <div className='cardd' >
     <img 
        src={props.image} 
        alt={props.alt}
      />
        
        <p className='service-name'  style={{whiteSpace:"pre-line" , textAlign:"center", fontSize:"14px" }}  >{props.title}
          <br />
        <span style={{color:"#212529bf"}}  >{props.time}</span>
       </p>
       <div style={{}} >
        <br />
        <div style={{display:"flex", gap:"36px", justifyContent:"space-around" }}  > 
        <span className='rs1' >{props.rs}</span>
        <span className='viewbtn1'>Book</span></div>
        </div>
        </div>
</div>

{/* ₹349*/}
    </>
  )
}

export default Menu