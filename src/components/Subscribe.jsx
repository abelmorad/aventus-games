import InputEmail from "./InputEmail"

export default function Subscribe() {
    return (
        <section className="subscribe-section">
            <div className="subscribe-title">
                <h1>Subscribe to Our News Letter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit laudantium et accusamus earum ut veniam suscipit nulla reprehenderit? Non.</p>
            </div>
            <div className="subscribe">
                <div>
                    <h1>Stay in the Loop</h1>
                    <p>
                        Subscribe to receive the latest news and updates about TDA.
                        We promise not to spam you! 
                    </p>
                </div>
                <InputEmail />
            </div>
        </section>
    )
}