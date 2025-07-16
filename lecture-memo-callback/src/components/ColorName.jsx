const ColorName = ({color, handleRemove}) => {
    console.log("render");
    return (
        <div>
            <p>{color.name}</p>
            <button onClick={()=>handleRemove(color.id)}>Remove</button>
        </div>
    )
}

export default ColorName