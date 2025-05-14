const PortCard = (props) => {
    return (
        <div className="col-4">
            <div className="">
                <div className="portCard">
                    <div className={`card-body3 ${props.effect} text-center`}>
                        <h4 className="card-title text-white fw-semibold">{props.title}</h4>
                        <p className="card-text my-4">{props.desc}</p>
                        <img src={props.img} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortCard