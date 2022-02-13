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
            <div>
                <p>{position}</p>
                <p>{company}</p>
                <p>{city}</p>
                <p>{from}</p>
                <p>{to}</p>
                <p>{description}</p>
            </div>
        )
    }
}

export default ExperienceReview;