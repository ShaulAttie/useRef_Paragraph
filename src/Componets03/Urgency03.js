
function Urgency03(props) {

    return (
        <>
            <div>
                <label htmlFor="urgency">Urgency:</label>
                <input className="slider" style={props.style} type="range" id="urgency" min="1" max="4" step="1" onChange={props.onChange} />
            </div>
            {props.urgLevel.map(elem => elem.level == props.value && <span className="urgspan" key={elem.id}>{elem.text}</span>)}
        </>
    );
};

export default Urgency03