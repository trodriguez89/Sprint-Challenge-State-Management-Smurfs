import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf} from "../actions/smurfActions";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const CardStyles = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    height: 200px;
    width: 150px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #62cdfd;
    
`

const SmurfList = props => {

    useEffect(() => {
        props.getSmurf();
    },[])
    
    return (
        <div>
        <h2>Smurf it Up!</h2>
        <MainDiv>
        {props.smurfs.map(item => (
            <CardStyles>
            <h3>Name: {item.name}</h3>
            <h4>Age: {item.age}</h4>
            <h4>Height: {item.height}</h4>
            </CardStyles>
        ))}
        </MainDiv>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfList);