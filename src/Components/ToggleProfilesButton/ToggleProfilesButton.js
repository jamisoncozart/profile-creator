import React from 'react';

const ToggleProfilesButton = props => {
  return (
    <div>
      <button onClick={props.click} type="submit" className="submitButton">Create Profile</button>
    </div>
  )
}

export default ToggleProfilesButton;