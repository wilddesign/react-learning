//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Introduction from './Introduction';
import CovidMap from './CovidMap';
import CovidWorldPanel from './CovidWorldPanel';
import CountryDetails from './CountryDetails'
import CountryPlot from './CountryPlot'

function App() {
// use hook to store a state in this function component
const [chosenCountry, chooseCountry] = useState(null);

  return (
    <div className="App">
      <Grid container spacing={2} justify="space-around">
        <Grid item xs={11}>
        <Grid container direction="row" spacing={2} alignItems="stretch" justify="space-around">
          <Grid item xs sm md>
            <Card>
              <Introduction/>
            </Card>
          </Grid>
          <Grid item xs sm md>
            <Card>
              <CovidWorldPanel/>
            </Card>
          </Grid>
            <Grid item xs sm md>
              <Card>
                <CovidMap chooseCountry={chooseCountry}/>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11}>
        <Grid container direction="row" justify="space-around" alignItems="stretch" spacing={2}>
            <Grid item xs sm md>
              <Card>
                  <CountryDetails country={chosenCountry}/>
              </Card>
            </Grid>
            <Grid item xs sm md>
              <Card>
                  <CountryPlot country={chosenCountry}/>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
