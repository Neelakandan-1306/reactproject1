import React, { useState } from 'react';
import img1 from '../Assets/Rocky.jpg';
import img2 from '../Assets/Artrocky.jpg';
import { Fade } from 'react-reveal';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Rocky() {
  const [info, setInfo] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      setInfo(
        'A small-time boxer gets a chance to fight the world heavyweight champion and he blindly jumps into the ring in a bid to earn respect and glory.'
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
        <Fade bottom distance="20%" duration={1500}>
          <a href="#" onClick={handleClick}  >
            <h1 id="text" >
              <a href='#' onClick={handleClick}>ROCKY</a>
            </h1>
          </a>
          {info && (
            <Fade bottom distance="20%" duration={500}>
              <Card sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'revert-layer' }}>
                <CardHeader title="SYNOPSIS" sx={{ color: 'white' }} />
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="body1">
                    <h1
                      id="info"
                      style={{
                        color: 'black',
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        fontWeight:'bold'
                      }}>
                      {info}
                    </h1>
                    <a style={{color:'white',backgroundColor:'black'}} href='https://youtu.be/-Hk-LYcavrw' target='_blank'>CLICK TO WATCH TRAILER</a>
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