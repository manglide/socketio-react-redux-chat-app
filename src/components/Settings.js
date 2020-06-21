import React from 'react';
import '../assets/css/App.css';


import SettingsForm from './SettingsForm';

function Settings() {
  return (
    <div>
      <div className="settingsCanvas">
        <SettingsForm />
      </div>
    </div>
  );
}

export default Settings;
