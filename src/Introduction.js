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
