import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const BotDeployed = () => (
  <List
    sx={{
      height: '328px',
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '350px',
      flexGrow: 1,
      padding: 0,
    }}
  >
    <ListItem
      sx={{
        bgcolor: 'rgb(125, 125, 125, 0.25)',
        marginBottom: '.5em',
        padding: 'auto .25em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
    >
      <ListItemText sx={{ fontWeight: '800' }}>Bot Delopyed</ListItemText>
    </ListItem>
    <ListItem
      sx={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        bgcolor: 'rgb(125, 125, 125, 0.25)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      sx={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        bgcolor: 'rgb(125, 125, 125, 0.25)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      sx={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        bgcolor: 'rgb(125, 125, 125, 0.25)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      sx={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        bgcolor: 'rgb(125, 125, 125, 0.25)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      sx={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        bgcolor: 'rgb(125, 125, 125, 0.25)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        sx={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
  </List>
);

export default BotDeployed;
