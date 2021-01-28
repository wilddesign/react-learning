import React from 'react';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class CountryPlot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCountryChosen: false,
      isCountryLoaded: false,
      data: null
    }
  }

  componentDidUpdate(prevProps) {
        if ((prevProps.country == null) || (prevProps.country !== this.props.country)) {
          //fetch country data for the previous month
          let now = new Date();
          let yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate()-1);
          let latest = yesterday.toISOString().slice(0,10);

          let earlier = new Date(now);
          earlier.setDate(earlier.getDate()-15);
          let weekAgo = earlier.toISOString().slice(0,10);

          const urlCountryData = 'https://api.covid19api.com/country/'+this.props.country+'/status/confirmed?from='+weekAgo+'T00:00:00Z&to='+latest+'T00:00:00Z';
          fetch(urlCountryData).then((response) => response.json()).then((data) => {
            console.log(data);
            let extractedData = data.map((elem, index, array) => ({nr: elem.Date.slice(0,10), total: elem.Cases, diff: array[index-1] ? elem.Cases-array[index-1].Cases : 0}))
            console.log(extractedData);
            this.setState({
              isCountryChosen: true,
              isCountryLoaded: true,
              data: extractedData
            });
          },(error) => {
            this.setState({
                isCountryChosen: true,
                data: [],
                error
            });
          });
        }

    }

  render() {


    //fetch country data, update the state and render
    if (!this.state.isCountryChosen) {
      return <p>Choose a country on the map first!</p>;
    } else if (this.state.data.length > 16) {
      return <p>Dataset is too big! Choose another country!</p>;
    } else {
      const element = (
        <div>
            <CardHeader title="New Covid19 cases" subheader="In previous 2 weeks"/>
            <CardContent>
              <AreaChart width={730} height={250} data={this.state.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="blue" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="nr" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="diff" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </CardContent>
        </div>);
          return element;
    }

  };

};

export default CountryPlot;

/*

*/
