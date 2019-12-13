import React, { useState } from 'react';
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfActions";


const SmurfForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [height, setHeight] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf({
            name: name,
            age: age,
            height: height,
            id: Date.now()
        })
        setName("")
        setAge("")
        setHeight("")
    }

    const handleName = event => {
        setName(event.target.value)
    }

    const handleAge = event => {
        setAge(event.target.value)
    }

    const handleHeight = event => {
        setHeight(event.target.value)
    }

    return (
        <div>
            <h3>Add A New Smurf!</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    onChange={handleName}
                    value={name}
                />
                <label>Age:</label>
                <input
                    value={age}
                    onChange={handleAge}
                />
                <label>Height:</label>
                <input
                    value={height}
                    onChange={handleHeight}
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);