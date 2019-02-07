import React from 'react';
import {} from 'reactstrap';

const ProfilesList = ({ match }) => {
    return (
        <div>
        <p>{match.params.PrisonId}</p>
        </div>
    )
}

export default ProfilesList;