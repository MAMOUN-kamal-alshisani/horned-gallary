import React from "react";
class Beast extends React.Component{

    render(){

        return(
<div>
                <h3>{this.props.title}</h3>
                <img src={this.props.image_url} alt="" title=""></img>
                <p>{this.props.description}</p>
                <h3>{this.props.keyword}</h3>
                <h3>{this.props.horns}</h3>
            </div>
  )
    }
}

export default Beast;