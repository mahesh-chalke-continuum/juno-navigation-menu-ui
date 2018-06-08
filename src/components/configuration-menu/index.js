import React, { Component } from 'react';


class ConfigurationMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Configuration</button>
          <div class="dropdown-content">
            <a href="#">GENERAL SETUP</a>
            <a href="#">RMM</a>
            <a href="#">YOUR CLIENTS</a>
            <a href="#">YOUR COMPANY</a>
            <a href="#">ADD ON PRODUCTS</a>
          </div>
        </div>
        );
    }
}

export default ConfigurationMenu;