import React from 'react';

class CovidWorldPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isWorldDataLoaded: false,
      worldData: []
    }
  }

  componentDidMount() {
    //take yesterday's date
    let now = new Date();
    let yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate()-1);
    this.date = yesterday.toISOString().slice(0,10);
    // fetch data for the world
    const urlWorldCovidData = 'https://covid-api.com/api/reports/total?date=' + this.date;
    fetch(urlWorldCovidData).then((response) => response.json()).then((data) => {
      this.setState({
        isWorldDataLoaded: true,
        worldData: data.data
      });
    },(error) => {
      this.setState({
          isWorldDataLoaded: true,
          error
      });
    });

  }
  render() {
    const {
      error,
      isWorldDataLoaded,
      worldData
    } = this.state;
    //display world data
    if (error) {return <div>Error: {error.message}</div>;}
    else if (!isWorldDataLoaded) {return <div>Loading...</div>;} else
    {return (<p>hahahah {this.state.worldData.date}</p>);}
  }

}

export default CovidWorldPanel;

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
