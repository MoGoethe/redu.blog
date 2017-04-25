import React from "react";

const MenuItem = ({ iconClass , iconName ,isActive ,handleClick }) =>(
	<li className={isActive? 'menu-item active' : 'menu-item'} onClick = { handleClick }>
		<i className={"menu-item-icon anticon " + iconClass}></i><span className="menu-item-text">{ iconName }</span>
	</li>	
)

export default MenuItem
