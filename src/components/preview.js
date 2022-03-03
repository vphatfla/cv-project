import React, {Component} from "react";
import EducationReview from "./educationPreview";
import ExperienceReview from "./experienceReview";
import uniqid from "uniqid";
class Preview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, address, phoneNumber, email, experience, education} = this.props;
        return(
            <div className="previewCtn">
            <div className="preview">
                
                <div className="personalInfoPreview">
                    <div className="leftSide">
                        <p>{address}</p>
                    </div>

                    <div className="midSide">
                        <p>{name}</p>
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
            <div class="previewButtons">
                <button>Load Example</button>
                <button>Clear</button>
                {/* work on the button*/}
            </div>
            
            </div>
        )
    }
}
export default Preview;