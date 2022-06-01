

function Problems03(props) {

    return (
        
            <select id="problem" onChange={props.onChange}>
                {props.value.map(elem => <option value={elem.problem || elem} key={elem.id || elem}>{elem.problem || elem}</option>)}
            </select>
        
    );
};

export default Problems03
