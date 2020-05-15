import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export const mainListItems = (
  <div>
    <ListItem>
      <ListItemText align="center" primary="Camp Week Itenirary" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div className={'listText'}>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 1: Welcome & Discover!" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 2: Courage Day, Potions & Alchemy Day" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 3: Funny T-shirt & Care of Magical Creatures Day" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 4: Charms Day" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 5: Science & Herbology Day " />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 6: Opposite Day & Astrology Day" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Day 7: Pick Up Day " />
    </ListItem>
  </div>
);
