const Title = ({title, desc}) => {
    return (
        <div className="title">
            <h2 className="text-center">{title}</h2>
            <p className="text-center my-4">{desc}</p>
            <span className="lines d-flex"></span>
        </div>
    )
}

export default Title