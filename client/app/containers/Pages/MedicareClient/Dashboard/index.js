import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import {
  Grid, Card, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'; // Import required components from recharts
import RecentActivities from './RecentActivities';
import CustomizeGraph from './CustomizeGraph';
import data from './data.json'; // Import the JSON data

function ClientDashboard(props) {
  const title = `${brand.name} - Bot page`;
  const description = brand.desc;
  const { intl } = props;

  const [bots, setBots] = useState([]);
  const [selectedBotId, setSelectedBotId] = useState(1); // Default to the first bot
  const [selectedBotData, setSelectedBotData] = useState({});
  const [customizing, setCustomizing] = useState(false); // State to handle customization mode

  useEffect(() => {
    setBots(data.bots || []); // Set the list of bots from the JSON file and handle empty data
  }, []);

  // Update the selected bot's data when a new bot is selected
  useEffect(() => {
    const selectedBot = bots.find((bot) => bot.id === selectedBotId);
    if (selectedBot) {
      setSelectedBotData(selectedBot);
    }
  }, [selectedBotId, bots]);

  const handleBotSelectionChange = (event) => {
    setSelectedBotId(event.target.value);
  };

  const handleCustomizeClick = () => {
    setCustomizing(true);
  };

  const handleBackToDashboard = () => {
    setCustomizing(false);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" style={{ marginBottom: '20px', textAlign: 'center' }}>
          Client Bot Dashboard Overview
        </Typography>

        {/* Bot Selection Dropdown */}
        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Select a Bot</InputLabel>
          <Select value={selectedBotId} onChange={handleBotSelectionChange}>
            {bots.map((bot) => (
              <MenuItem key={bot.id} value={bot.id}>
                {bot.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {!customizing ? (
          <>
            <Grid container spacing={4}>
              {/* Performance Indicator */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {selectedBotData?.name} Performance Overview
                    </Typography>
                    {/* Check if performanceData exists before rendering */}
                    {selectedBotData?.performanceData ? (
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={selectedBotData.performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="responses" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="successRate" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <Typography>No performance data available for this bot.</Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              {/* Recent Activities */}
              <Grid item xs={12} md={4}>
                <RecentActivities activities={selectedBotData?.recentActivities || []} />
              </Grid>
            </Grid>

            {/* Customize Graph Section */}
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <Typography variant="h6">Customize {selectedBotData?.name}'s Graph</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleCustomizeClick}>
                Customize Graphs
              </Button>
            </div>
          </>
        ) : (
          <CustomizeGraph onBack={handleBackToDashboard} botData={selectedBotData} />
        )}
      </div>
    </div>
  );
}

ClientDashboard.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(ClientDashboard);
