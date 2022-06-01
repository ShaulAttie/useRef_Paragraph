

function Name03(props) {

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input id='name'
                placeholder="first & last name"
                pattern="^[a-zA-Z]+ [a-zA-Z]+$" 
                onChange={props.onChange}/>
        </div>

    );
};

export default Name03