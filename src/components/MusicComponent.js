// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import { grey } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     background: "#181818",
//     width: '100%',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 225,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//     color: '#181818',
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
//   direction: {
//     color: '#181818',
//   },
//   typography: {
//     color: '#bdbdbd',
//   }
// }));

// export default function MusicComponent() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.root}>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography className={classes.typography} component="h5" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <div className={classes.controls}>
//           <IconButton style={{ color: grey[400] }} aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton style={{ color: grey[400] }} aria-label="play/pause">
//             <PlayArrowIcon className={classes.playIcon} />
//           </IconButton>
//           <IconButton style={{ color: grey[400] }} aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </div>
//       </div>
//       <CardMedia
//         className={classes.cover}
//         image="/assets/images/bad-brains-album.jpeg"
//         title="Live from space album cover"
//       />
//     </Card>
//   );
// }

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
    background: 'linear-gradient(45deg, #B1DEE4 30%, #D2F5EB 90%)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Music() {
  const classes = useStyles();

  return (
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                Music
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Spotify
              </Typography>
            </CardContent>
          </div>
          <div className={classes.cardImage}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                (PLAYER)
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