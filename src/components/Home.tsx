import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { ServiceViewCard } from "./cards/ServiceViewCard";
import bgImage from '../assets/home-bg.jpg';

export const Home = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '500px',
                    background: `url(${bgImage}) no-repeat`,
                    backgroundPosition: 'left top',
                    backgroundSize: 'cover',
                    aspectRatio: 'auto',
                    mt: '4rem',
                    backgroundAttachment: 'scroll',
                    position: 'relative'
                }}
            >
                <Box width="50%" pt="6rem" pl="2rem" textAlign="left">
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'sans-serif',
                            borderRadius: '1rem'
                        }}>
                        Let us make your mortgage experience stress-free.
                        <br />
                        <Link variant="button" sx={{color: 'white'}}>
                            <Button color="inherit">
                                Contact us today!
                            </Button>
                        </Link>
                    </Typography>
                </Box>
                <Box
                    sx={{ margin: '1rem', position: 'absolute', bottom: 0, width: '100%' }}
                    display="flex"
                    justifyContent="center"
                    gap="1rem"
                    flexWrap="wrap"
                >
                    <ServiceViewCard
                        title="Pre-Approval"
                        description="
Pre-approval is a preliminary assessment from a lender estimating your eligibility and maximum loan amount based on your financial profile"
                    />
                    <ServiceViewCard
                        title="Re-Finance"
                        description="Refinance: Trade your old loan for a new one with better terms."
                    />
                    <ServiceViewCard
                        title="Loan Products"
                        description="
We offer diverse mortgage options to fit your needs, from first-time homebuyer programs to jumbo loans and investment properties."
                    />
                </Box>
            </Box>
            <Divider />
            <Typography variant="h6" m="2rem" color="darkgray">
                Other Services
            </Typography>
            <Divider />
            <Box display="flex" flexWrap="nowrap" gap="1rem" mt="2rem">
                <ServiceViewCard
                    darkTheme title="Monthly Mortgage Calcuator"
                    buttonIsLink="#"
                    description="Estimate your monthly mortgage payment with just a few clicks - get a clearer picture of your homeownership budget."
                />
                <ServiceViewCard
                    darkTheme
                    title="Affordability Calculator"
                    buttonIsLink="#"
                    description="Figure out your budget-friendly mortgage limit and optimize your home search with our Affordability Calculator."
                />
                <ServiceViewCard
                    darkTheme
                    title="Re-finance Calculator"
                    buttonIsLink="#"
                    description="Explore potential savings and see if refinancing makes sense with our interactive Refinance Calculator."
                />
                <ServiceViewCard
                    darkTheme
                    title="Join as a Loan Officer"
                    buttonIsLink="#"
                    description="Join our team and help families achieve their dream of homeownership!"
                />
            </Box>
        </>
    );
}