import React, { useState } from 'react';
import './style.css'; // Import your CSS file for additional styles

const Settings = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [backupStatus, setBackupStatus] = useState('');
  const [restoreStatus, setRestoreStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  const handleSaveSettings = () => {
    alert(`API URL saved: ${apiUrl}`);
  };

  const handleSaveNotifications = () => {
    alert(`Notifications saved:\nEmail: ${emailNotifications ? 'On' : 'Off'}\nSMS: ${smsNotifications ? 'On' : 'Off'}`);
  };

  const handleBackupData = () => {
    setBackupStatus('Backup successful.');
    setTimeout(() => setBackupStatus(''), 3000); // Clear message after 3 seconds
  };

  const handleRestoreData = () => {
    // Simulating data restoration
    setRestoreStatus('Data restored.');
    setTimeout(() => setRestoreStatus(''), 3000); // Clear message after 3 seconds
  };

  const handleDeleteData = () => {
    // Simulating delete all data logic
    if (window.confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
      setDeleteStatus('All data deleted.');
      setTimeout(() => setDeleteStatus(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <section className="settings">
      <header>
        <h1 style={{
          padding: '.75em 1.25em',
          backgroundColor: 'rgb(105, 155, 245, 0.5)',
          borderRadius: '.35em',
          margin: '.5em',
          fontSize: '1.35em',
          color: 'inherit',
          textAlign: 'left',
        }}>Settings</h1>
      </header>
      <div className="settings-container">
        <div className="settings-section">
          <h3>General Settings</h3>
          <label htmlFor="api-url">API URL:</label>
          <input
            type="text"
            id="api-url"
            placeholder="Enter API URL"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
          />
          <button className="save-settings" onClick={handleSaveSettings}>
            Save Settings
          </button>
        </div>

        <div className="settings-section">
          <h3>Notification Preferences</h3>
          <label htmlFor="email-notifications" className="notification-label">
            <input
              type="checkbox"
              id="email-notifications"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            Email Notifications
          </label>
          <label htmlFor="sms-notifications" className="notification-label">
            <input
              type="checkbox"
              id="sms-notifications"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
            SMS Notifications
          </label>
          <button className="save-notifications" onClick={handleSaveNotifications}>
            Save Notification Preferences
          </button>
        </div>

        <div className="settings-section">
          <h3>Data Management</h3>
          <button className="data-action" onClick={handleBackupData}>
            Backup Data
          </button>
          {backupStatus && <p className="status-message">{backupStatus}</p>}

          <button className="data-action" onClick={handleRestoreData}>
            Restore Data
          </button>
          {restoreStatus && <p className="status-message">{restoreStatus}</p>}

          <button className="data-action delete-data" onClick={handleDeleteData}>
            Delete All Data
          </button>
          {deleteStatus && <p className="status-message delete">{deleteStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Settings;
