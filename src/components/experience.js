import React, {Component} from "react";
import InputFiledRender from "./inputFieldRender";

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
            description: "",
        }
    }

    updateValue =(stateVariable, valueFromChild) => {
        this.setState({
            [stateVariable]: valueFromChild,
        }, ()=>{
            // from inputfield
            const {position,company,city,from,to,description} = this.state;
            const exp = [
                position,company,city,from,to,description
            ]
            // to experience in index.js
            const {indexOfEx} = this.props;
            this.props.updateExperience(indexOfEx,exp);
        });
    }
    // use call back above because setstate is ayns
    // delete button function
    deleteButtonHandling = () => {
        const indexOfEx = this.props.indexOfEx;
        this.props.deleteExperienceButtonHandling(indexOfEx);
    }
    render(){
        const {position,company,city,from,to,description} = this.state;
        
        return(
            
            <div className="experience">
                <InputFiledRender nameOfInput="Position" stateVariable="position" updateValue={this.updateValue}/>
                <InputFiledRender nameOfInput="Company" stateVariable="company" updateValue={this.updateValue}/>
                <InputFiledRender nameOfInput="City" stateVariable="city" updateValue={this.updateValue}/>
                <InputFiledRender nameOfInput="From" stateVariable="from" updateValue={this.updateValue}/>
                <InputFiledRender nameOfInput="To" stateVariable="to" updateValue={this.updateValue}/>
                <InputFiledRender nameOfInput="Description" stateVariable="description" updateValue={this.updateValue}/>
                <button onClick={this.deleteButtonHandling}>Delete</button>
            </div>
        )
    }
}

export default Experience;