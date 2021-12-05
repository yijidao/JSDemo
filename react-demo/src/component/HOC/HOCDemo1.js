import React from 'react';

export default function HOCDemo1(props) {
    return (
        <div>
            <ul>
                {props.item.map(x => <li>{x}</li>)}
            </ul>
        </div>
    )
}
