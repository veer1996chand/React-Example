import React, { Component } from 'react'

const Hoc = (Men,shoot) => {

    class newName extends Component {
        constructor() {
            super();
            this.state = {
                add: 0
            }
        }

        handleChange = () => {
            this.setState({add:this.state.add+shoot})
        }
        render() {
            
            
            return (<>
                <Men add={this.state.add} handleChange={this.handleChange} /></>);

        }
    }
    return newName

}

export default Hoc;