import React from 'react';
import '../assets/css/App.css';

import ResetButton from './ResetButton';

function Settings() {
  return (
    <div>
      <div className="settingsCanvas">
        <h2>Settings Handler</h2>
      </div>
      <div className="bottomCanvas">
        <ResetButton />
      </div>
    </div>
  );
}

export default Settings;
