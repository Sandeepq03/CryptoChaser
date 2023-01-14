import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Container, Typography } from '@material-ui/core'
import Carousel from './Carousel'


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./Banner.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    // Formatting for Banner
    bannerContext: {
        height: "70vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        padding: 25,
        justifyContent: "space-around",
        

    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
})
)
//Banner Function to Display
const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContext}>
                <div className={classes.tagline}>
                    <Typography variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}>
                        Crypto Chaser
                    </Typography>
                    <Typography variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}>
                        get all the info regarding your favorite crypto currency
                    </Typography>
                        <Carousel />
                </div>

            </Container>
        </div>
    )
}

export default Banner
