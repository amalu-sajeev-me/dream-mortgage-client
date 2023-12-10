import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Divider, Link, Typography } from "@mui/material";
import React from "react";

interface IServiceViewCardProps {
    title: string;
    description?: string;
    buttonIsLink?: string;
    darkTheme?: boolean;
}

export const ServiceViewCard: React.FC<IServiceViewCardProps> = ({
    title, buttonIsLink, description, darkTheme
}) => {
    return (
        <>
            <Card
                variant="elevation"
                elevation={2}
                sx={{
                    maxWidth: '300px',
                    position: 'relative',
                    pb: '2rem',
                    backgroundColor: darkTheme ? 'var(--duck-blue)' : 'blanchedalmond',
                    color: darkTheme ? 'wheat': 'initial'
                }}
            >
                <CardHeader title={title} />
                <Divider />
                <CardContent>
                    <Typography variant="body2" sx={{color: darkTheme? 'wheat': 'grey'}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActionArea sx={{position: 'absolute', bottom: '0', color: 'red'}}>
                    <CardActions>
                        {
                            (!buttonIsLink)
                                ? <Button size="small">Appl now</Button>
                                : <Link href={buttonIsLink} sx={{color: darkTheme? 'wheat': 'initial'}}>Learn More</Link>
                        }
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    );
}