import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Box, Button } from '@material-ui/core'
// import AuthenticationService from '../services/authentication-service'
// import context from '../context/context'


export const Header: React.FC = ( ) => {


    return (<>
        {/* La barre de navigation commune a toutes les pages */}
        <div className="head">
            <Link to="/fighters" className="band-logo left">
                <img src="https://images4.fanpop.com/image/photos/16100000/An-awesome-looking-DBZ-banner-dragonball-z-movie-characters-16137914-660-276.jpg" alt="logo"/>
            </Link>
                <Link to="/" className="band-logo left">
                    <Box>
                        <Button color="secondary" variant="contained">Logout</Button>
                    </Box>
                </Link>
            :
                <Link to="/register" className="band-logo right">
                    <Box>
                        <Button color="primary" variant="contained">Enregistrement</Button>
                    </Box>
                </Link>
        </div>
    </>)
}