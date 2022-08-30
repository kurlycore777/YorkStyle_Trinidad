import React from 'react'

//MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className='text-white' style={{ backgroundColor: '#2471A3' }}>
            {/* Section: Social media */}
            <section className="p-3 border-bottom text-center">

                <div>
                    {/* Facebook */}
                    <a className="m-2 text-reset" href="#!" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>

                    {/* Twitter */}
                    <a className="m-2 text-reset" href="#!" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>

                    {/* Instagram */}
                    <a className="m-2 text-reset" href="#!" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>

                    {/* Linkedin */}
                    <a className="m-2 text-reset" href="#!" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </section>
            {/* Section: Social media */}

            {/* Section links */}
            <section className='p-5 text-center'>
                <Grid container spacing={4}>
                    <Grid item xl={4} lg={4} md={6} sm={6} sx={{ mx: 'auto' }}>
                        <Typography variant="subtitle1" component="div" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Lorem ipsum
                        </Typography>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius numquam
                            pariatur veritatis nobis, amet expedita inventore magnam libero vitae.</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={6} sx={{ mx: 'auto' }}>
                        <Typography variant="subtitle1" component="div" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Lorem ipsum
                        </Typography>
                        <ul className='list-unstyled'>
                            <li>LINK</li>
                            <li>LINK</li>
                            <li>LINK</li>
                        </ul>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={6} sx={{ mx: 'auto' }}>
                        <Typography variant="subtitle1" component="div" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Lorem ipsum
                        </Typography>
                        <ul className='list-unstyled'>
                            <li>LINK</li>
                            <li>LINK</li>
                            <li>LINK</li>
                        </ul>
                    </Grid>
                </Grid>
            </section>
            {/* Fin Section links */}

            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                YorkStyle © {new Date().getFullYear()} Hecho por Diego Alonso Trinidad Ojeda.
            </div>
            {/* Copyright */}

        </footer>
    )
}

export default Footer