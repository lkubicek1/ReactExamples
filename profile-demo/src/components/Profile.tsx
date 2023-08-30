import React from 'react';
import { ProfileContent } from '../models/ProfileContent';

interface ProfileProps {
    profileContent: ProfileContent;
}

const Profile: React.FC<ProfileProps> = ({ profileContent }) => {
    return (
        <div style={{ margin: '20px' }}>
            <img src={profileContent.profileImage} alt="Profile" width="150" />
            <h2>{profileContent.name}</h2>
            <h3>{profileContent.jobTitle}</h3>
            <p>{profileContent.bio}</p>
            <a href={`mailto:${profileContent.email}`}>{profileContent.email}</a>
        </div>
    );
}

export default Profile;
