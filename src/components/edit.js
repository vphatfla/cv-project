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
        this.setState(
            {
                experience: temp
            }
        )
    }

    deleteExperienceButtonHandling = (indexOfEx) => {
        let temp = this.state.experience;
        temp[indexOfEx] = 0;
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

        temp[indexOfEdu] =0;

        this.setState({
            education: temp
        })
    }
    
    render(){
        const {name, title,address,phoneNumber,email, experience, education} = this.state;
        
        
        return(
            <div className="ctnOutSide">
            <div className="edit">
                <div className="personalInfoInput">
                    <h2>Personal Information</h2>
                    <InputFiledRender nameOfInput="Name" stateVariable="name" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Title" stateVariable="title" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Email" stateVariable="address" updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Phone number" stateVariable="phoneNumber"  updateValue={this.updateValue}/>
                    <InputFiledRender nameOfInput="Address" stateVariable="email"  updateValue={this.updateValue}/>
                </div>  

                <div className="experienceInput">
                    <h1>____________________</h1>
                    <h2>Experience</h2>
                        {experience.map( (ar, index) => 
                        {
                            if (ar!== 0) return <Experience key={index} indexOfEx={index} updateExperience={this.updateExperience}
                            deleteExperienceButtonHandling={this.deleteExperienceButtonHandling}/>
                            return false;
                        }
                        )}
                        <button onClick={this.addExperienceButtonHandling}>Add Experience</button>                        
                </div>
                
                 <div className="educationInput">
                    <h1>____________________</h1>
                    <h2>Education</h2>
                    {education.map( (ar,index) => 
                    {
                    if (ar!==0) return <Education key={index} indexOfEdu={index}
                    updateEducation={this.updateEducation} deleteEducationButtonHandling={this.deleteEducationButtonHandling} />
                    return false;
                    }
                    )}
                    
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