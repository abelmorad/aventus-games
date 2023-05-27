import joystickBg from '../../public/images/joystick.svg'
import cry from '../../public/images/gamingplatform/cry.svg'
import unity from '../../public/images/gamingplatform/unity.svg'
import unreal from '../../public/images/gamingplatform/unreal.svg'

import game1 from '../../public/images/games/1.png'
import game2 from '../../public/images/games/2.png'
import game3 from '../../public/images/games/3.png'
import game4 from '../../public/images/games/4.png'
import spiderman from '../../public/images/games/spiderman.png'
import dots from '../../public/images/dots.png'

export default function Home() {
    return (
        <main className='home-page'>
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
                    <a className='see-all-btn'>SEE ALL</a>
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
        </main>
    )
}