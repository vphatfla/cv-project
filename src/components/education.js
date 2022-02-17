import React,{Component} from "react";
import InputFiledRender from "./inputFieldRender";

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            university: "",
            city: "",
            degree: "",
            from: "",
            to: "",
        }
        
    }
    updateValue =(stateVariable, valueFromChild) => {
        this.setState({
            [stateVariable]: valueFromChild,
        }, ()=>{
            // from inputfield
            const {university, city,degree,from,to} = this.state;
            const edu = [
                university, city,degree,from,to
            ]
            // to experience in index.js
            const {indexOfEdu} = this.props;
            this.props.updateEducation(indexOfEdu, edu);
        });
    }

    deleteButtonHandling = () => {
        const indexOfEdu = this.props.indexOfEdu;
        this.props.deleteEducationButtonHandling(indexOfEdu);
    }
    render(){
        const {university, city,degree,from,to} = this.state;
        return(
            <div className="education">
                <InputFiledRender nameOfInput="Univeristy" stateVariable="university" updateValue={this.updateValue} />
                <InputFiledRender nameOfInput="City" stateVariable="city" updateValue={this.updateValue} />
                <InputFiledRender nameOfInput="Degree" stateVariable="degree" updateValue={this.updateValue} />
                <InputFiledRender nameOfInput="From" stateVariable="from" updateValue={this.updateValue} />
                <InputFiledRender nameOfInput="To" stateVariable="to" updateValue={this.updateValue} />
                <button onClick={this.deleteButtonHandling}>Delete</button>
            </div>
        )
    } 

}

export default Education;