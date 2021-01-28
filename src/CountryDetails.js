import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class CountryDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCountryChosen: false,
      isCountryLoaded: false,
      countryCode: null,
      countryName: null,
      countryCapital: null
    }
  }

  componentDidUpdate(prevProps) {
        if ((prevProps.country == null) || (prevProps.country != this.props.country)) {
          //fetch country data
          const urlCountryData = 'https://restcountries.eu/rest/v2/alpha/'+this.props.country;
          fetch(urlCountryData).then((response) => response.json()).then((data) => {
            this.setState({
              isCountryChosen: true,
              isCountryLoaded: true,
              countryCode: data.alpha2Code,
              countryName: data.name,
              countryCapital: data.capital,
              countryNativeName: data.nativeName
            });
          },(error) => {
            this.setState({
                isCountryChosen: true,
                error
            });
          });
        }

    }

  render() {


    //fetch country data, update the state and render
    if (!this.state.isCountryChosen) {
      return <p>Choose a country on the map!</p>;
    } else {
      const element = (
          <div>
            <CardHeader
              avatar={
                <Avatar aria-label="Country code">
                  {this.state.countryCode}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={this.state.countryNativeName}
              subheader={this.state.countryName}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Capital city: {this.state.countryCapital}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-expanded=""
                aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse timeout="auto" unmountOnExit>
            </Collapse>
          </div>);
          return element;
    }

  };

};

export default CountryDetails;
