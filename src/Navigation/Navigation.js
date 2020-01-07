import React, {Component} from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {

    state = {
           menuIcon: faBars
    }

    toggleSidebar = () => {
        document.querySelector('.navigation__sidebar').classList.toggle('navigation__sidebar-open');
        if (document.querySelector('.navigation__sidebar').classList.contains('navigation__sidebar-open')) {
            this.setState({ menuIcon: faTimes});
        } else {
            this.setState({ menuIcon: faBars});
        }
    }

    render() {
        return (
            <nav className="navigation">
                <FontAwesomeIcon icon={this.state.menuIcon} onClick={this.toggleSidebar} className="navigation__hamburger" />
                <Sidebar />
                <h1 className="navigation__title">Compare Movies Info Game</h1>
            </nav>
        );
    }
}

export default Navigation;