import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Introduction extends React.Component {

  render() {

      const elem = (
        <div>
        <CardHeader title="COVID19 daily dispatch" subheader="Online fleeing attendant"/>
        <CardContent>
          <Typography component="p" variant="body2">
          Too busy for a pneumonia, huh?
          </Typography>
          <Typography component="p" variant="caption">
          That's a place just for you! Find out the current whereabouts of Covid19 & stay safe!
          </Typography>
        </CardContent>
        </div>
      );
      return elem;
    }
  }


export default Introduction;

/*
jakiś ładny obrazek ze statystykami dla świata z ikonkami
*/


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
