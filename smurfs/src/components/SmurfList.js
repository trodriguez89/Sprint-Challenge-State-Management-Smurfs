import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf} from "../actions/smurfActions";

const SmurfList = props => {
    useEffect(() => {
        props.getSmurf();
    },[])
    return (
        <div>
        <h2>Testing!</h2>
        {props.smurfs.map(item => (
            <div>
            <h3>{item.name}</h3>
            <h4>{item.age}</h4>
            <h4>{item.height}</h4>
            </div>
        ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfList);