import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

const style = {
  hero: {
    height: '500px',
    objectFit: 'contain'
  }
}

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="row d-flex">
        <img className="col-12 mx-auto my-5" src="/assets/img/Brand/UnderOneRoof.png" style={style.hero}></img>
        <h2 className="col-12 text-center purple">Welcome to</h2>
        <h1 className="col-12 text-center blue logo display-3">UnderOneRoof</h1>
      </header>
    </div>
  );
};

export default Home;