import React from "react";

const MenuItem = ({ iconClass , iconName ,isActive }) =>(
	<li className={isActive? 'menu-item active' : 'menu-item'}>
		<i className={"menu-item-icon anticon " + iconClass}></i><span className="menu-item-text">{ iconName }</span>
	</li>	
)

export default MenuItem
