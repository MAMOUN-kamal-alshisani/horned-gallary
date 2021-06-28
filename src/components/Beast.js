import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Beast extends React.Component{
   
      constructor(props){
        super(props);
        this.state={
          NumberOfVotes : 0
        }
        
        }
    increaseNumOfVotes=()=>{this.setState({
    NumberOfVotes:this.state.NumberOfVotes +1
    })}
    render(){
    return(
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>horned beasts</Card.Title>
        <Card.Text>
         {this.props.description}
        </Card.Text>
        <Card.Text>
        👹 {this.state.NumberOfVotes}
        </Card.Text>
        <Button onClick={this.increaseNumOfVotes}variant="primary">click to vote</Button>
      </Card.Body>
    </Card>
    </>
    )
    }
    }
//     render(){

//         return(
// <div>
//                 <h3>{this.props.title}</h3>
//                 <img src={this.props.image_url} alt="" title=""></img>
//                 <p>{this.props.description}</p>
//                 <h3>{this.props.keyword}</h3>
//                 <h3>{this.props.horns}</h3>
//             </div>
//   )
//     }
// }

export default Beast;