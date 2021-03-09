import React from 'react';

function ProfileCard(props) {
  return (
    <>
      <h2 className="col-12 text-center mt-4 display-4 purple bold">Who are you?</h2>

      <div className="col-3 card mx-3 imitate-btn">
        <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <h2 className="text-center mt-3">Shaun</h2>
      </div>

      <div className="col-3 card mx-3 imitate-btn">
        <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <h2 className="text-center mt-3">Ryan</h2>
      </div>

      <div className="col-3 card mx-3 imitate-btn">
        <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <h2 className="text-center mt-3">Jordan</h2>
      </div>

      <div className="col-3 card mx-3 imitate-btn" onClick={props.showForm}>
        <img className="profile-img-card" src="/assets/img/green-plus.png" />
        <h2 className="text-center mt-3">Add New Roommate</h2>
      </div>
    </>
  )
}

export default ProfileCard;