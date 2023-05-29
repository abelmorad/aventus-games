import heroImg1 from '../../public/images/about/game1.svg'
import companyImg from '../../public/images/about/company.svg'
import WorkWithUs from '../components/WorkWithUs'

import OurTeamCard from '../components/OurTeamCard'
import abel from '../../public/images/about/abel.svg'
import employee2 from '../../public/images/about/employee2.svg'
import employee3 from '../../public/images/about/employee3.svg'
import employee4 from '../../public/images/about/employee4.svg'
import InputEmail from '../components/InputEmail'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

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
                <section className="our-team-container">
                    <h2>Our team</h2>
                    <div className='our-team-wrapper'>
                        <OurTeamCard 
                            profilePicture={abel}
                            employee={"Abel Morad"}
                            position={"CEO"} />
                        <OurTeamCard profilePicture={employee2}
                            employee={"Malik Tom"}
                            position={"COO"}/>
                        <OurTeamCard profilePicture={employee3}
                            employee={"Sittie Nor"}
                            position={"CFO"}/>
                        <OurTeamCard profilePicture={employee4}
                            employee={"Janeen Fylx"}
                            position={"CTO"}/>
                    </div>
                </section>
            </main>
            <Subscribe />
            <Footer />
        </>
    )
}