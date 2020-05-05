import React from 'react';

function List (props){
    return(
        <ul>
            {
                props.items.map((item, id) => <li key={id}> {item} </li>)
            }
        </ul>
    )
}

export default List;