import joystickBg from '../../public/images/joystick.svg'
import cry from '../../public/images/gamingplatform/cry.svg'
import unity from '../../public/images/gamingplatform/unity.svg'
import unreal from '../../public/images/gamingplatform/unreal.svg'

export default function Hero() {
    return (
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
    )
}