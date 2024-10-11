import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ActiveUser = () => (
  <List
    style={{
      height: '328px',
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '350px',
      flexGrow: 1,
      padding: 0,
    }}
  >
    <ListItem
      style={{
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
        marginBottom: '.5em',
        padding: 'auto .25em',
        fontFamily: 'Rubik sans-serif',
        fontWeight: '700',
        textTransform: 'uppercase',

      }}
    >
      <ListItemText style={{ fontFamily: 'Rubik, sans-serif' }}>Active Users</ListItemText>
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
        fontFamily: 'Rubik, sans-serif',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        style={{
          overflow: 'hidden',
          fontFamily: 'Rubik, sans-serif',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              style={{
                color: 'text.primary',
                display: 'inline',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
        fontFamily: 'Rubik, sans-serif',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        style={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              style={{
                color: 'text.primary',
                display: 'inline',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        style={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              style={{
                color: 'text.primary',
                display: 'inline',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend? what are you doing man'
        style={{
          overflow: 'hidden',
          fontFamily: 'Rubik, sans-serif',
          fontSize: '13px',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              style={{
                color: 'text.primary',
                display: 'inline',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Rubik, sans-serif',
              }}
            >
              Ali Connors
            </Typography>
            {' — I\'ll be in your neighborhood doing errands this…'}
          </React.Fragment>
        )}
      />
    </ListItem>
    <ListItem
      style={{
        alignItems: 'center',
        marginBottom: '.5em',
        padding: '.25em 1em',
        overflow: 'hidden',
        backgroundColor: 'rgb(1, 1, 200, 0.125)',
      }}>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        style={{
          overflow: 'hidden',
        }}
        secondary={(
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              style={{
                color: 'text.primary',
                display: 'inline',
                fontSize: '13px',
                fontWeight: '500',
                fontFamily: 'Rubik, sans-serif',
              }}
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

export default ActiveUser;
