import React from "react";
import Beast from './Beast';
class Main extends React.Component{

    render(){

        

  let hornedbeast=[{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },
  
  {
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a creepy unicorn head mask",
    "keyword": "unicorn", 
    "horns": 1
}] 
    

return(
    <main>
    
  <Beast title={hornedbeast[0].title} keyword={hornedbeast[0].keyword} horns={'horns : '+hornedbeast[0].horns} description={hornedbeast[0].description} image_url={hornedbeast[0].image_url}  />
  <Beast title={hornedbeast[1].title} keyword={hornedbeast[1].keyword} horns={'horns : '+ hornedbeast[1].horns} description={hornedbeast[1].description} image_url={hornedbeast[1].image_url} />
  <Beast title={hornedbeast[2].title} keyword={hornedbeast[2].keyword} horns={'horns : '+ hornedbeast[2].horns} description={hornedbeast[2].description} image_url={hornedbeast[2].image_url} />
</main>
    )

}
}


export default Main;