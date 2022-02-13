import React, {Component} from "react";
import Experience from "./experience";
import InputFiledRender from "./inputFieldRender";
import Preview from "./preview";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            title: "",
            address: "",
            phoneNumber: "",
            email: "",
            experience: [],
        }
    }

    updateValue = (stateVariable, valueFromChild) => {
        // called in child component
        
        this.setState({
            [stateVariable]: valueFromChild,
        })
        
    }

    updateExperience = (indexOfEx, arrayFromChild) => {
        const newArray = this.state.experience.slice();
        newArray[indexOfEx] = arrayFromChild;
        this.setState({
            experience: newArray
        }, () => {
            console.table(this.state.experience)
        })
    }
    render(){
        const {name, title,address,phoneNumber,email,
        experience} = this.state;
        let indexOfEx = 0;
        return(
            <div>
            <div className="edit">
                <div className="personalInfoInput">
                    <InputFiledRender nameOfInput="Name" stateVariable="name" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Title" stateVariable="title" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Email" stateVariable="address" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Phone number" stateVariable="phoneNumber"  updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Address" stateVariable="email"  updateValue={this.updateValue}/>
                </div>
                <div className="experienceInput">
                    <Experience experience={experience} indexOfEx={indexOfEx} updateExperience={this.updateExperience} />
                    <button>Add Expericne</button>
                </div>
                
            </div>
            <Preview 
            {...{name, title, address,phoneNumber, email, experience}}/>
            </div>
        )
    }
}

export default Edit;