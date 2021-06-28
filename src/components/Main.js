import React from "react";
import Beast from './Beast';
import horned from './horned.json';
class Main extends React.Component{

    render(){

        



return(
    <div className="main">
    {horned.map((item,index)=>{
      return(
      <Beast title ={item.title} description={item.description} image_url={item.image_url} key={index}></Beast>
      )
    })}
      </div>
      )
      
  /* <Beast title={hornedbeast[0].title} keyword={hornedbeast[0].keyword} horns={'horns : '+hornedbeast[0].horns} description={hornedbeast[0].description} image_url={hornedbeast[0].image_url}  />
  <Beast title={hornedbeast[1].title} keyword={hornedbeast[1].keyword} horns={'horns : '+ hornedbeast[1].horns} description={hornedbeast[1].description} image_url={hornedbeast[1].image_url} />
  <Beast title={hornedbeast[2].title} keyword={hornedbeast[2].keyword} horns={'horns : '+ hornedbeast[2].horns} description={hornedbeast[2].description} image_url={hornedbeast[2].image_url} />
</main> */
    

}
}


export default Main;