import Button from "./Buttons.jsx";
import Images from "./Images.jsx";

const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Images img={props.img} />
            <div className="card-body">
                <h5>{props.cardName}</h5>
                <p className="card-text">{props.desc}</p>
                <Button btnName={props.cardName} color={props.color}></Button>
            </div>
        </div>
    )
}

export default Card;