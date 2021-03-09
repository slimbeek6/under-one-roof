import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";
import AuthService from "../services/auth.service";

const style = {
  logo: {
    height: '200px',
    objectFit: 'contain'
  }
}

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [displayForm, setDisplayForm] = useState(false);



  const hideForm = () => {
    setDisplayForm(false)
  }

  const showForm = () => {
    setDisplayForm(true)
  }

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
        {displayForm ? <ProfileForm hideForm={hideForm} /> : <ProfileCard showForm={showForm} /> }
      </main>
    </div>
  );
};

export default Profile;