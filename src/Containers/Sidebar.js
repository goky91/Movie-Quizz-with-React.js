import React, {Component} from "react";

class Sidebar extends Component {
    render() {
        return (
            <div className="navigation__sidebar">
                <img className="sidebar__profile-photo" src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                <div className="sidebar__username">Username</div>
            </div>
        );
    }
}

export default Sidebar;