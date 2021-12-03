import React,{useState} from 'react';
import Demo1 from './HookDemo1';
import Demo2 from './HookDemo2';

export default function Home() {

const [id, setId] = useState(0);
    return (
        <div>
           <Demo1 id={id}/> 
           <Demo2 id={id} setId={(x) => setId(x)}/> 
        </div>
    )
}
