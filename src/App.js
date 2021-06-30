import React from 'react';
//@ts-ignore
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beast from './components/Beast';

class App extends React.Component{
render(){

  return(
    
   <>

<Header/>
    <Main/>
    <Beast/>
    <Footer/>
  
    </> 
  )
}

}
export default App;