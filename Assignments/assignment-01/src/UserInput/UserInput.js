import React from 'react';

const userInput = (props) => {
    const style = {
        marginTop: '20px',
        border: '2px solid red'
    }
    return  <input  
                type="text"
                style={style}
                onChange={props.changed}
                value={props.currentName}/>
}

export default userInput;