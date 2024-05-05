import './ProfileCard.css'

const ProfileCard = (props) => {

    return <>
        <div className="card">
            <img src={props.imageUrl} alt="Nature image" style={{ width: "100%" }} />
            <h1>{props.name}</h1>
            <p className="title">{props.title}</p>
            <p>{props.description}</p>
            <div style={{ margin: "24px 0" }}>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
            <p><button>{props.button}</button></p>
        </div>
    </>
}
export default ProfileCard;