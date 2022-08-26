import './Home.scss'
import '../../Components/Intro/Intro'


function Home() {
  return (
    <div className='home'>
      <Intro />
      <img src="assets/kei-house.jpeg" alt="" />
    </div>
  )
}

export default Home