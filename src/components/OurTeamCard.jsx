export default function OurTeamCard({ employee, position, profilePicture,alt}) {
    return (
        <div className="our-team-card">
            <img src={profilePicture} alt={alt} />
            <div>
                <b>{employee}</b>
                <p>{position}</p>
            </div>
        </div>
    )
}