import "../nested-components/ProfileCard.css";

const ShowList = (props) => {
    const handleData = (e, data) => {
        console.log(data);
    };

    // using function
    // function handleData(e, data) {
    //     console.log(data);
    // }
    return (
        <>
            <div className="card">
                <img
                    src={props.imageUrl}
                    alt="Nature image"
                    style={{ width: "100%" }}
                />
                <h1>{props.name}</h1>
                <p className="title">{props.title}</p>
                <p>{props.description}</p>
                <div style={{ margin: "24px 0" }}>
                    <a href="#">
                        <i className="fa fa-dribbble"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
                {/* first way of declare event with parameters */}
                <p><button onClick={(e) => handleData(e, props)}>{props.button}</button></p>
                {/* second way declare events with parameters */}
                {/* <p>
                    <button
                        onClick={function (e) {
                            return handleData(e, props);
                        }}
                    >
                        {props.button}
                    </button>
                </p> */}
            </div>
        </>
    );
};

export default ShowList;
