import React,{Component} from "react";

class EducationReview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {edu} = this.props;
        const univeristy = edu[0];
        const city = edu[1];
        const degree = edu[2];
        const from = edu[3];
        const to = edu[4];
        return(
            <div>
                <div className="educationSection">
                <div className="topSide">
                    <div className="leftSide">
                        <p>{city}</p>
                    </div>

                    <p>{univeristy}</p>

                    <div className="rightSide">
                        <p>{from}-{to}</p>
                    </div>
                </div>
                <div className="botSide">
                    <p>{degree}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default EducationReview;