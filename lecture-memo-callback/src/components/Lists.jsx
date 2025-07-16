import { memo } from "react"
import ColorName from "./ColorName"

const Lists = ({ colors, handleRemove }) => {
    return (
        <div>
            <h2>Lists</h2>
            {
                colors.map((color)=>{
                    return <ColorName color={color} key={color.id} handleRemove={handleRemove} />
                })
            }
        </div>
    )
}

export default memo(Lists)