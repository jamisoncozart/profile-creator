import React from 'react';

const userForm = props => {
  return (
    <div className="UserForm cardDiv">
      <h2>User Form</h2>
      <hr />
      <form>
        <div className="form-input">
          <label>Name:</label>
          <input onChange={props.nameChanged} type="text" name="name" value={props.name} id="name" placeholder="John Smith"/>
        </div>
        <div className="form-input">
          <label>Bio:</label>
          <input onChange={props.bioChanged} type="text" name="bio" id="bio" value={props.bio} placeholder="I am an English soldier, explorer, colonial governor, Admiral of New England, and author. I play an important role in the establishment of the colony at Jamestown, Virginia, the first permanent English settlement in America in the early 17th century."/>
        </div>
        <div className="form-input">
          <label>Picture:</label>
          <input onChange={props.picChanged} type="text" name="picture" id="picture" value={props.pic} placeholder="https://yourimage.com/.jpg" />
        </div>
        <div className="form-input">
          <label>Color: </label>
          <select onChange={props.colorChanged} id="colors">
            <option value="greenProfile">Green</option>
            <option value="redProfile">Red</option>
            <option value="blueProfile">Blue</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default userForm;