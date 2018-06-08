import React, { Component } from 'react';


class AutomationMenu extends Component {
    render() {
        return (
            <div class="dropdown">
                <button class="dropbtn">Automation</button>
                <div class="dropdown-content">
                    <a href="#">Tasks and sequences</a>
                    <a href="#">Scripts</a>
                </div>
            </div>
        );
    }
}

export default AutomationMenu;