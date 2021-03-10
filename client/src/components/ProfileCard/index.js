import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard(props) {
  return (
    <>
      <h6 className="col-12 text-center mt-4 display-4 blue">Add a Roommate or Click One</h6>
      {props.users.map(user => {
        return (
          <Link className="col-sm-8 col-md-5 col-lg-3 card mx-3 imitate-btn" to="/landing" key={user.id}>
            <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <h2 className="text-center mt-3">{user.userName}</h2>
          </Link>
        )
      })}
      <div className="col-sm-8 col-md-5 col-lg-3 card mx-3 imitate-btn" onClick={props.showForm}>
        <img className="profile-img-card" src="/assets/img/addUser/addUserICON-96.png" />
        <h2 className="text-center mt-3">Add New Roommate</h2>
      </div>
    </>
  )
}

export default ProfileCard;