import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from "@mui/material/Box";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const inputValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value);
                break;

            case 'password':
                setPassword(event.target.value);
                break;

            default:
                break;
        }
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    id="email"
                    label="Email"
                    type="text"
                    variant="outlined"
                    autoComplete="email"
                    onChange={inputValueChanged}
                    sx={{ mt: 4 }}

                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    autoComplete="current-password"
                    onChange={inputValueChanged}
                    sx={{ mt: 2 }}
                />

                <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                    onClick={() => {

                        console.log({ email, password });
                    }}>
                    LOGIN
                </Button>
            </Box>





        </Box>












    )

};

export default Login;