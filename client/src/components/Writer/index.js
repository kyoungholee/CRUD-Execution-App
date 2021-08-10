import React from 'react';

function Writer({title, onClick }) {
    return (
        <div onClick = {onClick} className = 'writer-block'>
            <div> {title}</div>
        </div>
    );
}


export default Writer;