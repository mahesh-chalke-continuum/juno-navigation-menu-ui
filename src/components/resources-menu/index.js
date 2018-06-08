import React, { Component } from 'react';


class ResourcesMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Resources</button>
          <div class="dropdown-content">
            <a href="#">Partner Support</a>
            <a href="#">Doc Center</a>
            <a href="#">Continuum University</a>
            <a href="#">Collaborate</a>
            <a href="#">Accounting</a>
          </div>
        </div>
        );
    }
}

export default ResourcesMenu;