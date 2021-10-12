import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { fetchMessages } from '../../store/actions/actions';

const Comments = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <Grid container justifyContent='center' mt={3}>
            <Grid item>
                <Paper>
                    <List sx={{ width: '100%', minWidth: 500, bgcolor: 'background.paper'}}>
                        {messages.map(msg => (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={msg.datetime}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {msg.author}
                                                </Typography>
                                                {` — ${msg.message}`}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Comments;
