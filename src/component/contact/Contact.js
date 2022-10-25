import React from 'react'
import './Contact.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
  return (
    <>
      {/* ===== map ===== */}
      <iframe  id="gmap_canvas" 
      src="https://maps.google.com/maps?q=akoda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        {/* ==== form ===== */}
      <form>
        <div  data-aos='fade-up'className='form_div'>

          <div>

              <div>
                <input type='text' id='first Name' placeholder='First Name' required/>
              </div>
              <div>
                <input type='text' id='Last Name' placeholder='Last Name' required/>
              </div>
              <div>
                <input type='text' id='Other Name' placeholder='other Name' required/>
              </div>
          </div>
          <div>
              <div>
                <input type='number' id='telphone' placeholder='telphone' required/>
              </div>
              <div>
                <input type='email' id='emailaddress' placeholder='emailaddress@gmail.com' required/>
              </div>
              <div>
                <input type='number' id='age' placeholder='age' required/>
              </div>
          </div>
          <div>
              <div>
              <input type='text'id='gender' placeholder='gender'/>
              </div>
              <div>
                  <input type='text'id='country' placeholder='country'/>
              </div>
              <div>
                  <input type='text'id='city' placeholder='city'/>
              </div>
          </div>

        </div>
          <div className='sumbit__div'><button className='btn sumbit'>sumbit</button></div>

      </form>
    </>
  )
}

export default Contact