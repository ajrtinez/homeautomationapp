import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TheatersIcon from '@material-ui/icons/Theaters';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import { grey } from '@material-ui/core/colors';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AcUnitIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Temperature" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MusicNoteIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Music" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Media" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WbSunnyIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Lights" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SecurityIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Security" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon style={{ color: grey[400] }} />
      </ListItemIcon>
      <ListItemText style={{ color: grey[400] }} primary="Settings" />
    </ListItem>
  </div>
);