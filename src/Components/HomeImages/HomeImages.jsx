import './HomeImages.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function HomeImages() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <div className="images">
      <div className='mainImg'>
        <img
          data-aos="fade-up"
          className='img1'
          src="assets/kei-house.jpeg"
          alt=""
        />
      </div>
      <div className="otherImgs">
        <img
          data-aos="fade-right"
          className='img2'
          src="assets/active-pour.jpg"
          alt=""
        />
        <img
          data-aos="fade-right"
          className='img3'
          src="assets/fresh-driveway.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default HomeImages