import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={8}>
            <Paper>
              <p>dfdfd</p>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <p>COVID19 daily dispatch</p>
            </Paper>
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
