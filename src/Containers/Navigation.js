import React, {useState} from "react";

import Sidebar from "../Components/Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    //state
    const [menuIcon, toggleIcon] = useState(faBars);
    const [sidebarStatus, changeSidebarStatus] = useState('');

    //state handler
    const toggleSidebar = () => {
            if ( sidebarStatus === '' ) {
                toggleIcon(faTimes);
                changeSidebarStatus('navigation__sidebar-open');
            } else {
                toggleIcon(faBars);
                changeSidebarStatus('');
            }
        }

    //generate sidebar and hamburger menu
    return (
        <nav className={"navigation " + sidebarStatus}>
            <FontAwesomeIcon icon={menuIcon} onClick={toggleSidebar} className="navigation__hamburger" />
            <Sidebar />
            <h1 className="navigation__title">Compare Movies Info Game</h1>
        </nav>
    );
    
};

export default Navigation;