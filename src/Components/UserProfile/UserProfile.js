import React from 'react';

const userProfile = props => {
  let classes = [props.color, "UserProfile", "cardDiv"];
  return (
    <div className={classes.join(" ")}>
      <div className="imgDiv">
        <img src={props.pic} alt="profile picture" />
      </div>
      <h2>{props.name}</h2>
      <div className="bio">
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

export default userProfile;