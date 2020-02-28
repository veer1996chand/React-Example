import React from 'react'
import Hoc from "./Hoc"
const A =(props)=>{
return(<div>
    <span onClick={props.handleChange}>Click</span>
    <h1>A : {props.add}</h1>
</div>);
}

export default Hoc(A,10);

