import React from 'react';

function ContactCard(props) {
    return (
        <>
            {props.list.map(list => {
                return (
                    <div className="col-xl-3 col-lg-5 col-sm-7 card mx-3" key={list.id}>
                        <div className="blueBG white">
                            <img className="img-fluid profile-img-card" src="/assets/img/ProfileCard/profileCardICON-96.png" />
                            <h2 className="medium text-center mt-3">{list.userName}</h2>
                        </div>
                            <p className="medium text-center mt-3">{list.contactPhone}</p>
                            <p className="medium text-center mt-3">{list.contactEmail}</p>
                            <p className="medium text-center mt-3"><strong>Emergency Contact:</strong></p>
                            <p className="medium text-center mt-3">{list.emergencyName}</p>
                            <p className="medium text-center mt-3">{list.emergencyRelationship}</p>
                            <p className="medium text-center mt-3">{list.emergencyPhone}</p>
                    </div>
                    
                )
            })}
        </>
    )
}

export default ContactCard;