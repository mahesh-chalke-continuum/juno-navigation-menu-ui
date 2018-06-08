import React, { Component } from 'react';


class ReportsMenu extends Component {
    render() {
        return (
                    <div class="dropdown">
          <button class="dropbtn">Reports</button>
          <div class="dropdown-content">
            <a href="#">FOR YOUR CLIENTS</a>
            <a href="#">FOR YOUR BUSINESS</a>
            <a href="#">FAVORITES</a>
            <a href="#">CUSTOM REPORTS</a>
          </div>
        </div>
        );
    }
}

export default ReportsMenu;