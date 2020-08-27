import React from 'react';
import './style.css';

class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedColor: "white"
        }
    }
    changebg = (event) => {
        this.setState({
            selectedColor:event.target.value
        })

    }

    render=()=>{
        return (
            <div style={{
                backgroundColor: this.state.selectedColor

            }} className="bg">
                    <div className="input-container">
                        <h1>Choose a background color:</h1>
                        <input onChange={this.changebg} type='color'/>
        <p>The color picked is : {this.state.selectedColor}</p>
                    </div>
            </div>
        )
    }

}
export default Background;