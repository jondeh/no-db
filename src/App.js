import React, {Component} from 'react';
import './App.css';
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      header: 'header-container',
      body: 'body',
      highlight: '#fdbafd',
      chordPic: 'chord'
    }
  }

  updateStyle = () => {
    if(this.state.header === "header-container"){
        this.setState({
          header: 'header-container2',
          body: 'body2',
          highlight: 'darkgreen',
          chordPic: 'chord2'
        })}
        else if(this.state.header === "header-container2"){
            this.setState({
              header: "header-container",
              body: "body",
              highlight: '#fdbafd',
              chordPic: 'chord'
          })
        }
        console.log(this.state.header)
} 

  render(){
  return (
    <div className="App">
      <Header 
        headerStyle={this.state.header}/>
      <Body 
        headerStyle={this.state.header}
        bodyStyle={this.state.body}
        updateStyle={this.updateStyle}
        updateHighlight={this.state.highlight}
        chordPicUpdate={this.state.chordPic}/>
      <Footer 
        footerStyle={this.state.header}/>
    </div>
  );
  }
}

export default App;
