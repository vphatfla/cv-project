import React, {Component} from "react";

class InputFiledRender extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: "",
        }
    }
    handleChange = (e) => {
        const {stateVariable} = this.props;
        if (stateVariable) this.props.updateValue(stateVariable, e.target.value); // update state of edit.js

        // custome update alue for experience js
        const {indexOfEx, indexOfVariable} = this.props;
        if (indexOfEx) {
            this.props.customUpdateValue(indexOfEx,indexOfVariable, e.target.value);
        }
        this.setState({
            value: e.target.value
        })
        
        
        
    }
    render(){
        const {nameOfInput} = this.props;
        
        return(
            <div>
                <form>
                    <label>
                        {nameOfInput}
                        <input type='text' id="personalInput" name={nameOfInput} onChange={this.handleChange}
                        value={this.state.value}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default InputFiledRender;