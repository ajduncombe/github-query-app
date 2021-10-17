import { React, useState } from 'react';
import { PropTypes } from 'prop-types';
import { TextField, Button, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function UserSearchInput({ username, onSubmit }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('Submitted!');
        e.preventDefault();
    }

    if (onSubmit) {
        ;
    } else {
        const submitButton = <Button style={{marginLeft:20}}
            variant="contained"
            size="large"
            disabled={!value}
            startIcon={<ArrowForwardIosIcon />}
            type="submit"
        >Search</Button>;
    }

    return (
        <form onSubmit={handleSubmit} style={{display:"flex", alignItems:"center"}}>
            <TextField
                required
                id="outlined-required"
                label="GitHub username"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    ),
                }}
                value={username}
                onChange={handleChange}
            />

            {submitButton}
        </form>
    );
}

UserSearchInput.propTypes = {
    username: PropTypes.string,
    onSubmit: PropTypes.func,
}

UserSearchInput.defaultProps = {

}