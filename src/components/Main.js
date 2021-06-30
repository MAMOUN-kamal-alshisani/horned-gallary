import React from "react";
import Beast from './Beast';
import horned from './horned.json';
import Form from 'react-bootstrap/Form';
class Main extends React.Component{
constructor(){

super();
this.state={horns:0}

}
ImgByHorn(value){
  this.setState({horns:value})
}      
  render(){

        



    return(

   

    <div className="main">

<Form>
  <Form.Group className="forms" >
    <Form.Label>select by horns</Form.Label>
    <Form.Control as="select" onChange={event=>{this.ImgByHorn(Number(event.target.value))}} >
    <option>all</option>
      <option value="1">one-horn</option>
      <option value="2">two-horns</option>
      <option value="3">three-horns</option>
      <option value="100">hundred-horns</option>
    </Form.Control>
  </Form.Group>
</Form>

    {horned.map((item,index)=>{
      return(
    
      <Beast title ={item.title} description={item.description} image_url={item.image_url} key={index} horns={item.horns}></Beast>
      )
    })}
 
      </div>
      )
      
  
    

  }

  }

export default Main;