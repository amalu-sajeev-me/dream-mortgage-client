import {  PhoneAndroid, WhatsApp } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Link, Typography } from "@mui/material"
export const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'var(--navy-blue)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Box>
                <Typography variant="h5">Dream Mortgage</Typography>
            </Box>
            <Box display="flex" gap="2rem">
                <Link href="tel:0000000000" sx={{color: 'white'}}>
                    <IconButton color="inherit" sx={{outline: 'none', fontSize: 'small'}}>
                        <PhoneAndroid/>
                        +91 4567 987 976
                    </IconButton>
                </Link>
                <Link href="https://wa.me/0000000000" sx={{color: 'white'}}>
                    <IconButton color="inherit" sx={{outline: 'none', fontSize: 'small'}}>
                        <WhatsApp/>
                        +91 4567 987 976
                    </IconButton>
                </Link>
                {/* <img src={logo} height="32px"/> */}
                <Link href="#" sx={{color: 'white', textDecoration: 'none'}}>
                    <Button size="medium" variant="contained" color="primary">
                        My Login
                    </Button>
                </Link>
            </Box>
        </AppBar>
    );
}