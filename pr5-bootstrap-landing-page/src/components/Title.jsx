const Title = ({title, desc}) => {
    return (
        <div className="title">
            <h2 className="text-center">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Title