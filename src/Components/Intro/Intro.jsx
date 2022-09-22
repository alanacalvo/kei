import './Intro.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Intro() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <div className="intro">
      <h1 data-aos="fade-left">Keeton Enterprises Inc.</h1>
      <h2 data-aos="fade-left">A good home starts with a solid foundation.</h2>
      <p data-aos="fade-left">Serving Central Florida quality concrete and masonry work for over 40 years.
        Click <a href='/contact'>here</a> to request a free estimate!
      </p>
    </div>
  )
}

export default Intro