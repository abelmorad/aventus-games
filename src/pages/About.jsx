import heroImg1 from '../../public/images/about/game1.svg'
import companyImg from '../../public/images/about/company.svg'
import WorkWithUs from '../components/WorkWithUs'

export default function About() {
    return (
        <>
            <section className="about-hero-wrapper">
                <div className='about-heading-wrapper'>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, magni.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est velit similique, nemo veniam in quasi cupiditate error beatae asperiores perferendis!</p>
                    <button className='contact-us-btn'>Get in touch</button>
                </div>
                <div className="hero-img-wrapper">
                    <img src={heroImg1} alt="game1" />
                </div>
            </section>
            <main className="about-us-container">
                <section className="work-with-us-container">
                    <h2>Why work with us</h2>
                    <div className='work-with-us-wrapper'>
                        <WorkWithUs />
                        <WorkWithUs />
                        <WorkWithUs />
                    </div>
                </section>
                <section className="our-company-container">
                    <img src={companyImg} alt="aventus games" />
                    <div className="company-msg">
                        <b>Lorem, ipsum.</b>
                        <h1>Since 2023, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla illo, nisi adipisci molestiae eos.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur hic soluta possimus velit assumenda, dignissimos ipsa obcaecati magni corporis nisi pariatur dolores neque, quia alias debitis sapiente. Deserunt, molestiae?</p>
                    </div>
                </section>
            </main>
        </>
    )
}