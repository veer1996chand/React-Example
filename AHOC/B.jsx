import React from 'react'
import Hoc from "./Hoc"
const B =(props)=>{
    
return(<div>
    <span onClick={props.handleChange}>Click</span>
    <h1>B : {props.add}</h1>
</div>);
}

export default Hoc(B, 20);