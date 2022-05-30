import "./Paragraph.css"
import React from "react"

const Paragraph = React.forwardRef((props, ref) => {
    // console.log(props);
    // console.log(ref);
    return (
        <div className="paragraph">
            <h2 onClick={props.onClick} id={props.children[0]} ref={ref}>{props.children[0]}</h2>
            <p >{props.children[1]}</p>
        </div>
    )
})

export default Paragraph