import React from 'react';
import {Project} from '../models/Project';
import {generateMockPortfolio} from '../data/mockPortfolio';
import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';

interface PortfolioProps {
    projectCount: number;
}

const Portfolio: React.FC<PortfolioProps> = ({projectCount = 10}) => {

    const projects: Project[] = generateMockPortfolio(projectCount); // Generate 10 mock projects

    return (
        <Grid container spacing={4}>
            {projects.map(project => (
                <Grid item key={project.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            style={{height: 140}}
                            image={project.imageUrl}
                            title={project.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Portfolio;
