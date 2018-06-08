import React, { Component } from 'react';


class WelcomeUserMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Welcome, Andy</button>
          <div class="dropdown-content">
            <a href="#">Preferences</a>
            <a href="#">User Profiles</a>
            <a href="#">Log out</a>
          </div>
        </div>
        );
    }
}

export default WelcomeUserMenu;