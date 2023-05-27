export default function Card({ src, alt, servicetype}) {

    return(
        <div className="card">
            <img src={src} alt={alt} />
            <p>{servicetype}</p>
        </div>
    )
}