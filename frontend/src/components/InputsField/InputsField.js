import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import {createMessage} from '../../store/actions/actions';
import TextField from '@mui/material/TextField';


const InputsField = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState({
        author: '',
        message: '',
    });

    const onInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        setText(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSendMessage = async e => {
        e.preventDefault();

        try {
            await dispatch(createMessage({ ...text }));
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Grid container mt={2} justifyContent='center' component="form" onSubmit={onSendMessage}>
            <TextField
                required
                label="Author"
                variant="outlined"
                type="text"
                name='author'
                value={text.author}
                onChange={onInputChange}
            />
            <TextField
                required
                label="Message"
                variant="outlined"
                type="text"
                name='message'
                value={text.message}
                onChange={onInputChange}
                sx={{ margin: '0 10px' }}
            />
            <Button
                variant="outlined"
                type="submit"
            >
                Send
            </Button>
        </Grid>
    )
}

export default InputsField;
