import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from 'enl-components/Tables/tableStyle-jss';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import botsData from './bots.json';
import './style.css';

const ClientManagement = () => {
  const title = brand.name + ' - Client Management';
  const description = brand.desc;

  const [bots, setBots] = useState([]);
  const [trainingMaterials, setTrainingMaterials] = useState('');

  useEffect(() => {
    setBots(botsData);
  }, []);

  const toggleBotStatus = (index) => {
    const updatedBots = [...bots];
    updatedBots[index].status = updatedBots[index].status === 'Running' ? 'Stopped' : 'Running';
    setBots(updatedBots);
  };

  const deleteBot = (index) => {
    const updatedBots = bots.filter((_, i) => i !== index);
    setBots(updatedBots);
  };

  const editBot = (index) => {
    alert(`Edit configuration for ${bots[index].id}`);
  };

  const saveTrainingMaterials = () => {
    alert('Training materials saved!');
    console.log('Training Materials:', trainingMaterials);
  };

  const { classes } = useStyles();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="client_management" style={{ fontFamily: 'Inter, sans-serif' }}>
        <section className="bot-overview" style={{
          padding: '1em'
        }}>
          <Toolbar className={classes.toolbar} style={{
            backgroundColor: 'rgb(1, 130, 220, 0.3)',
            borderRadius: '.25em',
            margin: '.5em 0',
          }}>
            <div className={classes.title}>
              <Typography className={classes.title} variant="h6" style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                padding: '.65em 0',
              }}>
                Bot Management
              </Typography>
            </div>
          </Toolbar>
          {bots.length > 0 ? (
            <table id="bot-table" textAlign="center">
              <thead style={{ backgroundColor: 'rgba(125, 125, 125, 0.5)' }}>
                <tr>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Bot ID</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Status</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Success Rate</th>
                  <th style={{ width: '40%', padding: '1em 0.25em' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((bot, index) => (
                  <tr key={bot.id}>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.id}</td>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.status}</td>
                    <td style={{ padding: '.5em 0.25em', alignContent: 'center' }}>{bot.successRate}</td>
                    <td style={{
                      padding: '.5em 0.25em',
                      alignContent: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '.5em',
                      justifyContent: 'space-around',
                    }}>
                      <button
                        className="action-btn stop-btn"
                        onClick={() => toggleBotStatus(index)}
                        style={{
                          width: '100px',
                          backgroundColor: 'rgb(1,120,220, 0.7)',
                          padding: '.5em 1em',
                          color: 'inherit',
                        }}
                      >
                        {bot.status === 'Running' ? 'Stop' : 'Run'}
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteBot(index)}
                        style={{
                          width: '100px',
                          backgroundColor: 'rgb(255,0,0, 0.8)',
                          color: 'inherit !important',
                          padding: '.5em 1em'
                        }}>
                        Delete
                      </button>
                      <button
                        className="action-btn edit-btn" onClick={() => editBot(index)}
                        style={{
                          width: '100px',
                          backgroundColor: 'rgb(1,120,226, 0.8)',
                          color: 'inherit !important',
                          padding: '.5em 1em'
                        }}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading bots...</p>
          )}
          <button
            id="refresh-btn"
            className='refresh_bots'
            onClick={() => window.location.reload()}
            style={{
              width: '220px',
              margin: '1em 0',
            }}
          >
            Refresh Bots
          </button>
        </section>

        <section className="training-materials" style={{
          padding: '1em'
        }}>
          <Typography
            className={classes.title}
            style={{
              fontSize: '1.25em',
              fontWeight: 'bold',
              padding: '.75em 1em',
              backgroundColor: 'rgb(1, 130, 220, 0.3)',
              borderRadius: '.25em',
              margin: '.75em 0',
            }}
            variant="h6"
          >
            Manage Training Materials
          </Typography>
          <textarea
            className='training_material_area'
            id="training-materials"
            value={trainingMaterials}
            onChange={(e) => setTrainingMaterials(e.target.value)}
            placeholder="Edit training materials here..."
          />
          <button className='save_training' id="save-training-btn" onClick={saveTrainingMaterials}>
            Save Training Materials
          </button>
        </section>
      </div>
    </div>
  );
};

export default ClientManagement;
