//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CovidMap from './CovidMap';
import CovidWorldPanel from './CovidWorldPanel';
import Typography from '@material-ui/core/Typography';
import CountryDetails from './CountryDetails'
import CovidPlot from './CovidPlot'

function App() {
// use hook to store a state in this function component
const [chosenCountry, chooseCountry] = useState(null);

  return (
    <div className="App">
      <Grid container spacing={2} justify="space-around">
        <Grid item xs={11}>
        <Grid container direction="row" spacing={2} itemalign="stretch" justify="space-around">
          <Grid item xs sm md>
            <Card>
              <CardHeader title="COVID19 daily dispatch" subheader="Online fleeing attendant"/>
              <CardContent>
                <Typography component="p" variant="body2">
                Too busy for a pneumonia, huh?
                </Typography>
                <Typography component="p" variant="caption">
                That's a place just for you! Find out the current whereabouts of Covid19 & stay safe!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs sm md>
            <Card>
              <CardHeader title="Pandemic today"/>
              <CardContent>
                <CovidWorldPanel/>
              </CardContent>
            </Card>
          </Grid>
            <Grid item xs sm md>
              <Card>
                <CardHeader title="Total cases by country"/>
                <CardContent>
                  <CovidMap chooseCountry={chooseCountry}/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11}>
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={2}>
            <Grid item xs sm md>
              <Card>
                  <CountryDetails country={chosenCountry}/>
              </Card>
            </Grid>
            <Grid item xs sm md>
              <Card>
                  <CovidPlot country={chosenCountry}/>
              </Card>
            </Grid>
            <Grid item xs sm md>
              <Card>
                <CardHeader title="Plots"/>
                <CardContent>
                  <p>plots here</p>
                  <CovidPlot country={chosenCountry}/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

/*
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> s your granny a hipertensive diabetic with a faint heart? are you an insomniac due to paranoia about covid? or maybe you simply want to postpone your appointment with the Grim Reaper until further notice for sensible business reasons? or simply you want to party hard this weekend without fearing the looming death? That's a tool just for you! Get your latest info on where covid is subsiding and move there! Updated daily, so you can book a flight or pack your car the same day!

      Dane globalne
      During a global pandemic it is difficult to find a place unaffected... there are only places less or more affected. Find them here!!.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>*/
