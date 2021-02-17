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
