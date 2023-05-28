export default function InputEmail () {
    return (
        <div className="email-input-wrapper">
            <input 
                className="input-email"
                type="text" 
                placeholder="Enter email address"
                aria-label="enter email" 
            />
            <button className="continue-btn">Continue</button>
        </div>
    )
}