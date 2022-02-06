import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip'
import Emitter, { EmitterEvents } from '../../services/emitter';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const loginClicked = () => Emitter.get().emit(EmitterEvents.LoginClicked);
    const appName = process.env.appName;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {appName}
                </Typography>


                <Tooltip title="Click to login" sx={{ visibility: router.pathname ==='/login' ?  'hidden' : 'visible'}} >
                    <Button variant="text" color='inherit' onClick={loginClicked}>
                        LOGIN
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};




