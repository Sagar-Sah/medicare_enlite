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
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '.75em 1em',
            backgroundColor: '#0f3c4c',
            color: '#fff',
            margin: '0 .6em',
          }}>Bot Management</h2>
        </div>
        <section className="bot-overview" style={{
          padding: '1em'
        }}>
          {bots.length > 0 ? (
            <table id="bot-table" textAlign="center">
              <thead style={{ backgroundColor: 'rgb(37, 130, 160, .5)' }}>
                <tr>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Bot ID</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Status</th>
                  <th style={{ width: '20%', padding: '1em 0.25em' }}>Success Rate</th>
                  <th style={{ width: '40%', padding: '1em 0.25em' }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'rgb(37, 130, 160, .15)' }}>
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
                          backgroundColor: '#66b6d2',
                          fontSize: '.9em',
                          padding: '.65em',
                          margin: '.5em 0',
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
                          backgroundColor: 'rgb(200,5,10, 1)',
                          color: 'inherit',
                          padding: '.65em',
                          margin: '.5em 0',
                          fontSize: '.79em'
                        }}>
                        Delete
                      </button>
                      <button
                        className="action-btn edit-btn" onClick={() => editBot(index)}
                        style={{
                          width: '100px',
                          backgroundColor: '#66b6d2',
                          color: 'inherit',
                          fontSize: '.9em',
                          padding: '.65em',
                          margin: '.5em 0',
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
              backgroundColor: '#3ba1c5',
              color: 'white'
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
