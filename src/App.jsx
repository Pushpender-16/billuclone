import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Menu from './Components/Menu'
import Carddeal from './Components/Carddeal'

import About from './Components/About'
import Viewbtn from './Components/Viewbtn'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Slider />

      <section className='section-instant py-5' >
        <div className='ia' >
          <h5 style={{ fontSize: "16px", letterSpacing: "1.5px" }} >INSTANT SALON AT HOME</h5>
          <h1 className='ncr'>Arriving in 15 mins (Delhi NCR Only)</h1>
        </div>
        {/* men */}
        <div className='menu' >
          <Menu
            image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-1.png" alt="not seen"
            title=" Haircut + Head Massage"
            time="15min."
            rs="₹349"
          />


          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-2.png" alt="not seen"
            title={"Haircut + Beard Or Shave \n + Head Massage"}
            time="15min."
            rs=" ₹449" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-3.png" alt="not seen"
            title={<>Beard Or Shave + Head <br />Massage</>}
            time="10min."
            rs=" ₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-4.png" alt="not seen"
            title="Head Massage"
            time="15min."
            rs=" ₹399" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-5.png" alt="not seen"
            title="Haircut + Beard Or Shave"
            time="Haircut + Beard Or Shave" time="15min."
            rs=" ₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut.png" alt="not seen"
            title="Haircut + Head Massage"
            time="10min."
            rs=" ₹299" />


        </div>

        {/* women */}
        <div className='menu' >

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-11.png" alt="not seen"
            title="Full Face Threading"
            time="15min."
            rs="₹499" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-10.png" alt="not seen"
            title={"Aloevera Full Arms + Full \n Legs + Underarms"}
            time="20min."
            rs="₹399" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-9.png" alt="not seen"
            title={"Aloevera Full Arms + Full\n Legs + Underarms"}
            time="10min."
            rs="₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-8.png" alt="not seen"
            title="Basic Pedicure"
            time="15min."
            rs="₹349" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-7.png" alt="not seen"
            title={"Rica Wax Full Body\n(Exclude Bikini & Butt)"}
            time="10min."
            rs="₹299" />
          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-6.png" alt="not seen"
            title="Basic Manicure"
            time="10min."
            rs="₹299" />


        </div>
<br />
        <Viewbtn />
<br />
      </section>







      <section style={{paddingTop:"60px"}} ><div style={{
        display: "flex",
        gap: "40px",
        justifyContent: 'center',

      }} >
        <div><img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/ipl.png" width={"600px"} height={"300px"} alt="not seen" /></div>
        <div><img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/plan.png" width={"600px"} height={"300px"} alt="not seen" /></div>
      </div></section>



      <section>
        <div className='ia' >
          <h5 style={{ fontSize: "16px", letterSpacing: "1.5px" }} >AT THE SALON</h5>
          <h1 className='ncr'>Deals & Offers</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex ", gap: "13px"  }}   >
          <Carddeal />

        </div>
        <br />
        <Viewbtn />


      </section>

      <section>
        <div className='ia' >
          <h5 style={{ fontSize: "16px", letterSpacing: "1.5px" }} >SALON AT HOME</h5>
          <h1 className='ncr'>Popular Services </h1>
        </div>

        <div className='menu' >

          {/* boy */}
          <Menu
            image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-1.png" alt="not seen"
            title=" Haircut + Head Massage"
            time="15min."
            rs="₹349"
          />


          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-2.png" alt="not seen"
            title={"Haircut + Beard Or Shave \n+ Head Massage"}
            time="15min."
            rs=" ₹449" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-3.png" alt="not seen"
            title={<>Beard Or Shave + Head <br />Massage</>}
            time="10min."
            rs=" ₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-4.png" alt="not seen"
            title="Head Massage"
            time="15min."
            rs=" ₹399" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-5.png" alt="not seen"
            title="Haircut + Beard Or Shave"
            time="Haircut + Beard Or Shave" time="15min."
            rs=" ₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut.png" alt="not seen"
            title="Haircut + Head Massage"
            time="10min."
            rs=" ₹299" />




        </div>

        {/* girls */}
        <div className='menu' >
        
          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-11.png" alt="not seen"
            title="Full Face Threading"
            time="15min."
            rs="₹499" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-10.png" alt="not seen"
            title={"Aloevera Full Arms + Full \nLegs + Underarms"}
            time="20min."
            rs="₹399" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-9.png" alt="not seen"
            title={"Aloe Vera Wax Full Body\n (Exclude Bikini & Butt)"}
            time="10min."
            rs="₹299" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-8.png" alt="not seen"
            title="Basic Pedicure"
            time="15min."
            rs="₹349" />

          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-7.png" alt="not seen"
            title={"Rica Wax Full Body \n(Exclude Bikini & Butt)"}
            time="10min."
            rs="₹299" />
          <Menu image="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/hair%20cut-6.png" alt="not seen"
            title="Basic Manicure"
            time="10min."
            rs="₹299" />

        </div>



<br />
        <Viewbtn />
<br /><br />
      </section>



      <section style={{
        backgroundColor: "#fcd6eeba",
        width: "100%",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        justifyContent: "center",
      

      }}  >
        <div className='bo' >
          <video className='po'  src="https://d20njgifkij537.cloudfront.net/1765283490791.mp4" autoPlay muted loop playsInline style={{
            width: "300px",
            borderRadius: "20px"
          }} height={500}  ></video>
          <video className='po' src="https://d20njgifkij537.cloudfront.net/1765283549041.mp4" autoPlay muted loop playsInline style={{
            width: "300px",
            borderRadius: "20px"
          }} height={500}   ></video>
          <video className='po' src="https://d20njgifkij537.cloudfront.net/1765283490791.mp4" autoPlay muted loop playsInline style={{
            width: "300px",
            borderRadius: "20px"
          }} height={500}   ></video>
          <video className='po' src="https://d20njgifkij537.cloudfront.net/1765283490791.mp4" autoPlay muted loop playsInline style={{
            width: "300px",
            borderRadius: "20px"
          }} height={500}   ></video>
        </div>

      </section>




<About />
      <br />
      <br />
      <br /><br />
      <Footer />


    </>
  )
}

export default App
