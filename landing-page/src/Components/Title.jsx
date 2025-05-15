const Title = ({title, desc}) => {
    return (
        <div>
            <h2 className="text-center text-white fw-bold title">{title}</h2>
            <p className="text-center text-secondary mb-5 mt-3 text-max-800">{desc}</p>
        </div>
    )
}

export default Title