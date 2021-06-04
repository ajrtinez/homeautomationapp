import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import Date from './DateComponent';



const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 400,
    background: 'linear-gradient(45deg, #FEFBE6 30%, #FFFFFF 90%)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Lighting() {
  const classes = useStyles();

  return (
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                Lighting
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Multi-room
              </Typography>
            </CardContent>
          </div>
          <div className={classes.cardImage}>
            <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
                (LIGHT ADJUSTMENT)
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