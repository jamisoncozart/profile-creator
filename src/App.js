import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm/UserForm';
import UserProfile from './Components/UserProfile/UserProfile';

class App extends Component {

  state = {
    formName: "Your Name",
    formBio: "Tell us about yourself...",
    formPic: "https://www.netclipart.com/pp/m/244-2441803_profile-pic-icon-png.png",
    formColor: "greenProfile"
  }

  formNameChangeHandler = event => {
    this.setState({
      formName: event.target.value
    });
  }

  formBioChangeHandler = event => {
    this.setState({
      formBio: event.target.value
    });
  }

  formPicChangeHandler = event => {
    this.setState({
      formPic: event.target.value
    });
  }

  formColorChangeHandler = event => {
    this.setState({
      formColor: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Profile Creator</h1>
        <div className="row">
          <UserForm 
            nameChanged={this.formNameChangeHandler} 
            name={this.state.formName} 
            bioChanged={this.formBioChangeHandler}
            bio={this.state.formBio}
            picChanged={this.formPicChangeHandler}
            pic={this.state.formPic}
            colorChanged={this.formColorChangeHandler}
            color={this.state.formColor} />
          <UserProfile 
            name={this.state.formName}
            bio={this.state.formBio}
            pic={this.state.formPic}
            color={this.state.formColor} />
        </div>
      </div>
    );
  }
}

export default App;
