import React, { useState } from 'react';
import img1 from '../Assets/fightclub.jpg';
import img2 from '../Assets/Artfc.jpg';
import { Fade } from 'react-reveal';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Fightclub() {
  const [info, setInfo] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      setInfo(
        'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.'
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
              <a href='#' onClick={handleClick}>FIGHTCLUB</a>
            </h1>
          </a>
          {info && (
            <Fade bottom distance="20%" duration={1500}>
              <Card sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'revert-layer' }}>
                <CardHeader title="SYNOPSIS" sx={{ color: 'black',fontWeight: 'bolder' }} />
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="body1">
                    <h1
                      id="info"
                      style={{
                        color: 'black',
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold'
                      }}>
                      {info}
                    </h1>
                    <a style={{color:'black',fontWeight: 'bold',backgroundColor:'white'}} href='https://youtu.be/BdJKm16Co6M' target='_blank'>CLICK TO WATCH TRAILER</a>
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