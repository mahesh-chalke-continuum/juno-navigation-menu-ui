import React, { Component } from 'react';


class ClientSystemsMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Client Systems</button>
          <div class="dropdown-content">
            <a href="#">CLIENT SYSTEMS</a>
            <a href="#">DEVICES</a>
            <a href="#">BDR</a>
            <a href="#">PATCHES</a>
            <a href="#">BACKUPS</a>
            <a href="#">VAULT</a>
          </div>
        </div>

        );
    }
}

export default ClientSystemsMenu;