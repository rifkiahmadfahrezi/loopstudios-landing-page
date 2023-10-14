import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'


export default class Navbar extends React.Component{
	render(){
		return (
			<nav className="w-screen py-6 px-2 fixed">
				<div className="container mx-auto flex items-center justify-between">
					<NavbarLogo/>
					<NavbarMenu/>
				</div>
			</nav>
		)
	}
}