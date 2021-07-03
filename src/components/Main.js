import React from "react";
import Beast from './Beast';
import horned from './horned.json';
import Form from 'react-bootstrap/Form';
class Main extends React.Component{
constructor(props){

super(props);
this.state={TheData: horned}

}
ShowFilteredImgs=(TheData)=>{

this.setState({TheData});

}
DisplayFilterdHorns=(event)=>{

let HornsNumber=Number(event.target.value);
let BeastImgs= horned;
if (HornsNumber){

  BeastImgs=horned.filter(item=>item.horns===HornsNumber);
}
console.log(BeastImgs);
this.ShowFilteredImgs(BeastImgs);
}

  render(){
    return(

   

    <div className="main">
<Form>
  <Form.Group className="forms" >
    <Form.Label>select by horns</Form.Label>
    <Form.Control as="select" onChange={this.DisplayFilterdHorns}>
    <option value="all">all</option>
      <option value="1">one-horn</option>
      <option value="2">two-horns</option>
      <option value="3">three-horns</option>
      <option value="100">wwooww</option>
    </Form.Control>
  </Form.Group>
</Form>

    {this.state.TheData.map((item,index)=>{
      return(
       
    
      <Beast title ={item.title} description={item.description} image_url={item.image_url} key={index} horns={item.horns}></Beast>
      )
    })}
 
      </div>
      )
      
  
    

  }

  }

export default Main;