import React, { useState } from 'react';
import img1 from '../Assets/intestellar.webp';
import img2 from '../Assets/ArtIntestellar.jpg';
import { Fade } from 'react-reveal';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Intestellar() {
  const [info, setInfo] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      setInfo(
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
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
              <a href='#' onClick={handleClick}>INTESTELLAR</a>
            </h1>
          </a>
          {info && (
            <Fade bottom distance="20%" duration={1500}>
              <Card sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'revert-layer' }}>
                <CardHeader title="SYNOPSIS" sx={{ color: 'white',fontWeight: 'bolder' }} />
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="body1">
                    <h1
                      id="info"
                      style={{
                        color: 'white',
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold'
                      }}>
                      {info}
                    </h1>
                    <a style={{color:'white'}} href='https://youtu.be/zSWdZVtXT7E' target='_blank'>CLICK TO WATCH TRAILER</a>
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