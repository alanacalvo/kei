import './Home.scss'
import '../../Components/Intro/Intro'


function Home() {
  return (
    <>
      <div className="intro">
        <h1>KEETON ENTERPRISES</h1>
        <h2>A good home starts with a strong foundation.</h2>
      </div>
      <div className='home'>
        <img src="assets/kei-house.jpeg" alt="" />
      </div>
    </>
  )
}

export default Home