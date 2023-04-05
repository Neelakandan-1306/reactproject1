import React, { useState } from 'react';
import img1 from '../Assets/dune.webp';
import img2 from '../Assets/ArtDune.webp';
import { Fade } from 'react-reveal';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Dune() {
  const [info, setInfo] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      setInfo(
        'Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.'

      );
    }, 1);
  }

  function handleClose() {
    setInfo('');
  }

  return (
    <div id="one">
      <img src={img1} />
      <div id="center">
        <Fade distance="20%" duration={1500}>
          <a href="#" onClick={handleClick}  >
            <h1 id="text" >
            <Fade bottom distance="20%" duration={1500}>
              <a href='#' onClick={handleClick}>DUNE</a>
              </Fade>
            </h1>
          </a>
          {info && (
            <Fade distance="20%" duration={1500}>
              <Card sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'revert-layer' }}>
                <CardHeader title="SYNOPSIS" sx={{ color: 'Black'}} />
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="body1">
                    <h1
                      id="info"
                      style={{
                        color: 'Black',
                        fontSize: '17px',
                        fontFamily: 'sans-serif'
                      }}>
                      {info}
                    </h1>
                    <a style={{color:'white',backgroundColor:'black'}} href='https://youtu.be/8g18jFHCLXk' target='_blank'>CLICK TO WATCH TRAILER</a>
                    <IconButton onClick={handleClose} style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 5, right: 5 }}>
  <CloseIcon />
</IconButton>
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          )}
        </Fade>
      </div>
    </div>
  );
}