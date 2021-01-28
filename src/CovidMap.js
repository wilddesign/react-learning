import React from 'react';
import {WorldMap} from 'react-svg-worldmap';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class CovidMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isIndividualCountriesDataLoaded: false,
      chosenCountry: null
    }
    this.chooseCountry = this.chooseCountry.bind(this);
  }

  chooseCountry() {
    this.props.chooseCountry(arguments[2]);
  }

  componentDidMount () {
    //fetch last data for all countries
    const urlAllCountriesCovidData = 'https://api.covid19api.com/summary';
    fetch(urlAllCountriesCovidData).then((response) => response.json()).then((data) => {

      let rawData = data.Countries;
      let fittedData = rawData.map(country => ({
        country: country.CountryCode.toLowerCase(),
        value: country.TotalConfirmed
      }));
      this.setState({
        isIndividualCountriesDataLoaded: true,
        individualCountriesData: fittedData
      });
    },(error) => {
      this.setState({
          isIndividualCountriesDataLoaded: true,
          error
      });
    });

  }

  render() {
  const {
    error,
    isIndividualCountriesDataLoaded,
    individualCountriesData
  } = this.state;

  let element = (
    <div>
    <CardHeader title="Total cases by country" subheader="Worldwide"/>
    <CardContent>
      <WorldMap color="blue" size="lg" data={individualCountriesData} onClickFunction={this.chooseCountry}/>
    </CardContent>
    </div>
  )

  //display countries data
  if (error) {return <div>Error: {error.message}</div>;}
  else if (!isIndividualCountriesDataLoaded) {return <div>Loading...</div>;} else
  {return element;}
  }

}

export default CovidMap;

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
