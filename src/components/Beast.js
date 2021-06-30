import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Imgselect from "./Imgselect";

class Beast extends React.Component{
   
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            numberOFvotes: 0,
            show: false
        }
        
    }
  

    increaseVotes = () => {
        this.setState({
            numberOFvotes: this.state.numberOFvotes + 1
        })
    }

    changeState = () => {
        let currentState = this.state.show;
        if (currentState === false) {
            this.setState({
                show: true
            })
        } else if (currentState === true) {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            <>



                <Imgselect show={this.state.show} changeState={this.changeState} title={this.props.title} description={this.props.description} image_url={this.props.image_url}  horns={this.props.horns}></Imgselect>
                <Card style={{ width: '18rem' }} onClick={this.changeState}  ref={this.wrapper}>{this.props.children}
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                         <h5>horns :  {this.props.horns}</h5> 
                        </Card.Text>
                        <Card.Text>
                        👹 {this.state.numberOFvotes}
                        </Card.Text>
                     
                    </Card.Body>
                </Card>
                <Button onClick={this.increaseVotes}>Vote</Button>
               

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