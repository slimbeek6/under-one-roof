import React from "react";
import AuthService from "../services/auth.service";

const style = {
  logo: {
    height: '200px',
    objectFit: 'contain'
  }
}

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron yellowBG">
        <div className="row">
          <div className="col-4 d-flex">
            <img className="mx-auto" src="/assets/img/Brand/UnderOneRoof.png" style={style.logo} />
          </div>
          <div className="col-8 pt-5">
            <h4>Welcome home!</h4>
            <h2 className="display-3">588 Lombard St.</h2>
          </div>
        </div>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
      <main className="row justify-content-center">
        <h2 className="col-12 text-center mt-4 display-4 purple bold">Who are you?</h2>

        <div className="col-3 card mx-3">
          <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <h2 className="text-center mt-3">Shaun</h2>
        </div>

        <div className="col-3 card mx-3">
          <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <h2 className="text-center mt-3">Ryan</h2>
        </div>

        <div className="col-3 card mx-3">
          <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <h2 className="text-center mt-3">Jordan</h2>
        </div>

        <div className="col-3 card mx-3">
          <img className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <h2 className="text-center mt-3">Add New Roommate</h2>
        </div>
      </main>
    </div>
  );
};

export default Profile;