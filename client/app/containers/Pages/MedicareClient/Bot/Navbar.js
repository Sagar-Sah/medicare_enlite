import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="clientNavbar" style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '99%',
      textAlign: 'center',
      borderRadius: '.5em',
      overflow: 'hidden',
      margin: '.5em',
      marginBottom: '2em',
      gap: '.35em .25em'
    }}>
      <div
        className={`nav-button ${activeTab === 'Active Bots' ? 'active' : ''}`}
        onClick={() => handleTabClick('Active Bots')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Active Bots
      </div>
      <div
        className={`nav-button ${activeTab === 'Deactive Bots' ? 'active' : ''}`}
        onClick={() => handleTabClick('Deactive Bots')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Deactivate Bots
      </div>
      <div
        className={`nav-button ${activeTab === 'Training Data' ? 'active' : ''}`}
        onClick={() => handleTabClick('Training Data')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Training Data
      </div>
      <div
        className={`nav-button ${activeTab === 'Bot Analytics' ? 'active' : ''}`}
        onClick={() => handleTabClick('Bot Analytics')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Bot Analytics
      </div>
      <div
        className={`nav-button ${activeTab === 'Activity Logs' ? 'active' : ''}`}
        onClick={() => handleTabClick('Activity Logs')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Activity Logs
      </div>
      <div
        className={`nav-button ${activeTab === 'Settings' ? 'active' : ''}`}
        onClick={() => handleTabClick('Settings')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        Settings
      </div>
      <div
        className={`nav-button ${activeTab === 'User Feedback' ? 'active' : ''}`}
        onClick={() => handleTabClick('User Feedback')}
        style={{
          minWidth: '300px',
          flexGrow: '1',
          padding: '.5em',
          cursor: 'pointer',
          fontSize: '20px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '600',
          textTransform: 'capitalize'
        }}
      >
        User Feedback
      </div>
    </div>
  );
};

Navbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Navbar;
