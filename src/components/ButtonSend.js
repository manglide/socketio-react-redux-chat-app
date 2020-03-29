import React from 'react';
import '../assets/css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

function ButtonSend() {
  return (
    <div>
        <FontAwesomeIcon icon={['fab', 'telegram']} size="2x" />
    </div>
  );
}

export default ButtonSend;
