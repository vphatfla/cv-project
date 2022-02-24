import React, {Component} from "react";
import EducationReview from "./educationPreview";
import ExperienceReview from "./experienceReview";
import uniqid from "uniqid";
class Preview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, title, address, phoneNumber, email, experience, education} = this.props;
        return(
            <div className="preview">
                <div className="personalInfoPreview">
                    <div className="namePreview">
                        <h1>{name} | </h1>
                        <h3>{title}</h3>
                    </div>
                    <div className="underNamePreview">
                        <h6>{email}</h6>
                        <h6>{phoneNumber}</h6>
                        <h6>{address}</h6>
                        
                    </div>
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
        )
    }
}
export default Preview;