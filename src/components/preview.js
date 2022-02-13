import React, {Component} from "react";
import ExperienceReview from "./experienceReview";

class Preview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, title, address, phoneNumber, email, experience} = this.props;
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

                <div className="experience">
                    {
                        experience.map((exp) => 
                            <ExperienceReview exp={exp} />
                    )
                    }
                </div>
            </div>
        )
    }
}
export default Preview;