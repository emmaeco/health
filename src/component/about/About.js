import React from 'react'
import aboutimage from '../../img/aboutimage.jpg'
import './About.css'
import Aos from 'aos'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
  return (
   <>
      <div >
        <img src={aboutimage } className='image__about'/>
      </div>
      <div className='pageabout__content' data-aos='fade-up'>
            <p>
              Studies show that educated women and men between age 35 and 44 are most likely to search the web for health-related information, as they are beginning to develop health concerns at this age. Some of these top users are bilingual, and English may not be their first language. They may be searching with their elderly parents who may be intimidated by internet technology, but still want to be part of their own healthcare and require large, bold fonts and buttons. They may be legally blind or epileptic and require your site to be ADA compliant. They may be students just researching now, but are likely to need your services in the future. They will be expecting evidence based content.
              © 10 Best Hospital Website Designs | WebToMed
              Source: https://www.webtomed.com/10-best-hospital-website-designs.html
               © Protected by WebToMed
            </p>
            <p>
              Talk about real. Real people casting in advertising and marketing has been trending for years, but Sinai Hospital masterfully executes this tactic with elegant, emotionally-resonant portraits representing a cross-section of America. People of every age, gender, color, and background are not staring into the camera posing - they're gazing into their own thoughts (just like the site visitors). No matter who you are, you'll see yourself represented, and feel an immediate visceral connection. Trust is likely to follow. The Espanol and text size adjustment tabs at the top of the webpage serve to relax many users who are often uncomfortable with the web.

              © 10 Best Hospital Website Designs | WebToMed
              Source: https://www.webtomed.com/10-best-hospital-website-designs.html
              © Protected by WebToMed
            </p>
      </div>
   </>
  )
}

export default About