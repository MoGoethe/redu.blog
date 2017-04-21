import React from "react"
import { connect } from "react-redux"
import MenuItem from "./MenuItem"



const Menu = () =>{
	const MenuListData = [
		{
			id:0,
			isActive:true,
			iconClass:'anticon-bars',
			iconName:'时间轴',
		},
		{
			id:1,
			isActive:false,
			iconClass:'anticon-tags',
			iconName:'标签',
		}
	]
	return (
		<div className="header">
			<div className="main">
				<div className="header-menu">
					<ul className="menu-list">
					{
						MenuListData.map(item=><MenuItem iconClass={item.iconClass} iconName={ item.iconName } isActive = { item.isActive } key={ item.id } />)
					}
					</ul>
				</div>
				<div className="header-search">
					<input type="text" id="search-input" placeholder="搜索..." />
					<button id="search-btn"><i className="anticon anticon-search"></i></button>
				</div>
				<div className="header-login">
					<a href="#" className="login"><i className="menu-item-icon anticon anticon-login"></i><span>第三方登录</span></a>
				</div>
			</div>
		</div>
	)
}

export default Menu