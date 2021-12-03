import React, { useState } from 'react';

export default function HookDemo2(props) {
    // const [id, setId] = useState(0);
    
    return (
        
        <div>
            <input value={props.id} onChange={x => props.setId(x.target.value)} style={{width: '200px'}} />
        </div>
    )
}
