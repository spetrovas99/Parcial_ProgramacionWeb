import React,{Component} from 'react';
import './App.css';
import  data from "./Data.json"
import AllFilms from "./components/AllFilms.jsx"
import PeliInfo from './components/PeliInfo';

class App extends Component{
  state = {
    data: data, 
    peliInfo: null,
  }

  clickPeliHandler = (title) =>{
    const data = this.state.data.slice();
    const peliInfo = data.find(data => data.title === title);
    console.log(peliInfo);
    this.setState({peliInfo});
  }


  render(){
    if(this.state.peliInfo === null){
      return(
          <div className="App">
            <h1>STAR WARS</h1>
            <AllFilms data = {this.state.data} clickPeli = {this.clickPeliHandler}></AllFilms>
          </div>
      );
    }else{
      return(
        <div className = "AppInfo">
           <AllFilms data = {this.state.data} clickPeli = {this.clickPeliHandler}></AllFilms>
          <PeliInfo peliSelect={this.state.peliInfo}></PeliInfo>
        </div>
      );
    }
  }
}

export default App;