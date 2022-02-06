import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "../header/header";

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'

        }}>
            <Header />
            <Box sx={{overflowY:'hidden'}}>{children}</Box>
            
        </Box>
    );
}