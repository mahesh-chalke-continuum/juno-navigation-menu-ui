import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CustomerLogo from './components/customer-logo'
import DashboardMenu from './components/dashboard-menu'
import ClientSystemsMenu from './components/client-systems-menu'
import AutomationMenu from './components/automation-menu'
import ConfigurationMenu from './components/configuration-menu'
import ReportsMenu from './components/reports-menu'
import WelcomeUserMenu from './components/welcome-user-menu'
import ResourcesMenu from './components/resources-menu'

class App extends Component {
  render() {
    return (
      <div class="menu-root">
        <CustomerLogo />
        <DashboardMenu />
        <ClientSystemsMenu />
        <AutomationMenu />
        <ConfigurationMenu />
        <ReportsMenu />
        <WelcomeUserMenu />
        <ResourcesMenu />
      </div>
    );
  }
}

export default App;
