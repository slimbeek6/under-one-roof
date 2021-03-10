import React from 'react';

function ContactCard(props) {
    return (
        <>
            <h2 className="col-12 large text-center mt-4 display-4 blue bold">Roommate Contact List</h2>
            {props.users.map(user => {
                return (
                    <div className="col-lg-3 col-md-4 card mx-3" key={user.id}>
                        <div className="blueBG">
                            <img className="img-fluid profile-img-card" src="/assets/img/Profile/profileICON-96.png" />
                            <h2 className="medium text-center mt-3">{user.userName}</h2>
                        </div>
                            <p className="medium text-center mt-3">{user.contactPhone}</p>
                            <p className="medium text-center mt-3">{user.contactEmail}</p>
                            <p className="medium text-center mt-3"><em>Emergency Contact:</em></p>
                            <p className="medium text-center mt-3">{user.emergencyName}</p>
                            <p className="medium text-center mt-3">{user.emergencyRelationship}</p>
                            <p className="medium text-center mt-3">{user.emergencyPhone}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ContactCard;