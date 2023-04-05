import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import red from "@material-ui/core/colors/red";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#111211'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="green"
            aria-label="open drawer"
            style={{ color: "red" }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            
          </Typography>
            <center>CINEMAPARADISO</center>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'Bebas Neue': 'search' }}
              sx={{width:0.75}}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import red from "@material-ui/core/colors/red";
// import axios from 'axios';
// import Welcome from './Welcome';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   const [movies, setMovies] = React.useState([]);
//   const [query, setQuery] = React.useState("");

//   const handleSearch = () => {
//     const options = {
//       method: 'GET',
//       url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
//       params: {q: 'game of thr'},
//       headers: {
//         'X-RapidAPI-Key': 'a5d650c89bmsh093e709feb284a5p123a36jsn3280564f8bdc',
//         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//       }
//     };
    

//     axios
//       .request(options)
//       .then(function (response) {
//         setMovies(response.data.titles);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{ background: "#111211" }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             aria-label="open drawer"
//             style={{ color: "red" }}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             Movies Database
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search for movies..."
//               inputProps={{ "aria-label": "search" }}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyPress={handleKeyPress}
//             />
//             <IconButton onClick={handleSearch}>
//               <SearchIcon />
//             </IconButton>
//           </Search>
//         </Toolbar>
//       </AppBar>
//       {movies.length > 0 ? (
//         <div>
//           {movies.map((movie) => (
//             <Welcome
//               key={movie.id}
//               title={movie.title}
//               year={movie.year}
//               description={movie.description}
//               poster={movie.poster}
//             />
//           ))}
//         </div>
//       ) : (
//         <Welcome />
//       )}
//     </Box>
//   );
// }
