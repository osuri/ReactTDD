import React from 'react';
import PropTypes from 'prop-types';

const GussedWords = (props) => {
    let contents;
    if(props.guessedWords.length === 0){
       contents = 
            (<span data-test="guessword-instructions">
                try to guess word!
            </span>)
        

        
    }
    
    return(
        <div data-test="component-guessword">
            {contents}
        </div>
    )
}

GussedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessWord:PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired,
    })
).isRequired
}

export default GussedWords;