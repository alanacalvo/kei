import './Home.scss'
import Intro from '../../Components/Intro/Intro'
import HomeImages from '../../Components/HomeImages/HomeImages';
import bgImg from '../../images/bgImg.jpeg';


function Home() {
  return (
    <div className='home'>
      <Intro />
      <HomeImages />
    </div>
  )
}

export default Home