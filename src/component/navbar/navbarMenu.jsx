import React from 'react'
import NavbarMenuItem from './NavbarMenuItem'

export default class NavbarMenu extends React.Component{


	render(){
		return(
			<div className="flex align-center">
				<NavbarMenuItem link="#" text="About"/>
				<NavbarMenuItem link="#" text="Careers"/>
				<NavbarMenuItem link="#" text="Events"/>
				<NavbarMenuItem link="#" text="Products"/>
				<NavbarMenuItem link="#" text="Support"/>
			</div>
		)
	}
}