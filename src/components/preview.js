import React, {Component} from "react";
import EducationReview from "./educationPreview";
import ExperienceReview from "./experienceReview";
import print from "../printPDF";
class Preview extends Component{
    constructor(props){
        super(props);
    }

    loadExampleButtonHandling = () => {
        this.props.setExampleData();
    }
    
    clearDataButtonHandling = () => {
        this.props.clearData();
    }

    generatePDFButtonHandling = () =>{
        print();
    }
    render(){
        const {name, address, phoneNumber, email, experience, education} = this.props;
        const {setExampleData} = this.props;
        return(
            <div className="previewCtn">
            <div className="preview">
                
                <div className="personalInfoPreview">
                    <div className="leftSide">
                        <p>{address}</p>
                    </div>

                    <div className="midSide">
                        <p id="name">{name}</p>
                    </div>

                    <div className="rightSide">
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </div>
                </div>

                <div className="breaker">
                    <p className="titleSection">Experience</p>
                    <p className="lineBreaker">____________________</p>
                </div>
                <div className="experiencePreview">
                    {
                        experience.map((exp, index) => {
                            if (exp !== 0 ) return <ExperienceReview exp={exp} key={index}/>
                            return false;
                        }
                    )
                    }
                </div>

                <div className="breaker">
                    <p className="titleSection">Education</p>
                    <p className="lineBreaker">____________________</p>
                </div>
                <div className="educationPreview">
                    {
                        education.map( (edu, index) =>  {
                            if (edu!==0) return <EducationReview edu={edu} key={index}/>
                            return false;
                    }
                    )
                        
                    }
                </div>
            </div>
            <div className="previewButtons">
                <button onClick={this.loadExampleButtonHandling}>Load Example</button>
                <button onClick={this.clearDataButtonHandling}>Clear</button>
            </div>
            <div className="pdfButton">
                <button onClick={this.generatePDFButtonHandling}>Generate PDF</button>
            </div>
            </div>
        )
    }
}
export default Preview;