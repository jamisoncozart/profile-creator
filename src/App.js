import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm/UserForm';
import UserProfile from './Components/UserProfile/UserProfile';
import ToggleProfilesButton from './Components/ToggleProfilesButton/ToggleProfilesButton';

class App extends Component {

  state = {
    formName: "Your Name",
    formBio: "Tell us about yourself...",
    formPic: "https://www.netclipart.com/pp/m/244-2441803_profile-pic-icon-png.png",
    formColor: "greenProfile",
    showProfiles: false,
    profiles: [
      {id: "1", name: "Rick Sanchez", bio: "Wubba Lubba Dub Dub!!!", pic: "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4469093-screen%20shot%202015-03-25%20at%205.13.24%20pm%20copy.jpg", color: "greenProfile"},
      {id: "2", name: "Morty Smith", bio: "Ah geez, I don't know what to say?", pic: "https://www.superherodb.com/pictures2/portraits/10/050/11564.jpg?v=1578245132", color: "blueProfile"},
      {id: "3", name: "Summer Smith", bio: "This is like, a totally awesome site! Like, I will tell all my friends about this lol.", pic: "https://rickandmortystuff.com/wp-content/uploads/2019/05/sm3.jpg", color: "greenProfile"},
      {id: "4", name: "Beth Smith", bio: "Heart Surgeon who specializes in horses. Daughter to the smartest man in the multiverse. Mother to 2 lovely children.", pic: "https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20191122063320", color: "redProfile"}
    ]
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

  showProfilesHandler = event => {

    let newProfile = null;

    if(!this.state.showProfiles) {
      newProfile = {
        name: this.state.formName,
        bio: this.state.formBio,
        pic: this.state.formPic,
        color: this.state.formColor
      }
    }
    this.setState({
      profiles: (this.state.showProfiles ? [...this.state.profiles] : [...this.state.profiles, newProfile]),
      showProfiles: !this.state.showProfiles
    })
  }

  render() {
    let persons = null;

    if(this.state.showProfiles) {
      persons = this.state.profiles.map((profile, index) => (
        <div className="profile" key={index}>
          <UserProfile 
            name={profile.name}
            bio={profile.bio}
            pic={profile.pic}
            color={profile.color} />
        </div>
      ));
    } else {
      persons = (
        <div>
          <h1>React Profile Creator</h1>
          <div className="row">
            <UserForm 
              nameChanged={this.formNameChangeHandler} 
              name={this.state.formName === "Your Name" ? "" : this.state.formName} 
              bioChanged={this.formBioChangeHandler}
              bio={this.state.formBio === "Tell us about yourself..." ? "" : this.state.formBio}
              picChanged={this.formPicChangeHandler}
              pic={this.state.formPic === "https://www.netclipart.com/pp/m/244-2441803_profile-pic-icon-png.png" ? "" : this.state.formPic}
              colorChanged={this.formColorChangeHandler}
              color={this.state.formColor}
              click={this.showProfilesHandler}
              buttonText={"Create Profile"} />
            <UserProfile 
              name={this.state.formName}
              bio={this.state.formBio}
              pic={this.state.formPic}
              color={this.state.formColor} />
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="profilesRow">
          {persons}
          {this.state.showProfiles ? <ToggleProfilesButton className="createProfileButton" click={this.showProfilesHandler} buttonText={"Add New Profile"} /> : <p></p>}
        </div>
      </div>
    );
  }
}

export default App;
