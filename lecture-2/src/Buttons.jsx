const Button = (props) => {
    return (
        <button className={`btn btn-${props.color}`}>{props.btnName}</button>
    )
}

export default Button;