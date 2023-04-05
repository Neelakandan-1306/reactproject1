
import './App.css';
import { ThemeProvider } from "@material-ui/core/styles";
import SearchAppBar from './components/Appbar';
import Godfather from './components/Godfather';
import Matrix from './components/Matrix';
import Revenant from './components/Revenant';
import Rocky from './components/Rocky';
import Welcome from './components/Welcome';
import Fade from 'react-reveal/Fade';
import Fightclub from './components/Fightclub';
import Dune from './components/Dune';
import Goodfellas from './components/Goodfellas';
import Intestellar from './components/Intestellar';
import Footer from './Footer';
// import Table from './components/Table';
// import { MyComponent } from './components/api';

function App() {
  return (
    <div className="App">
          {/* <ThemeProvider theme={customtheme}> */}
      <SearchAppBar />
      {/* </ThemeProvider> */}
      <Fade botton big distance='20%' duration={2500}>
      <Welcome/>
      <Rocky/>
      <Goodfellas/>
      <Godfather/>
      <Matrix/>
      <Revenant/>
      <Fightclub/>
      <Intestellar/>
      <Dune/>
      </Fade>
      <Footer/>
    </div>
  );
}

export default App;
