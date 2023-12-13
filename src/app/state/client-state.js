// src/app/client-state.js

/* @useClient */
import React, { useState } from 'react';

function ClientState() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return { activeTab, handleTabChange };
}

export default ClientState;
