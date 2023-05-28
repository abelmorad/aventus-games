import fbicon from '../../public/images/socialicons/fb.svg'
import igicon from '../../public/images/socialicons/ig.svg'
import linkedicon from '../../public/images/socialicons/linkedin.svg'
import twittericon from '../../public/images/socialicons/twitter.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className='company-logo-wrapper'>
                    <a className="logo" href="#">Aventus Games</a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa modi, placeat eum iusto accusantium fugiat!</p>
                </div>
                <div>
                    <h2>About Us</h2>
                    <a href="">Zeux</a>
                    <a href="">Portfolio</a>
                    <a href="">Careers</a>
                    <a href="">Contact Us</a>
                </div>
                <div className='contact-us-wrapper'>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus recusandae impedit qui optio, temporibus blanditiis totam fugit voluptatem ut quis numquam, corporis, praesentium dolorum?</p>
                    <p>+63 901 233 1233</p>
                </div>
                <div className='social-link-wrapper'>
                    <a href="https://www.facebook.com" target='_blank'>
                        <img src={fbicon} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={igicon} alt="instagram" />
                    </a>
                    <a href="#">
                        <img src={linkedicon} alt="linked in" />
                    </a>
                    <a href="#">
                        <img src={twittericon} alt="twitter" />
                    </a>
                </div>
            </div>
            <p className='copy-right'>Copyright <span>&#169;</span> 2023 Aventus Games All Rights Reserves | Designed by Abel Morad</p>
        </footer>
    )
}