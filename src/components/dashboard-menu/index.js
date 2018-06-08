import React, { Component } from 'react';


class DashboardMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Dashboard</button>
          <div class="dropdown-content">
            <a href="#">My Dashboard</a>
            <a href="#">Tickets</a>
          </div>
        </div>

        );
    }
}

export default DashboardMenu;