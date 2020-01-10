import React, {Component} from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {

    state = {
           menuIcon: faBars,
           sidebarStatus: ''
    }

    toggleSidebar = () => {
        if ( this.state.sidebarStatus === '' ) {
            this.setState({
                menuIcon: faTimes,
                sidebarStatus: 'navigation__sidebar-open'
            });
        } else {
            this.setState({
                menuIcon: faBars,
                sidebarStatus: ''
            });
        }
    }

    render() {
        return (
            <nav className={"navigation " + this.state.sidebarStatus}>
                <FontAwesomeIcon icon={this.state.menuIcon} onClick={this.toggleSidebar} className="navigation__hamburger" />
                <Sidebar />
                <h1 className="navigation__title">Compare Movies Info Game</h1>
            </nav>
        );
    }
}

export default Navigation;