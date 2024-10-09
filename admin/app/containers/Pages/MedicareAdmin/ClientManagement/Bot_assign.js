import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from MUI
import './Botassign.css'; // Ensure this file exists
import clientImage from './client.png';

const Botassign = () => (
  <div className="botassign-container" style={{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '2em .5em',
    padding: '.5em'
  }}>
    <div className="left-section" style={{
      height: '600px',
      overflowY: 'auto',
      width: '400px',
      flexGrow: '1',
    }}>
      <List style={{
        padding: '0', // this is for removing default top padding
      }}>
        <ListItem
          sx={{
            bgcolor: 'rgb(125, 125, 125, 0.25)',
            marginBottom: '.5em',
            padding: 'auto .25em',
            textTransform: 'uppercase',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Rubik, sans-serif'
          }}
        >
          <ListItemText><h2 style={{
            fontFamily: 'Rubik, sans-serif',
            fontWeight: '600',
            margin: '0'
          }}>Assign Bot To Client</h2></ListItemText>
        </ListItem>

        {[...Array(10)].map((_, index) => (
          <ListItem
            key={index}
            sx={{
              alignItems: 'center',
              marginBottom: '.5em',
              padding: '.25em 1em',
              overflow: 'hidden',
              bgcolor: 'rgb(125, 125, 125, 0.25)',
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Client" src={clientImage} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              sx={{ overflow: 'hidden' }}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {' — I\'ll be in your neighborhood doing errands this…'}
                </React.Fragment>
              }
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '.25em 1em',
                borderRadius: '.25em',
                textTransform: 'capitalize',
                backgroundColor: 'green'
              }}
            >
              Assign
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
    <div className="right-section" style={{
      height: '600px',
      width: '400px',
      overflowY: 'auto',
      flexGrow: '1',
    }}>
      <List
        style={{
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
          <ListItemText><h2 style={{
            fontFamily: 'Rubik, sans-serif',
            fontWeight: '600',
            margin: '0',
            textAlign: 'center',
          }}
          >Details of Client Activity</h2></ListItemText>
        </ListItem>

        {[...Array(10)].map((_, index) => (
          <ListItem
            key={index}
            sx={{
              alignItems: 'center',
              marginBottom: '.5em',
              padding: '.25em 1em',
              overflow: 'hidden',
              bgcolor: 'rgb(125, 125, 125, 0.25)',
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Client" src={clientImage} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              sx={{ overflow: 'hidden' }}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {' — I\'ll be in your neighborhood doing errands this…'}
                </React.Fragment>
              }
            />
            {/* Add the Assign button here as well */}
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '.25em 1em',
                borderRadius: '.25em',
                textTransform: 'capitalize',
                backgroundColor: 'green'
              }}
            >
              Details
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
);

export default Botassign;
