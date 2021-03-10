import React, { useRef } from 'react';
import API from '../../utils/API';
import AuthService from "../../services/auth.service";

function ProfileForm(props) {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const eName = useRef();
  const eRelation = useRef();
  const ePhone = useRef();
  const currentUser = AuthService.getCurrentUser();

  const getHomeId = () => {
      const HomeId = currentUser.id;
      return HomeId;
  }

  let HomeId = getHomeId();

  const saveUser = user => {
    let newUser = {
      userName: name.current.value,
      contactEmail: email.current.value,
      contactPhone: phone.current.value,
      emergencyName: eName.current.value,
      emergencyRelationship: eRelation.current.value,
      emergencyPhone: ePhone.current.value,
      HomeId: HomeId
    }
    console.log(newUser)
    API.saveUser(newUser).catch(err => console.error(err))
  }

  const handleBtnClick = async () => {
    await saveUser();
    props.hideForm();
    document.location.reload()
  }

  return (
    <div className="col-4 card mx-3 imitate-btn">
      <img className="profile-img-card" src="/assets/img/green-plus.png" />
      <label className="col-12 form-label bold mt-2">New Roommate</label>
      <input className="col-12 form-control my-1" type="text" placeholder="Name ..." required ref={name} />
      <input className="col-12 form-control mb-1" type="text" placeholder="example@email.com" required ref={email} />
      <input className="col-12 form-control mb-3" type="text" placeholder="555-555-5555" required ref={phone} />
      <label className="col-12 form-label bold">Emergency Contact Info</label>
      <input className="col-12 form-control my-1" type="text" placeholder="Contact name ..." required ref={eName} />
      <input className="col-12 form-control mb-1" type="text" placeholder="Relationship" required ref={eRelation} />
      <input className="col-12 form-control mb-2" type="text" placeholder="555-555-5555" required ref={ePhone} />
      <button className="btn btn-primary ml-auto" onClick={handleBtnClick}>Save</button>
    </div>
  )
}

export default ProfileForm;