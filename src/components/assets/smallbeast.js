import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

class smallbeast extends React.Component{

    constructor(props){
        super(props);
        this.state={
          NumberOfVotes=0
        }
        
        }
increaseNumOfVotes=()=>{this.setState({
    NumberOfVotes:this.state.NumberOfVotes +1
})}
render(){
    return(

        <>
        <p>{this.props.title}</p>
        <img onclick={this.increaseNumOfVotes} src={this.props.image_url} alt={this.props.title} width={300}/>
        <p>🌔 {this.state.NumberOfVotes}</p>
        </>
    )
}



}
export default smallbeast;