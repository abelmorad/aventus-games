import joystickBg from '../../public/images/joystick.svg'
import cry from '../../public/images/gamingplatform/cry.svg'
import unity from '../../public/images/gamingplatform/unity.svg'
import unreal from '../../public/images/gamingplatform/unreal.svg'

import game1 from '../../public/images/games/1.svg'
import game2 from '../../public/images/games/2.svg'
import game3 from '../../public/images/games/3.svg'
import game4 from '../../public/images/games/4.svg'
import spiderman from '../../public/images/games/spiderman.svg'
import dots from '../../public/images/dots.png'

import mobiledev from '../../public/images/services/mobiledev.svg'
import pcgamedev from '../../public/images/services/pcgamedev.svg'
import consoledev from '../../public/images/services/consoledev.svg'
import arvr from '../../public/images/services/arvr.svg'
import vrdev from '../../public/images/services/vrdev.svg'
import threedmodel from '../../public/images/services/3dmodel.svg'

import project1 from '../../public/images/recentprojects/1.svg'
import project2 from '../../public/images/recentprojects/2.svg'
import project3 from '../../public/images/recentprojects/3.svg'
import project4 from '../../public/images/recentprojects/4.svg'
import project5 from '../../public/images/recentprojects/5.svg'
import project6 from '../../public/images/recentprojects/6.svg'

import Card from '../components/Card'

export default function Home() {
    return (
        <>
        <section className='home-page'>
            <section className="hero-container">
                <div className="hero-texts">
                    <h2>3D GAME DEVELOPER</h2>
                    <h1>Work that we produce for our clients</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </p>
                    <div>
                        <a className="get-more-details-btn" href="#">Get more details</a>
                        <div>
                            <img src={unreal} alt="unreal logo" />
                            <img src={cry} alt="cry logo" />
                            <img src={unity} alt="unity logo" />
                        </div>
                    </div>
                </div>
                <img className='joystick-bg' src={joystickBg} alt="joystick" />
            </section>
            {/* trending games */}
            <section className='trending-games-section'>
                <div className="trending-title">
                    <h2>Currently Trending Games</h2>
                    <a className='see-all-btn' >SEE ALL</a>
                </div>
                <div className="trending-games-cards">
                    <img src={game1} alt="For honor" />
                    <img src={game2} alt="leagueoflegends" />
                    <img src={game3} alt="crysis" />
                    <img src={game4} alt="game4" />
                </div>
            </section>
            {/* GOTY */}
            <section className="goty-section">
                <p>Game of the Year 2021 - Spider Man</p>
                <div>
                    <p className='game-title'>Spider Man</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis fugit nihil nostrum voluptatibus, mollitia suscipit natus ipsam dignissimos nobis tempora fuga provident, totam est eveniet voluptatem illo odit architecto.</p>
                </div>
                <img className='dots'  src={dots} alt="dots" />
                <img src={spiderman} alt="spiderman" />
            </section>
        </section>
            {/* services */}
        <section className= "services-section">
            <div className='services-title'>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, qui! Natus, modi.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste modi dignissimos 
                    architecto rerum, asperiores magni reiciendis, suscipit vitae, magnam labore tempora harum fuga incidunt.
                </p>
            </div>
            <div className="services-cards">
                <Card src={mobiledev} alt={"mobile game dev"} servicetype={"Mobile Game Development"}/>
                <Card src={pcgamedev} alt={"pc game dev"} servicetype={"PC Game Development"}/>
                <Card src={consoledev} alt={"console game"} servicetype={"Console Game Development"}/>
                <Card src={arvr} alt={"ar vr solutions"} servicetype={"AR/VR Solutions"}/>
                <div></div>
                <Card src={vrdev} alt={"ar vr design"} servicetype={"AR/VR Design"}/>
                <Card src={threedmodel} alt={"3d modeling"} servicetype={"3D Modeling"}/>
                <div></div>
            </div>
            <div className="mountain-bg"></div>
        </section>
        {/* recent projects */}
        <section className="recent-project-section">
            <div className="recent-project-title">
                <h1>Our Recent Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusantium earum ea magnam quaerat in!</p>
            </div>
            <div className='project-images-wrapper'>
                <div className='project-one'>
                    <img src={project1} alt="project1" />
                    <img src={project2} alt="project2" />
                    <img src={project3} alt="project3" />
                </div>
                <div className='project-two'>
                    <img src={project5} alt="project5" />
                    <img src={project4} alt="project4" />
                    <img src={project6} alt="project6" />
                </div>
            </div>
            <a className='see-all-btn'>See All</a>
        </section>
    </>
    )
}