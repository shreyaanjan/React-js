import Images from "./Images.jsx";

const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card " >
                <div className="card-image">
                    <Images img={props.img} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href={`${props.link}`} className={`btn alert alert-${props.color} spinner-border btn-${props.color}`}></a>
                </div>
            </div>

        </div>
    )
}

export default Card;