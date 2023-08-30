import React from 'react';
import { ProfileContent } from '../models/ProfileContent';
import {Avatar, Grid, Paper, Typography} from "@mui/material";

interface ContactProps {
    profileContent: ProfileContent;
}

const Contact: React.FC<ContactProps> = ({ profileContent }) => {
    return (
        <Paper style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={4}>
                    <Avatar alt={profileContent.name} src={profileContent.avatarUrl} style={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4">{profileContent.name}</Typography>
                    <Typography variant="subtitle1">{profileContent.jobTitle}</Typography>
                    <Typography variant="body1">Email: {profileContent.email}</Typography>
                    <Typography variant="body1">Phone: {profileContent.phone}</Typography>
                    <Typography variant="body1">Address: {profileContent.address}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Contact;
