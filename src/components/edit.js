import React, {Component} from "react";
import Education from "./education";
import Experience from "./experience";
import InputFiledRender from "./inputFieldRender";
import Preview from "./preview";
import uniqid from "uniqid";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            title: "",
            address: "",
            phoneNumber: "",
            email: "",
            experience: [
                []
            ],
            education: [
                []
            ],
        }
    }

    updateValue = (stateVariable, valueFromChild) => {
        // called in child component
        
        this.setState({
            [stateVariable]: valueFromChild,
        })
        
    }
    // experience
    updateExperience = (indexOfEx, arrayFromChild) => {
        const newArray = this.state.experience;
        newArray[indexOfEx] = arrayFromChild;
        this.setState({
            experience: newArray
        })
    }

    addExperienceButtonHandling = () =>{
        const temp = this.state.experience;
        
        temp.push([]);
        temp[temp.length-1][6] = uniqid();
        this.setState(
            {
                experience: temp
            }
        )
    }

    deleteExperienceButtonHandling = (indexOfEx) => {
        const temp = this.state.experience;
        temp.splice(indexOfEx,1);

        this.setState({
            experience: temp
        })
    }
    // education (same with experience, different names)
    updateEducation = (indexOfEdu, arrayFromChild) => {
        const newArray = this.state.education;
        newArray[indexOfEdu] = arrayFromChild;
        this.setState({
            education: newArray
        })
        
    }

    addEducationButtonHandling = () => {
        const temp = this.state.education;

        temp.push([]);
        this.setState({
            education: temp
        })
    }

    deleteEducationButtonHandling = (indexOfEdu) => {
        const temp = this.state.education;

        temp.splice(indexOfEdu,1);

        this.setState({
            education: temp
        })
    }
    
    render(){
        const {name, title,address,phoneNumber,email, experience, education} = this.state;
        
        const temp = experience;
        temp[0][6] = uniqid();
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
                        {experience.map( (ar, index) => {
                            <Experience key={ar[6]} indexOfEx={index} updateExperience={this.updateExperience}
                            deleteExperienceButtonHandling={this.deleteExperienceButtonHandling}/>
                            
                        })}
                        <button onClick={this.addExperienceButtonHandling}>Add Experience</button>                        
                </div>
                
                <div className="educationInput">
                    {education.map( (ar,index) => <Education key={index} indexOfEdu={index}
                    updateEducation={this.updateEducation} deleteEducationButtonHandling={this.deleteEducationButtonHandling} />)}
                    <button onClick={this.addEducationButtonHandling}>Add Education</button>
                </div>
            </div>
            <Preview 
            {...{name, title, address,phoneNumber, email, experience, education}}/>
            </div>
        )
    }
}

export default Edit;