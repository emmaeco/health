import React from 'react'
import './Home.css'
import people from '../../img/people.png'
import background from '../../img/image 1.jpg'
import cartoon from '../../img/cartoon.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
  return (
    <>
      <main>
        <div className='background'>
          <img src={background}/>
        </div>
        
       
        <div className='text__content'>
            
            <div className='main__text'>
                <h1>MEDICUS</h1>
                <h3>CAN HANDLE THAT</h3>
                <div className='underline'></div>
                <h4>YOUR PATIENTS AWAIT YOU</h4>
                <p>
                  from preventive care and cheeckups to and exams,our primary<br/>
                  care physicians and providers work to keep you and your whole family healthy
                  and strong each and everyday
                </p>
                <button className=' btn appointmnet__btn'><Link to='/contact'>APPOINTMENT</Link></button>
                
                
            </div>
            <div className='people__image'>
                <img src={people}/>
            </div>
        </div>

      
      </main>

      {/* ======== body=========== */}
     

     <section  data-aos='fade-left' className='about__us'>
        <h1>About us</h1>
        <div className='about__context'>
          <div>
            <img src={cartoon}/>
          </div>
          <div className='paragraph'>
              <p>
              At MEDICUS Hospital, our goal is to help patients with 
              medically complex conditions continue their recovery so they can regain their quality of life. 
              Physician-led, multidisciplinary care teams support that recovery by developing a customized 
              treatment plan that helps patients breathe, eat, walk, talk and think again.
              </p>
              <button className=' btn '><Link to='/about'>LEARN MORE</Link></button>
          </div>
        </div>
      </section>
      <footer className='footer' data-aos='fade-right'>
          <h1 className='footer__header'>Contact</h1>
        <div className='footer__body'>
            <div>
                <h4>Address: justices rose ukeje street, off ABayomi durosimi Etti</h4>
                <h4>Tel: 08165919064 , 08024239198</h4>

            </div>
            <div>
                <form className='form'>
                    <div>
                      <input type='text' id='fullname' placeholder='FullName' required/>
                    </div>
                    <div>
                      <input type='number' id='Telphone' placeholder='Telphone' required/>
                    </div>
                    <div>
                      <input type='' id='name' placeholder='name' required/>
                    </div>
                    <button className='btn btn__send'>send</button>
                </form>
            </div>
        </div>
      




      </footer>
    
    
    </>
  )
}

export default Home