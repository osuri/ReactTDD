import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    const successMsg = {
        'color' :  'green'
    }
    return(
        <div data-test="component-congrats">
            
               
            {props.success 
            ? 
                <p data-test="success-msg" style={successMsg}>Congratulations! you have gussed the word.</p>
            : <p></p>}

        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;