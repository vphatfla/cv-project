import React, {Component} from "react";

class ExperienceReview extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {exp} = this.props;
        const position = exp[0];
        const company = exp[1];
        const city = exp[2];
        const from = exp[3];
        const to = exp[4];
        const description = exp[5];
        return(
            <div className="experienceSection">
                <div className="topSide">
                    <div className="leftSide">
                        <p>{position}</p>
                    </div>

                    <p>{company}</p>

                    <div className="rightSide">
                        <p>{from}-{to}</p>
                        <p>{city}</p>
                    </div>
                </div>
                <div className="botSide">
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default ExperienceReview;