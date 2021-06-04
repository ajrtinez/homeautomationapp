import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 400,
    background: 'linear-gradient(45deg, #E3D1F3 30%, #E4AFB0 90%)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Temperature() {
  const classes = useStyles();

  return (
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                Temperature
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Living Room
              </Typography>
            </CardContent>
          </div>
          <div className={classes.cardImage}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                (IMAGE)
              </Typography>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia 
              className={classes.cardMedia} 
              image="/assets/images/profile.jpeg" 
              title="Test Title" 
            />
          </Hidden> */}
        </Card>
      </CardActionArea>
  );
}