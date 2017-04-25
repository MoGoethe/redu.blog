import React , { Component }from "react"
import { connect } from "react-redux"
import MenuItem from "./MenuItem"
import { toggleShowView } from "../../actions"

export default class Menu extends Component{


	render(){
		return (
			<div className="header">
				<div className="main">
					<div className="header-menu">
						<ul className="menu-list">
						{
							this.props.menuListData.map(item=><MenuItem  
											iconClass={item.iconClass}  
											iconName={ item.iconName } 
											key={ item.id } 
											isActive = { this.props.currentMenuItem === item.id }
											handleClick = { () => this.props._dispatch(toggleShowView( item.id )) }
										/>)
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
}
