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
                <p>{univeristy}</p>
                <p>{city}</p>
                <p>{degree}</p>
                <p>{from}</p>
                <p>{to}</p>
            </div>
        )
    }
}

export default EducationReview;