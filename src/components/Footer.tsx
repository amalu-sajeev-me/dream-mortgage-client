import { CopyrightOutlined, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box display="flex" flexDirection="column" mt="2rem" p="2rem" sx={{
            backgroundColor: 'var(--ford-blue)',
            color: 'whitesmoke'
        }}>
            <Typography>
                All rights reserved <CopyrightOutlined fontSize="small" /> Dream Morgtage 2023
            </Typography>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                <Box display="flex"
                    flexDirection="column"
                    justifyContent="left"
                    alignContent="center"
                    textAlign="left"
                >
                    <Typography variant="button">
                        follow us on &nbsp;
                        <Twitter />
                        <Instagram />
                        <Facebook />
                        <LinkedIn />
                    </Typography>
                    
                </Box>
                <Box>
                    Contact | contact@dream-mortgage.com
                </Box>
            </Box>
        </Box>
    );
}